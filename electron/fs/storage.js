const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..', 'data');

function saveJSON(filename, data){
    if(!fs.existsSync(basePath)){
        fs.mkdirSync(basePath);
    }

    const fullPath = path.join(basePath, filename);
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = { saveJSON };