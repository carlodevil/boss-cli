const path = require('path')
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

/** Creates temp location if it does not exist. */
if (process.env.TEST && !fs.existsSync('.temp')) {
    fs.mkdirSync('.temp');
    console.log(`.temp folder created`);
}

/** Returns the dir of the project. */
exports.root = process.env.TEST ? '.temp' : '.'