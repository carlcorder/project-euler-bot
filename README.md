# Project Euler Bot

![leonhard-euler](https://github.com/carlcorder/project-euler-bot/blob/master/img/euler-portrait.jpg)

[![logo](https://github.com/carlcorder/project-euler-bot/blob/master/img/project-euler-logo.png)](https://projecteuler.net/)

###### A Discord bot that retrieves random Project Euler problems from projecteuler.net

## Add to Your Server

![invite-link](https://github.com/carlcorder/project-euler-bot/blob/master/img/invite-link.png)

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
