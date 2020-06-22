#!/usr/bin/env node

const cwd = require("process").cwd;
console.log(cwd);

const inquirer = require("inquirer");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const ora = require('ora');

const { hackintoshPkgInstall } = require("./cliModel/index");
const options = require("./options");
const { default: Axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config()

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
const spinner = ora('Downloading a few dependencies...')
spinner.color = 'yellow'
spinner.start();

appInitialize();

function appInitialize() {
    let getUpdatedVersionsURL = process.env.ENVIRONMENT === "DEVELOPMENT"
        ? `http://localhost:${process.env.PORT}/github/getUpdatedVersions`
        : `https://hackintosh-pkg-api.herokuapp.com/github/getUpdatedVersions`;

    let getUpdatedVersionsData = [];
    Axios.get(getUpdatedVersionsURL).then((res) => {
        spinner.color = 'green'
        spinner.text = "Downloaded dependencies"
        spinner.succeed()
        res.data.allVersions.forEach(x => {
            getUpdatedVersionsData.push(x)
        })

        prompt(hackintoshPkgInstall).then((answers) => {
            if (answers.packages.length === 0) return appInitialize()
            return options(answers, getUpdatedVersionsData);
        });
    }).catch(err => console.log(err))
};

