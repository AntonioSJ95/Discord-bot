const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName ('user')
    .setDescriptcion('Provide information from the user'),

    async execute(interaction){
        await interaction.replay(`This command was used by ${interaction.user.username}, who is been where wasting his/her time since ${interaction.member.joinedAt}.`);
    },
};