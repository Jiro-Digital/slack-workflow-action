# slack-workflow-action

A GitHub action for sending a release notification to a Slack Workflow.

## Inputs

### `webhook_url`

**Required** The Slack Workflow webhook URL to post to.

### `environment`

*(optional)* The environment name used in the release message. Defaults to `production`.

### `path`

*(optional)* Path of package.json. Defaults to `./`.

## Example usage

```
uses: jirouk/slack-workflow-action@v1
with:
  webhook_url: 'https://hooks.slack.com/workflows/ABC123'
  environment: 'production'
```
