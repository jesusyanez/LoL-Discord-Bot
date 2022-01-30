require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

const jsonData = require('./champs');
const values = Object.values(jsonData)

bot.on('message', msg => {
  if (msg.content.startsWith('!lol')) {
    const line = values[parseInt(Math.random() * values.length)]
    msg.channel.send(`Who is the best ${line} in this server?`);
  } 
});
