const { EmbedBuilder, SlashCommandBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mondongo')
    .setDescription('Goku pelon diciendo mondongo'),
    async execute(interaction){
        const embed = new EmbedBuilder()
        .setImage('https://i.imgur.com/DtlBwHy.jpeg')

        await interaction.reply({ embeds: [embed]})
    }

    
};
