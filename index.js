//Token env
const { Client, Events, GatewayIntentBits} = require('discord.js');
const { token } = require('dotenv').config();


//Client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds]});


//This code runs once
client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

//Log in with clients token
client.login(token);