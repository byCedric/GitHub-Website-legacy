<div align="center">
    <h1>GitHub Website</h1>
    <p>Let your work speak for itself, have a simple site that shows your GitHub feed!</p>
    <sup>
        <a href="https://github.com/bycedric/github-website/releases">
            <img src="https://img.shields.io/github/release/byCedric/GitHub-Website/all.svg?style=flat-square" alt="releases" />
        </a>
        <a href="https://github.com/bycedric/github-website/actions">
            <img src="https://img.shields.io/github/workflow/status/byCedric/GitHub-Website/CI/master.svg?style=flat-square" alt="builds" />
        </a>
		<a href="https://codeclimate.com/github/byCedric/GitHub-Website">
            <img src="https://img.shields.io/codeclimate/maintainability/byCedric/GitHub-Website.svg?style=flat-square" alt="builds" />
        </a>
        <a href="https://bycedric.com">
            <img src="https://img.shields.io/badge/demo-web-lightgrey.svg?style=flat-square" alt="demo" />
        </a>
    </sup>
    <br />
    <p align="center">
        <a href="https://github.com/bycedric/github-Website#getting-started"><b>Usage</b></a>
		&nbsp;&nbsp;&mdash;&nbsp;&nbsp;
		<a href="https://github.com/bycedric/github-Website#deploy-your-site"><b>Deploy</b></a>
        &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
        <a href="https://github.com/byCedric/GitHub-Website/blob/master/CHANGELOG.md"><b>Changelog</b></a>
    </p>
</div>

## What's inside?

This project gives you a self-updating personal website, based on the contributions you do in GitHub.
Besides GitHub, it also gives your visitors a helpful link to both Twitter and Dev.to accounts (if configured).
The code is built with [Next](https://github.com/zeit/next.js) and [Expo for Web](https://docs.expo.io/versions/v33.0.0/introduction/running-in-the-browser/).

## Getting started

Starting an instance special tailored for you is not that hard.
You can do that by following these simple steps.

```bash
# 1. clone the repository to a local folder
$ git clone https://github.com/bycedric/github-website ./my-website

# 2. install the dependencies (you can also npm install)
$ npm ci

# 3. copy the example env file and change the variables
$ cp .env.example .env

# 4. start the project in development mode
$ npm start

# 5. or start the project in production mode
$ npm run serve
```

## Deploy your site

The easiest way to deploy this project is with [Now](https://now.sh).
You can customize some settings in `now.json`, or remove the file if you are not sure what to do.
After that, you can deploy your website with these commands.

```bash
# 1. install the now cli
$ npm i -g now

# 2. store the github token as secret (recommended)
$ now secret add github-website-token '<TOKEN>'

# 3. deploy the project with the configuration you want
$ now \
    -e GITHUB_TOKEN=@github-website-token \
    -e GITHUB_LOGIN=bycedric
    -e DEVTO_LOGIN=bycedric
    -e TWITTER_LOGIN=cedricvanputten
```

> Both `DEVTO_LOGIN` and `TWITTER_LOGIN` are optional. If omitted, it removes the link to that platform.

<div align="center">
	<br />
	with :heart: <strong>byCedric</strong>
    <br />
</div>
