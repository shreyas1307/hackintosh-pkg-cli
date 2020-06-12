#!/usr/bin/env node

const cwd = require("process").cwd;
console.log(cwd);

const inquirer = require("inquirer");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");

const { hackintoshPkgInstall } = require("./cliModel/index");
const options = require("./options");
const { default: Axios } = require("axios");

const prompt = inquirer.createPromptModule();

clear();
console.log(
    chalk.green(
        figlet.textSync("Hackintosh Pkg CLI", {
            horizontalLayout: "fitted",
            font: "Small",
            verticalLayout: "full",
        })
    )
);

appInitialize();

function appInitialize() {
    // let getUpdatedVersionsURL = "https://hackintosh-pkg-api.herokuapp.com/github/getUpdatedVersions"
    // let getUpdatedVersionsData = [];
    // Axios.get(getUpdatedVersionsURL).then((res) => {
    //     res.data.allVersions.forEach(x => {
    //         getUpdatedVersionsData.push(x)
    //     })
    prompt(hackintoshPkgInstall).then((answers) => {
        if (answers.packages.length === 0) return appInitialize()
        return options(answers);
        // });
    })
};

