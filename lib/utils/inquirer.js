const inquirer = import("inquirer");

exports.prompt = async(prompts) => await (await inquirer).default.prompt(prompts) // This is the default export from inquirer