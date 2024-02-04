// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  [![License:${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  GitHub: [${data.questions}](https://github.com/${data.questions})
  
  For additional questions, contact me via email: ${data.email}
  `;
}

module.exports = generateMarkdown;
