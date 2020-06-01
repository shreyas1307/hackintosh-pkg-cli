module.exports.hackintoshPkgInstall = [
    {
        type: "checkbox",
        name: "packages",
        message: "Select packages or KEXTS for your Hackintosh Project ",
        default: [],
        pageSize: 9,
        choices: [
            "create-react-app",
            // 'react-router react-router-dom',
            // 'redux react-redux',
            // 'redux-thunk',
            // 'prop-types',
            // 'node-sass',
            // 'styled-components',
            // 'unstated',
            // 'unstated-next',
            // 'typescript',
            // 'react-a11y',
            // 'react-axe',
            // '@types/node',
            // '@types/react-redux',
            // '@types/react @types/react-dom',
            // '@types/react-router @types/react-router-dom',
            // '@types/jest'
        ],
    },
];
