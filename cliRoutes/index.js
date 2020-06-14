const inquirer = require('inquirer')
const fs = require('fs');
const downloadsFolder = require('downloads-folder');
const ora = require('ora');
const https = require('https')
const { default: Axios } = require("axios");
const { RELEASE_OR_DEBUG, LATEST_OR_CUSTOM_VERSION } = require('../cliModel/index')
const { optionsMaker } = require('../utils');
const { promise } = require('ora');

const prompt = inquirer.createPromptModule()

module.exports = class HackintoshPkgInstall {
    AllPackages = []

    constructor(AllPackages) {
        this.AllPackages = AllPackages
    }

    install(answers) {
        prompt(LATEST_OR_CUSTOM_VERSION).then(({ latestOrCustom }) => {
            switch (latestOrCustom) {
                case 'LATEST':
                    return this.latestVersion(answers);
                case 'SELECT VERSION':
                    return this.selectVersion(answers, this.AllPackages);
                default:
                    return null;
            }
        })
    }

    latestVersion = (answers) => {
        prompt(RELEASE_OR_DEBUG).then(({ releaseOrDebug }) => {
            switch (releaseOrDebug) {
                case 'RELEASE':
                    return this.latestVersionConfirmation(releaseOrDebug, answers)
                    break;
                case 'DEBUG':
                    return this.latestVersionConfirmation(releaseOrDebug, answers)
                    break;
                default:
                    return;
            }
        })
    }

    selectVersion = (answers, updatedVersionsList) => {
        const { packages } = answers
        const FinalSelectedPackages = []

        const filteredVersionList = updatedVersionsList.filter(item => {
            return packages.includes(item.package) ? true : false
        }).map((optionItem) => {
            return optionsMaker(optionItem)
        })

        const filteredListQuestions = filteredVersionList.map(x => x.options)

        prompt(filteredListQuestions).then(results => {
            let x = []
            Object.keys(results).map(resItem => {
                let extractName = resItem.split('/').splice(0, 2).join('/')
                return x.push({ package: extractName, version: results[resItem] })
            })
            x.forEach(y => FinalSelectedPackages.push(y))
        }).then(() => {
            prompt(RELEASE_OR_DEBUG).then(({ releaseOrDebug }) => {
                switch (releaseOrDebug) {
                    case 'RELEASE':
                        return this.selectVersionConfirmation(releaseOrDebug, FinalSelectedPackages)
                        break;
                    case 'DEBUG':
                        return this.selectVersionConfirmation(releaseOrDebug, FinalSelectedPackages)
                        break;
                    default:
                        return;
                }
            })
        })
    }

    selectVersionConfirmation = (version, packages = []) => {
        const notVersion = RELEASE_OR_DEBUG[0].choices.find(x => x !== version)
        const outputDir = `${downloadsFolder()}/hackintoshPkg`
        fs.mkdirSync(outputDir, { recursive: true });

        const packageReduceArray = []

        packages.forEach((pkg) => {
            const [user, repo] = pkg.package.split('/')

            const url = `https://hackintosh-pkg-api.herokuapp.com/github/dataByPackageName`;
            const data = {
                "user": user,
                "repo": repo,
                "version": pkg.version
            }

            packageReduceArray.push({
                version,
                outputDir,
                notVersion,
                url,
                data,
                dl: this.downloadFiles
            })
        })

        packageReduceArray.map(e => e.dl).reduce((prev, curr, i) => {
            return prev.then(() => {
                const { version, outputDir, notVersion, url, data } = packageReduceArray[i]
                return curr(version, outputDir, notVersion, url, data)
            })
        }, Promise.resolve())

        return console.log(`Your downloads will be found under ${outputDir}`)
    }

    latestVersionConfirmation(version, answers) {

        const notVersion = RELEASE_OR_DEBUG[0].choices.find(x => x !== version)
        const outputDir = `${downloadsFolder()}/hackintoshPkg`

        fs.mkdirSync(outputDir, { recursive: true });

        const { packages } = answers;

        const packageReduceArray = []

        packages.forEach((answer) => {
            const [user, repo] = answer.split('/')
            const url = `https://hackintosh-pkg-api.herokuapp.com/github/dataByPackageName`;
            const data = {
                "user": user,
                "repo": repo,
            }

            packageReduceArray.push({
                version,
                outputDir,
                notVersion,
                url,
                data,
                dl: this.downloadFiles
            })

        });

        // Alex rocks with sweaty socks : D
        packageReduceArray.map(e => e.dl).reduce((prev, curr, i) => {
            return prev.then(() => {
                const { version, outputDir, notVersion, url, data } = packageReduceArray[i]
                return curr(version, outputDir, notVersion, url, data)
            })
        }, Promise.resolve())


        return console.log(`Your downloads will be found under ${outputDir}`)
    }


    downloadFiles = (version, outputDir, notVersion, url, data) => {
        const spinner = ora(`Downloading Assets from ${data.user}/${data.repo}..`)
        spinner.color = 'yellow'
        spinner.start()

        let repoFound = this.AllPackages.find(x => x.package === `${data.user}/${data.repo}`)

        if (repoFound.version[0].downloadLink) {
            const headers = {
                "Accept": "*/*"
            }
            if (data.version) {
                let versionFound = repoFound.version.find(x => x.release_version === data.version)
                const file = fs.createWriteStream(`${outputDir}/${data.user}${data.repo}${versionFound.release_version}.zip`)
                file.on('finish', () => file.close())

                return Axios
                    .get(versionFound.downloadLink, { responseType: 'stream' })
                    .then((response) => {
                        response.data.pipe(file);
                        return spinner
                    })
                    .then((spin) => {
                        spin.clear()
                        spin.text = `Assets downloaded from ${data.user}/${data.repo}!`
                        spin.color = 'green'
                        spin.succeed()
                    })
            }

            const file = fs.createWriteStream(`${outputDir}/${data.user}${data.repo}-${repoFound.version[0].release_version}.zip`)
            file.on('finish', () => file.close())
            return Axios
                .get(repoFound.version[0].downloadLink, { responseType: 'stream' })
                .then((response) => {
                    response.data.pipe(file);
                    return spinner
                })
                .then((spin) => {
                    spin.clear()
                    spin.text = `Assets downloaded from ${data.user}/${data.repo}!`
                    spin.color = 'green'
                    spin.succeed()
                })

        } else {
            return Axios.post(url, { ...data })
                .then((response) => {
                    let findVersion = new RegExp("(" + version + ")", "gi")
                    let dontFindNotVersion = new RegExp("(" + notVersion + ")", "gi")

                    let filteredUrl = response.data.data.assets
                        .filter(x => {
                            if (findVersion.test(x.name)) {
                                return true
                            } else if ((!findVersion.test(x.name)) && (!dontFindNotVersion.test(x.name))) {
                                return true
                            }
                            return false
                        })
                        .map(x => ({ name: x.name, url: x.browser_download_url }))

                    filteredUrl.forEach(fileURL => {

                        const file = fs.createWriteStream(`${outputDir}/${fileURL.name}`)

                        file.on('finish', () => file.close())
                        https.get(fileURL.url, (data) => {
                            https.get(data.headers.location, (xdata) => {
                                xdata.pipe(file)
                            })
                        })

                    })
                    return spinner
                })
                .then((spin) => {
                    spin.clear()
                    spin.text = `Assets downloaded from ${data.user}/${data.repo}!`
                    spin.color = 'green'
                    spin.succeed()
                })
        }
    }
};

