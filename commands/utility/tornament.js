const missions = require('../../seasons/15.js')
const { SlashCommandBuilder } = require('discord.js')
const d20 = require ('d20')

let selectedMissions = []

module.exports = {
data: new SlashCommandBuilder()
        .setName('itstorn')
        .setDescription('Generates a set of missions from the current season of ITS for tournaments')
        .addIntegerOption(option => 
            option.setName('rounds')
                  .setDescription('The number of rounds in the tournament')
                  .setRequired(true)
                  .setMaxValue(20)
                  .setMinValue(2)
        ),
    async execute(interaction) {
        selectedMissions = []
        let rounds = interaction.options.getInteger('rounds')
        let response = ''
        
        for (i=1; i<= rounds; i++) {
            let roll = checkUnique()
            selectedMissions.push(roll)
            response += `Round ${i}: ${missions[roll-1]} [${roll}]\r\n`
        }
        await interaction.reply(response)
    }
}

function checkUnique(){
  let roll = d20.roll(20)
        console.log(selectedMissions)
        if(selectedMissions.includes(roll)){
            return checkUnique()
        } else {
            return roll
        }
}
