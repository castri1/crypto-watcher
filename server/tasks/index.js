const path = require('path');
const fs = require('fs');

function execute() {
    const normalizedPath = __dirname;
    fs.readdirSync(normalizedPath).forEach(function (file) {
        if (file.startsWith('index')) return;
        const taskPath = path.join(normalizedPath, file);
        const task = require(taskPath);
        task.execute();
    });
}

module.exports = execute();