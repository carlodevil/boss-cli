const fs = require('fs');
const path = require('path');

function copyFolder(src, dest) {
    console.log(process.cwd());
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const files = fs.readdirSync(src);
    for (const file of files) {
        const curSrc = path.join(src, file);
        const curDest = path.join(dest, file);
        if (fs.lstatSync(curSrc).isDirectory()) {
            copyFolder(curSrc, curDest);
        } else {
            fs.copyFileSync(curSrc, curDest);
        }
    }
}

module.exports = {
    copyFolder
}