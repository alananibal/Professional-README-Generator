const generatePage = (answers) => {

    const {
        title,
        description,
        contents,
        installation,
        usage,
        credits,
        license,
        contributing,
        tests,
        gitRepo,
        email

    } = answers;
    let licenseBadge = ""
    if (license === 'MIT') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if (license === 'GNU') {
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if (license === 'Apache') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }

    return `
    # ${title}
${licenseBadge}


## Description 

${description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License/Badges](#license)
* [Contributing](#contributing)
* [Tests](#tests)


## Installation

${installation}

## Usage 

${usage}


## Credits

${credits}

## Contributing

${contributing}
## Tests

${tests}

## Questions

<a href="https://github.com/${gitRepo}">My git hub</a> 
<br>
<a href="mailto:${email}"> My Email </a>

    `;
};

module.exports = generatePage;