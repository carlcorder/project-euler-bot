# Project Euler Bot

![leonhard-euler](https://github.com/carlcorder/project-euler-bot/blob/master/img/euler-portrait.jpg)

[![logo](https://github.com/carlcorder/project-euler-bot/blob/master/img/project-euler-logo.png)](https://projecteuler.net/)

###### A Discord bot that retrieves random Project Euler problems from projecteuler.net

```javascript
let fetchProblem = (message) => {
  fetch(`${randomProblem()}`)
    .then((response) => response.text())
    .then(html => (new JSDOM(html)).window.document.getElementById(content_id).textContent)
    .then(text => message.channel.send(String.raw`${text}`))
```

## Add to Your Server

[![invite-link](https://github.com/carlcorder/project-euler-bot/blob/master/img/invite-link.png)](https://discordapp.com/api/oauth2/authorize?client_id=454700906517364746&permissions=0&scope=bot)

###### Then simply mention `@Project Euler Bot` and he will fetch you a problem to work on!

## Local Installation

```bash
git clone git@github.com:carlcorder/project-euler-bot.git
cd project-euler-bot
npm install
node .
```

## Heroku Deployment

```bash
heroku login
heroku git:clone -a project-euler-bot
cd project-euler-bot
git push heroku master
```

```bash
# stop web dyno and start a service worker
heroku ps
heroku ps:scale web=0
heroku ps:scale worker=1
heroku logs --tail
```
