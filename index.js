const core = require('@actions/core');
const { notify, readPjson } = require('./notify');

async function run() {
  try {
    const path = core.getInput('path');
    const environment = core.getInput('environment');
    const webhookUrl = core.getInput('webhook_url');

    const { name, version } = readPjson(path);

    const statusText = await notify(webhookUrl, name, version, environment);

    core.setOutput('status', statusText);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
