const { SlashCommandBuilder } = require('discord.js')
const d20 = require ('d20')

const missions = [
    'ACQUISITION',
    'B-PONG',
    'BIOTECHVORE',
    'CAPTURE AND PROTECT',
    'COUNTERMEASURES',
    'DECAPITATION',
    'EVACUATION',
    'FIREFIGHT',
    'FROSTBYTE',
    'FRONTLINE',
    'HIGHLY CLASSIFIED',
    'LAST LAUNCH',
    'LOOTING AND SABOTAGING',
    'MINDWIPE',
    'PANIC ROOM',
    'POWER PACK',
    'SUPPLIES',
    'SUPREMACY',
    'THE ARMORY',
    'UNMASKING'
]

module.exports = {
data: new SlashCommandBuilder()
        .setName('itsgen')
        .setDescription('Generates a random ITS Mission for the current Season'),
    async execute(interaction) {
        let roll = d20.roll(20)
        await interaction.reply(missions[roll-1])
    }
}
