const HackintoshPkgInstall = require("./cliRoutes/index");

module.exports = (answers) => {
    return new HackintoshPkgInstall().install(answers);
};
