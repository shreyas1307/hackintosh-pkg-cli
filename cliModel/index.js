const inquirer = require("inquirer");

module.exports.hackintoshPkgInstall = [
    {
        type: "checkbox",
        name: "packages",
        message:
            "Select packages or KEXTS for your Hackintosh Project (Latest Releases)",
        default: [],
        pageSize: 9,
        choices: [
            new inquirer.Separator("Must Haves"),
            "acidanthera/OpenCorePkg",
            "acidanthera/VirtualSMC",
            "acidanthera/Lilu",
            new inquirer.Separator("Graphics"),
            "acidanthera/WhateverGreen",
            new inquirer.Separator("Audio"),
            "acidanthera/AppleALC",
            new inquirer.Separator("Ethernet"),
            "acidanthera/IntelMausi",
            "khronokernel/SmallTree-I211-AT-patch",
            "Mieze/AtherosE2200Ethernet",
            "Mieze/RTL8111_driver_for_OS_X",
            // "Mieze/LucyRTL8125Ethernet",
            new inquirer.Separator("Ethernet"),
            "Sniki/OS-X-USB-Inject-All",
            // "RehabMan/OS-X-USB-Inject-All",
            new inquirer.Separator("WiFi and Bluetooth"),
            "acidanthera/AirportBrcmFixup",
            "acidanthera/BrcmPatchRAM",
        ],
    },
];



module.exports.RELEASE_OR_DEBUG = [
    {
        type: 'list',
        name: 'releaseOrDebug',
        message: "Would you like to download the Release or the Debug Version?",
        choices: ['RELEASE', 'DEBUG']
    }
]