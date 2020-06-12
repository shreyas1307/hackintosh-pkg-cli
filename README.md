

# Hackintosh Package CLI (for OpenCore) -- EXPERIMENTAL
 [![version](https://img.shields.io/npm/v/hackintosh-pkg-cli.svg?color=blue)](https://www.npmjs.com/package/hackintosh-pkg-cli) [![downloads](https://img.shields.io/npm/dw/hackintosh-pkg-cli.svg)](https://www.npmjs.com/package/hackintosh-pkg-cli)

## Table of Contents

- [About](#about)

- [Project's purpose](#projects-purpose)

- [Credits](#credits)

- [Run the CLI](#run-the-cli)

- [Installing the CLI globally](#installing-the-cli-globally)

- [Packages](#packages)

- [FAQs](#faqs)

- [License](https://github.com/devisle/advanced-react-cli/blob/master/LICENSE)

  

## About

  

This is an npm package helps you download some of the mandatory packages and optional Kexts for your OpenCore Hackintosh Build.

  

## Project's Purpose

I made this CLI partly due to the fact that It was tiresome to continuously go over the releases and manually download the Assets. I knew this might help the community, who are very hardworking in what they do and make sure it's open-source too.

  

**Note**: I do not discourage or refrain the community from directly downloading from the respective GitHub URLs. In fact, we highly recommend our users to read and understand the docs so that you will know what to expect. This CLI is merely an alternative!

  

## Credits

  

I would like to credit the following GitHub repos for making this CLI possible:

- [Simon Boudrias - Inquirer JS](https://github.com/SBoudrias/Inquirer.js/)


- [Dave Eddy - Clear](https://github.com/bahamas10/node-clear)

- [Patorjk - Figlet](https://github.com/patorjk/figlet.js)

- [Chalk](https://www.npmjs.com/package/chalk)

  

**Be sure to check the above repos out if you're facing any issues! We are of course, always open to improvements.**

  
## Run the CLI

Just type in the following command in your terminal and run it! (Please check FAQ for more on testing and contributions)

- NPX: `npx hackintosh-pkg-cli`

## Installing the CLI globally

- NPM:

`npm i -g advanced-react-cli`

- Yarn:

`yarn global add advanced-react-cli`

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

- [khronokernel/SmallTree-I211-AT-patch](https://www.github.com/khronokernel/SmallTree-I211-AT-patch)

- [Mieze/AtherosE2200Ethernet](https://www.github.com/Mieze/AtherosE2200Ethernet)

- [Mieze/RTL8111_driver_for_OS_X](https://www.github.com/Mieze/RTL8111_driver_for_OS_X)

- [Mieze/LucyRTL8125Ethernet](https://www.github.com/Mieze/LucyRTL8125Ethernet)

- [Sniki/OS-X-USB-Inject-All](https://www.github.com/Sniki/OS-X-USB-Inject-All)

- [RehabMan/OS-X-USB-Inject-All](https://www.github.com/RehabMan/OS-X-USB-Inject-All)
   

# FAQs

1. How can I test this out?  

- If you'd like to try it out , Run the following command `npx hackintosh-pkg-cli` in your terminal.

- Ensure you have git version control, and package manager - either npm (node package manager) or Yarn Installed. You may check if your system has them installed by running the following commands `git --version` and depending on your package manager of choice, run `npm --version` or `yarn --version`. If you don't have it installed, please visit:

- [Git](https://git-scm.com/downloads) to download/install git.
- [NodeJS](https://nodejs.org/en/download/) to download/install Node.Js (NPM gets installed with Node.Js).
- [Yarn](https://yarnpkg.com/en/docs/getting-started) to download/install Yarn Package Manager

- Alternatively, if you would like to contribute and test it locally, you may fork the repo, and/or clone it to your local desktop. Once you've done that, open the terminal in that local folder and run the command `npm install` for **NPM users** or `yarn install` for **Yarn users** to install the required dependencies.

- After that, you may open the folder in your editor of choice. Once again, in the terminal you may simply run `npm run pkg-cli` or `yarn run pkg-cli` to get it working. And voila!

2. Can I report any issues or bugs with the CLI? How do I report it?
- We appreciate all the reports on bugs or issues from the community!
- You may report an issue by going to this [Here](https://github.com/shreyas1307/hackintosh-pkg-cli/issues/new/choose) and next to the "Bug Report", click the button "Get Started"!
- If you wish to get in touch with us quicker, you may join our Discord server! The link is under the "Dev Isle Community" section

3. I would like to make a feature request. Where do I do it?

- We are open to your suggestions for the CLI!

- If you'd like to make a new feature request, just head over [here](https://github.com/shreyas1307/hackintosh-pkg-cli/issues/new/choose) and next to the "Feature Request", click the button "Get Started"!

4. I would like to make a pull request. How can I do it?
#### * Coming soon*
  

## Authors

- [@shreyas1307](https://github.com/shreyas1307) - Creator and Maintainer
 

## License

The source code is released under the [MIT](https://github.com/shreyas1307/hackintosh-pkg-cli/blob/master/LICENSE).
