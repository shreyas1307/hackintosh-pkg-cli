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
            new inquirer.Separator(),
            new inquirer.Separator("Must Haves"),
            { name: "OpenCorePkg", value: "acidanthera/OpenCorePkg" },
            { name: "VirtualSMC", value: "acidanthera/VirtualSMC" },
            { name: "Lilu", value: "acidanthera/Lilu" },
            new inquirer.Separator(),
            new inquirer.Separator("Graphics"),
            { name: "WhateverGreen", value: "acidanthera/WhateverGreen" },
            new inquirer.Separator(),
            new inquirer.Separator("Audio"),
            { name: "AppleALC", value: "acidanthera/AppleALC" },
            new inquirer.Separator(),
            new inquirer.Separator("Ethernet"),
            { name: "IntelMausi", value: "acidanthera/IntelMausi" },
            { name: "SmallTree-I211-AT-patch", value: "khronokernel/SmallTree-I211-AT-patch" },
            { name: "AtherosE2200Ethernet", value: "Mieze/AtherosE2200Ethernet" },
            { name: "RealtekRTL8111", value: "Mieze/RTL8111_driver_for_OS_X" },
            // "Mieze/LucyRTL8125Ethernet",
            new inquirer.Separator(),
            new inquirer.Separator("USB"),
            { name: "USBInjectAll", value: "Sniki/OS-X-USB-Inject-All" },
            // "RehabMan/OS-X-USB-Inject-All",
            new inquirer.Separator(),
            new inquirer.Separator("WiFi and Bluetooth"),
            { name: "AirportBrcmFixup", value: "acidanthera/AirportBrcmFixup" },
            { name: "BrcmPatchRAM", value: "acidanthera/BrcmPatchRAM" },
            new inquirer.Separator(),
            new inquirer.Separator("Extras"),
            { name: "NVMeFix", value: "acidanthera/NVMeFix" },
            new inquirer.Separator(),
            new inquirer.Separator("Laptop Specifics"),
            { name: "VoodooPS2", value: "acidanthera/VoodooPS2" },
            { name: "VoodooI2C", value: "VoodooI2C/VoodooI2C" },
            { name: "NVMeFix", value: "al3xtjames/NoTouchID" },
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

module.exports.LATEST_OR_CUSTOM_VERSION = [
    {
        type: 'list',
        name: 'latestOrCustom',
        message: "Would you like to download the Latest or select which version yourself?",
        choices: ['LATEST', 'SELECT VERSION']
    }
]