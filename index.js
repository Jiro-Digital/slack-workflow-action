const core = require('@actions/core');
const axios = require('axios');
const fs = require('fs');
const { join } = require('path');

async function run() {
  try {
    const path = core.getInput('path');
    const environment = core.getInput('environment');
    const webhookUrl = core.getInput('webhook_url');

    const pJson = fs.readFileSync(join(path, 'package.json'));
    const { name, version } = JSON.parse(pJson);

    const { statusText } = await axios.post(webhookUrl, {
      message: `${name} v${version} deployed to ${environment}`
    });

    core.setOutput('status', statusText);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
