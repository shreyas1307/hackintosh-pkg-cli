const inquirer = require('inquirer')
const fs = require('fs');
const downloadsFolder = require('downloads-folder');
const https = require('https')
const { default: Axios } = require("axios");
const { RELEASE_OR_DEBUG } = require('../cliModel/index')

const prompt = inquirer.createPromptModule()

module.exports = class HackintoshPkgInstall {
    install(answers) {
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

    confirmation(version, answers) {
        const outputDir = `${downloadsFolder()}/hackintoshPkg`
        fs.mkdirSync(outputDir, { recursive: true });

        const { packages } = answers;
        fs.mkdirSync('./downloads', { recursive: true });
        packages.forEach((answer) => {
            const [user, repo] = answer.split('/')
            const url = `https://api.github.com/repos/${user}/${repo}/releases/latest`;

            Axios.get(url)
                .then((response) => {
                    let filteredUrl = response.data.assets
                        .filter(x => {
                            if (x.name.includes(version.toLowerCase()) || x.name.includes(version.toUpperCase())) {
                                return x
                            }
                            return x
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

