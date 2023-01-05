const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Information about the server'),

        async execute(interaction){
            await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.membercount} members.`);
        }
};