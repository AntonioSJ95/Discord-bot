const { SlashCommandBuilder } = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies message with PINGO'),

    async execute(interaction){
    await interaction.reply('Pingo');
}
};