const HackintoshPkgInstall = require("./cliRoutes/index");

module.exports = (answers, updatedVersionsList) => {
    return new HackintoshPkgInstall().install(answers, updatedVersionsList);
};
