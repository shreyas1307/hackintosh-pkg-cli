#!/usr/bin/env node

const cwd = require("process").cwd;
console.log(cwd);

const inquirer = require("inquirer");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");

const { hackintoshPkgInstall } = require("./cliModel/index");
const options = require("./options");

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
    prompt(hackintoshPkgInstall).then((answers) => {
        if (answers.packages.length === 0) return appInitialize()
        return options(answers);
    });
};

