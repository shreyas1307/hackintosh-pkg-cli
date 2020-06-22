const inquirer = require("inquirer");
const { TERMINAL_ROWS } = require("../utils");

module.exports.hackintoshPkgInstall = [
    {
        type: "checkbox",
        name: "packages",
        message:
            "Select packages or KEXTS for your Hackintosh Project (Latest Releases)",
        default: [],
        pageSize: `${TERMINAL_ROWS}`,
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
            { name: "Mieze/LucyRTL8125Ethernet", value: "Mieze/LucyRTL8125Ethernet" },
            new inquirer.Separator(),
            new inquirer.Separator("USB"),
            { name: "Sniki/USBInjectAll", value: "Sniki/OS-X-USB-Inject-All" },
            { name: "RehabMan/OS-X-USB-Inject-All", value: "RehabMan/os-x-usb-inject-all" },
            new inquirer.Separator(),
            new inquirer.Separator("WiFi and Bluetooth"),
            { name: "AirportBrcmFixup", value: "acidanthera/AirportBrcmFixup" },
            { name: "BrcmPatchRAM", value: "acidanthera/BrcmPatchRAM" },
            new inquirer.Separator(),
            new inquirer.Separator("AMD CPU Specific"),
            { name: "XLNCUSBFIX", value: "dortania/XLNCUSBFIX" },
            { name: "VoodooHDA", value: "dortania/VoodooHDA" },
            new inquirer.Separator(),
            new inquirer.Separator("Extras"),
            { name: "VoodooTSCSync", value: "RehabMan/VoodooTSCSync" },
            { name: "NVMeFix", value: "acidanthera/NVMeFix" },
            new inquirer.Separator(),
            new inquirer.Separator("Laptop Specifics"),
            { name: "VoodooPS2", value: "acidanthera/VoodooPS2" },
            { name: "VoodooI2C", value: "VoodooI2C/VoodooI2C" },
            { name: "NVMeFix", value: "al3xtjames/NoTouchID" },
            new inquirer.Separator("Others"),
            { name: "OcBinaryData", value: "acidanthera/OcBinaryData" },
            { name: "AGPMInjector", value: "Pavo-IM/AGPMInjector" },
            { name: "CPUFriend", value: "acidanthera/CPUFriend" },
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