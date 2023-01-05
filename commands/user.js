const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName ('user')
    .setDescription('Provide information from the user'),

    async execute(interaction){
        await interaction.reply(`This command was used by ${interaction.user.username}, who is has been where wasting his/her time since ${interaction.member.joinedAt}.`);
    },
};