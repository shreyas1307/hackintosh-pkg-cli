const inquirer = require('inquirer')
const fs = require('fs');
const downloadsFolder = require('downloads-folder');
const https = require('https')
const { default: Axios } = require("axios");
const { RELEASE_OR_DEBUG, LATEST_OR_CUSTOM_VERSION } = require('../cliModel/index')
const { optionsMaker } = require('../utils')

const prompt = inquirer.createPromptModule()

module.exports = class HackintoshPkgInstall {
    install(answers, updatedVersionsList = []) {

        prompt(RELEASE_OR_DEBUG).then(({ releaseOrDebug }) => {
            switch (releaseOrDebug) {
                case 'RELEASE':
                    return this.confirmation(releaseOrDebug, answers)
                    break;
                case 'DEBUG':
                    return this.confirmation(releaseOrDebug, answers)
                    break;
                default:
                    return;
            }
        })
    }

    // selectedVersion(packages, answers) { }

    confirmation(version, answers) {

        const notVersion = RELEASE_OR_DEBUG[0].choices.find(x => x !== version)
        const outputDir = `${downloadsFolder()}/hackintoshPkg`

        fs.mkdirSync(outputDir, { recursive: true });

        const { packages } = answers;

        packages.forEach((answer) => {
            const [user, repo] = answer.split('/')
            const url = `https://hackintosh-pkg-api.herokuapp.com/github/dataByPackageName`;
            const data = {
                "user": user,
                "repo": repo,
            }

            Axios.post(url, { ...data })
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

                })
                .catch((err) => {
                    console.log(url)
                    console.log("Sorry, Looks like an Error has occurred. ")
                    console.log("Error: ", err)
                })
                .finally(() => console.log(`Assets from ${user}/${repo} finished downloading!`))
        });

        return console.log(`Your downloads will be found under ${outputDir}`)
    }


};

