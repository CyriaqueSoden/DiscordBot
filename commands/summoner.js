const { SlashCommandBuilder } = require('@discordjs/builders');

const fetch = require('node-fetch');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('summoner')
        .setDescription('je sais pas'),
    async execute(interaction) {
        fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/smurfs%20ruin%20game?api_key=RGAPI-76e52c0f-954b-4995-ad7c-7df61017c03e ')
        .then(response => response.json())
        .then(data => console.log(data));

    },
};






