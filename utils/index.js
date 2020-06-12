module.exports.optionsMaker = (listItem = []) => {
    let optionsArray = []
    let config = {
        type: "list",
        name: "version",
        message:
            `Select version of ${listItem.name}  you would like to download: \n`,
        pageSize: 20,
        choices: [],
    }
    listItem.version.forEach(versionItem => {
        config.choices.push(versionItem.release_version)
        // options.choices.push(new inquirer.Separator(listItem.package))
        // listItem.version.forEach(versionItem => {
        //     options.choices.push(`${listItem.package}@${versionItem.release_version}`)
        // })
    })

    optionsArray.push(config)


    return { options: optionsArray, package: listItem.name }
}