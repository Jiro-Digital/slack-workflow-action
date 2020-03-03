const moxios = require('moxios');
const { notify, readPjson } = require('./notify');

describe('test suite', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('read package.json', () => {
        const { name } = readPjson('./');
        expect(name).toEqual('slack-workflow-action')
    });

    test('notify', async () => {
        const webhookUrl = '/say/hello';

        moxios.stubRequest(webhookUrl, {
            status: 200,
            statusText: 'OK'
        });

        const statusText = await notify(webhookUrl, 'test-app', 'v1', 'test');

        expect(statusText).toEqual('OK');
    });

});
