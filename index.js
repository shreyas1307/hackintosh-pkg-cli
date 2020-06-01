#!/usr/bin/env node

const cwd = require("process").cwd;
console.log(cwd);

const inquirer = require("inquirer");
const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const axios = require("axios");

const { hackintoshPkgInstall } = require("./cliModel/index");

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

prompt(hackintoshPkgInstall).then((answers) => {
    // options(answers);
    console.log(answers);
    axios
        .get("https://api.github.com/repos/acidanthera/OpenCorePkg/releases/")
        .then((x) => x.json())
        .then((x) => console.log(x));
});
