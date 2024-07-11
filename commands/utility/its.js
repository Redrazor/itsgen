const missions = require('../../seasons/15.js')
const { SlashCommandBuilder } = require('discord.js')
const d20 = require ('d20')

module.exports = {
data: new SlashCommandBuilder()
        .setName('itsgen')
        .setDescription('Generates a random ITS Mission for the current Season'),
    async execute(interaction) {
        let roll = d20.roll(20)
        await interaction.reply(`${missions[roll-1]} [${roll}]`)
    }
}
