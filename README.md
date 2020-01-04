# GitHub Website

As an enthusiastic developer, you might find yourself racing through many projects.
Keeping your website up to date might become a burden because of this.
Let your work speak for itself, have a simple site shows your GitHub feed!

[![Latest Release](https://img.shields.io/github/release/byCedric/GitHub-Website/all.svg?style=flat-square)](https://github.com/byCedric/GitHub-Website/releases)
[![Build Status](https://img.shields.io/github/workflow/status/byCedric/Github-Website/CI/master.svg?style=flat-square)](https://github.com/byCedric/GitHub-Website/actions)
[![Code Climate grade](https://img.shields.io/codeclimate/maintainability/byCedric/GitHub-Website.svg?style=flat-square)](https://codeclimate.com/github/byCedric/GitHub-Website)
[![Demo link](https://img.shields.io/badge/demo-web-lightgrey.svg?style=flat-square)](https://bycedric.com)

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

## Contributing

Contributions are always welcome.
This project is open-source, and anyone may contribute.
To keep the project healthy and running smoothly, a couple of rules are defined.

1. Keep it friendly and accessible at all times.
2. Use the templates adequately with the required information.
3. Make sure the CI passes.

Make something awesome!

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

--- ---

<p align="center">
 with :heart: <a href="https://bycedric.com" target="_blank">byCedric</a>
</p>
