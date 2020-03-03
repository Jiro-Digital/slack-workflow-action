const axios = require('axios');
const fs = require('fs');
const { join } = require('path');

const notify = async (webhookUrl, name, version, environment) => {
    const { statusText } = await axios.post(webhookUrl, {
        message: `${name} v${version} deployed to ${environment}`
    });
    return statusText;
};

const readPjson = (path) => {
    const pJson = fs.readFileSync(join(path, 'package.json'));
    return JSON.parse(pJson);
}

module.exports = { notify, readPjson };