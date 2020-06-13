module.exports.optionsMaker = (listItem = []) => {

    let config = {
        type: "list",
        name: `${listItem.package}/version`,
        message:
            `Select version of ${listItem.package} you would like to download: \n`,
        pageSize: 20,
        choices: [],
    }
    listItem.version.forEach(versionItem => {
        config.choices.push(versionItem.release_version)
    })

    return { options: config, package: listItem.package }
}