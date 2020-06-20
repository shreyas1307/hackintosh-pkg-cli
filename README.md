
# Hackintosh Package CLI (for OpenCore) -- EXPERIMENTAL
 [![version](https://img.shields.io/npm/v/hackintosh-pkg-cli.svg?color=blue)](https://www.npmjs.com/package/hackintosh-pkg-cli) [![downloads](https://img.shields.io/npm/dw/hackintosh-pkg-cli.svg)](https://www.npmjs.com/package/hackintosh-pkg-cli)

![Hackintosh Package Downloader Logo](https://raw.githubusercontent.com/shreyas1307/hackintosh-pkg-electron/master/logo.png?token=AKZO6POLQT6NXPDM6WG2CG265RIBE)

<p align="center"><h2 align="center">Table of Contents</h2></p>
<p align="center">
	<a href="#about">About</a> |
	<a href="#projects-purpose">Project's purpose</a> |
	<a href="#credits">Credits</a> |
	<a href="#run-the-cli">Run the CLI</a> |
	<a href="#installing-the-cli-globally">Installing the CLI globally</a> |
 <a href="#packages">Packages</a> |
 <a href="#faqs">FAQs</a> |
	<a href="#authors">Authors</a> |
	<a href="#license">License</a>
</p>

<p align="center">
	<img src="https://github.com/shreyas1307/hackintosh-pkg-cli/blob/master/%5BCLI%5D%20Hackintosh%20Package%20Downloader%20x800.gif?raw=true" />
</p>

## About

This is an npm package helps you download some of the mandatory packages and optional Kexts for your OpenCore Hackintosh Build. A GUI Desktop App is also in the works, and will be coming soon.
  

## Project's Purpose

I made this CLI partly due to the fact that It was tiresome to continuously go over the releases and manually download the Assets. I knew this might help the community, who are very hardworking in what they do and make sure it's open-source too.
  
**Note**: I do not discourage or refrain the community from directly downloading from the respective GitHub URLs. In fact, I highly recommend users to read and understand the docs so that you will know what to expect. This CLI is merely an alternative!

## Credits  

I would like to credit the following GitHub repos for making this CLI possible:

- [Simon Boudrias - Inquirer JS](https://github.com/SBoudrias/Inquirer.js/)

- [Dave Eddy - Clear](https://github.com/bahamas10/node-clear)

- [Patorjk - Figlet](https://github.com/patorjk/figlet.js)

- [Chalk](https://www.npmjs.com/package/chalk)

- [ORA](https://github.com/sindresorhus/ora)

**Be sure to check the above repos out if you're facing any issues! I am of course, always open to improvements.**
  
## Run the CLI

Just type in the following command in your terminal and run it! (Please check FAQ for more on testing and contributions)

- NPX: `npx hackintosh-pkg-cli`

## Installing the CLI globally

- NPM:

`npm i -g hackintosh-pkg-cli`

- Yarn:

`yarn global add hackintosh-pkg-cli`

- To invoke the CLI (Both **NPM** & **Yarn**)

`hackintosh-pkg-cli`

## Packages

The CLI currently currently is able to download Latest Asset releases from the following Repositories:

- [acidanthera/OpenCorePkg](https://www.github.com/acidanthera/OpenCorePkg)

- [acidanthera/VirtualSMC](https://www.github.com/acidanthera/VirtualSMC)

- [acidanthera/Lilu](https://www.github.com/acidanthera/Lilu)

- [acidanthera/WhateverGreen](https://www.github.com/acidanthera/WhateverGreen)

- [acidanthera/AppleALC](https://www.github.com/acidanthera/AppleALC)

- [acidanthera/IntelMausi](https://www.github.com/acidanthera/IntelMausi)

- [acidanthera/AirportBrcmFixup](https://www.github.com/acidanthera/AirportBrcmFixup)

- [acidanthera/BrcmPatchRAM](https://www.github.com/acidanthera/BrcmPatchRAM)

- [acidanthera/NVMeFix](https://www.github.com/acidanthera/NVMeFix)

- [acidanthera/VoodooPS2](https://www.github.com/acidanthera/VoodooPS2)

- [VoodooI2C/VoodooI2C](https://www.github.com/VoodooI2C/VoodooI2C)

- [al3xtjames/NoTouchID](https://www.github.com/al3xtjames/NoTouchID)

- [khronokernel/SmallTree-I211-AT-patch](https://www.github.com/khronokernel/SmallTree-I211-AT-patch)

- [Mieze/AtherosE2200Ethernet](https://www.github.com/Mieze/AtherosE2200Ethernet)

- [Mieze/RTL8111_driver_for_OS_X](https://www.github.com/Mieze/RTL8111_driver_for_OS_X)

- [Mieze/LucyRTL8125Ethernet](https://www.github.com/Mieze/LucyRTL8125Ethernet) -- Working on the download for this.

- [Sniki/OS-X-USB-Inject-All](https://www.github.com/Sniki/OS-X-USB-Inject-All)

- [RehabMan/OS-X-USB-Inject-All](https://www.github.com/RehabMan/OS-X-USB-Inject-All)

- [RehabMan/VoodooTSCSync](https://www.github.com/RehabMan/VoodooTSCSync)

- [XLNCUSBFIX]

- [VoodooHDA]

## For more information, please refer to the OpenCore "Gathering Files" Guide [here](https://dortania.github.io/OpenCore-Desktop-Guide/ktext.html) for more Info.
   

# FAQs

## 1. How can I test this out?  

- If you'd like to try it out , Run the following command `npx hackintosh-pkg-cli` in your terminal.

- Ensure you have git version control, and package manager - either npm (node package manager) or Yarn Installed. You may check if your system has them installed by running the following commands `git --version` and depending on your package manager of choice, run `npm --version` or `yarn --version`. If you don't have it installed, please visit:

- [Git](https://git-scm.com/downloads) to download/install git.
- [NodeJS](https://nodejs.org/en/download/) to download/install Node.Js (NPM gets installed with Node.Js).
- [Yarn](https://yarnpkg.com/en/docs/getting-started) to download/install Yarn Package Manager

- Alternatively, if you would like to contribute and test it locally, you may fork the repo, and/or clone it to your local desktop. Once you've done that, open the terminal in that local folder and run the command `npm install` for **NPM users** or `yarn install` for **Yarn users** to install the required dependencies.

- After that, you may open the folder in your editor of choice. Once again, in the terminal you may simply run `npm run pkg-cli` or `yarn run pkg-cli` to get it working. And voila!

## 2. Can I report any issues or bugs with the CLI? How do I report it?
- I appreciate all the reports on bugs or issues from the community!
- You may report an issue by going to this [Here](https://github.com/shreyas1307/hackintosh-pkg-cli/issues/new/choose) and next to the "Bug Report", click the button "Get Started"!

## 3. I would like to make a feature request. Where do I do it?

- I am open to your suggestions for the CLI!

- If you'd like to make a new feature request, just head over [here](https://github.com/shreyas1307/hackintosh-pkg-cli/issues/new/choose) and next to the "Feature Request", click the button "Get Started"!

## 4. I would like to make a pull request. How can I do it?
#### * Coming soon*
  

# Authors

- [@shreyas1307](https://github.com/shreyas1307) - Creator and Maintainer

- [@ale8k](https://github.com/ale8k) - Contributer
 

# License

The source code is released under the [MIT](https://github.com/shreyas1307/hackintosh-pkg-cli/blob/master/LICENSE).
