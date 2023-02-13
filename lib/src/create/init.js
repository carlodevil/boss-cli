const { readConfig, createConfig, configExists } = require("../../utils/config");
const { root } = require("../../utils/const");
const { copyFolder } = require("../../utils/copy");
const { inquire, prompt } = require("../../utils/inquirer")

/** Creates a new boss project. */
exports.create = async (argv) => {
    if (configExists()) {
        console.log("Boss project already exists.");
        return;
    }
    const results = await prompt(questions)
    createConfig(results.name, results.author, results.description);
    copyFolder(`lib/templates/basis`, `${root}/`);

}

/** Questions to prompt user. */
const questions = [
    {
        name: 'name',
        message: 'Please provide the project/repository name:',
        type: 'string',
        //   suffix: ' [Example: "CoolName"]',
        validate: (answer) => answer.length > 0 ? true : "Please enter a valid name."
    },
    {
        name: 'author',
        message: 'Please provide the author name:',
        type: 'string',
        validate: (answer) => answer.length > 0 ? true : "Please enter a validname."
    },
    {
        name: 'description',
        message: 'Please provide a project description:',
        type: 'string',
        //   suffix: ' [Example: "CoolName"]',
        validate: (answer) => answer.length > 0 ? true : "Please enter a validname."
    }
]