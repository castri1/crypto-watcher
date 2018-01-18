const path = require('path');
const fs = require('fs');

function execute() {
    fs.readdirSync(__dirname).forEach(function (file) {
        if (file.startsWith('index')) return;
        const taskPath = path.join(__dirname, file);
        const task = require(taskPath);
        task.execute();
    });
}

module.exports = execute();