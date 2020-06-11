const fs = require('fs');
const downloadsFolder = require('downloads-folder');
const https = require('https')
const { default: Axios } = require("axios");

module.exports = class HackintoshPkgInstall {
    install(answers) {
        const outputDir = `${downloadsFolder()}/hackintoshPkg`
        fs.mkdirSync(outputDir, { recursive: true });

        const { packages } = answers;
        fs.mkdirSync('./downloads', { recursive: true });
        packages.forEach((answer) => {
            const [user, repo] = answer.split('/')
            const url = `https://api.github.com/repos/${user}/${repo}/releases/latest`;

            Axios.get(url)
                .then((response) => {
                    let filteredUrl = response.data.assets.map(x => ({ name: x.name, url: x.browser_download_url }))

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

