const inquirer = require("inquirer");
const axios = require("axios");
const prompt = inquirer.createPromptModule();

module.exports = class HackintoshPkgInstall {
    install(answers) {
        const { packages } = answers;
        packages.map((answer) => {
            console.log(answer);
            //     let api = `https://api.github.com/repos/${answer}/releases`;
            //     axios
            //         .get(api)
            //         .then((x) => console.log(x.data[0].assets[2]))
            //         .catch((x) => console.log(x));
        });
    }
};
