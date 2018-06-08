const {prefix, token, base_url, max_prob, content_id} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
require('es6-promise').polyfill();
require('isomorphic-fetch');

// e.g. https://projecteuler.net/problem=28
let randomProblem = () => `${base_url}${Math.floor((Math.random() * max_prob) + 1)}`;

let fetchProblem = (message) => {
	fetch(`${randomProblem()}`)
		.then((response) => response.text())
		.then(html => (new JSDOM(html)).window.document.getElementById(content_id).textContent)
		.then(text => message.channel.send(String.raw`${text}`))
		.catch(err => console.error(err));
}

// reply with a random problem if mentioned
let respond = (message) => message.content.includes(prefix) ? fetchProblem(message) : false;

// setup client
client.on('ready', () => console.log('Ready >>'));
client.on('message', async message => respond(message));
client.login(token);