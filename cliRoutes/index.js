const inquirer = require("inquirer");
const fs = require('fs');
// const path = require('path')
const https = require('https')
const prompt = inquirer.createPromptModule();

const { get } = require('../services');
const { default: Axios } = require("axios");
const wget = require('wget-improved')

module.exports = class HackintoshPkgInstall {
    install(answers) {
        const { packages } = answers;
        fs.mkdirSync('./downloads', { recursive: true });
        packages.forEach((answer) => {
            const [user, repo] = answer.split('/')
            const url = `https://api.github.com/repos/${user}/${repo}/releases/latest`;

            Axios.get(url)
                .then((response) => {
                    let filteredUrl = response.data.assets.map(x => ({ name: x.name, url: x.browser_download_url }))

                    filteredUrl.forEach(fileURL => {

                        const file = fs.createWriteStream(`./downloads/${fileURL.name}`)

                        file.on('finish', () => file.close())
                        https.get(fileURL.url, (data) => {
                            https.get(data.headers.location, (xdata) => {
                                xdata.pipe(file)
                            })
                        })

                    })

                })
                .catch((x) => {
                    console.log("Sorry, Looks like an Error has occurred. Please check your internet connection!")
                });
        });
    }
};

