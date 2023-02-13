//@ts-check
const fs = require("fs");
const { root } = require("./const");

exports.readConfig = () => {
    const configFile = fs.readFileSync(`${root}/boss.config`, "utf-8");
    return JSON.parse(configFile);
}

exports.createConfig = (name, author, description) => {
    fs.writeFileSync(`${root}/boss.config`, JSON.stringify(new ConfigSchema({ name, author, description }), null, 2));
}

exports.configExists = () => {
    try {
        return fs.existsSync(`${root}/boss.config`);
    } catch (err) {
        console.error(`Error reading boss.config: ${err}`);
        return false;
    }
}

class ConfigSchema {
    constructor(config) {
        this.name = config.name;
        this.author = config.author;
        this.description = config.description;
        this.service = config.server ?? {};
        this.client = config.client ?? {};
        this.setup = config.setup ?? {};
    }
}
