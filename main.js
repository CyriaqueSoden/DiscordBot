const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });





client.once('ready' , () => {
    console.log('GloBot is online');
});










client.login('OTEzMzc3MjQ1MTMxODQ5NzM4.YZ9m2A.9LrdOk25howN71KLEJXjtnIA-Vg');