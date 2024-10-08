const missions = require('../../seasons/15.js')
const objectives = require('../../seasons/objectives.js')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
data: new SlashCommandBuilder()
        .setName('itsmission')
        .setDescription('Generates a mission description of objectives and aditional information')
        .addIntegerOption(option => 
            option.setName('mission')
                  .setDescription('The number for the mission in brackets []')
                  .setRequired(true)
                  .setMaxValue(20)
                  .setMinValue(1)
        ),
    async execute(interaction) {
        selectedMissions = []
        let mission = interaction.options.getInteger('mission')
        let missionData = objectives.filter(objective => objective.id == mission)[0]
        console.log('mission data', missionData)
        let response = `MISSION: ${missions[mission-1]} [${mission}]\n`
        if(missionData.dz !== 'Special'){
            response += `Zone of Deployment is: ${missionData.dz} deep\n`
        } else {
            response += `There are special rules for the Deployment Zone. Please check the current ITS\n`
        }
        if(missionData.objectives.length){
            response += `OBJECTIVES\n${missionData.objectives}\n`
        }
        if(missionData.hvt){
            response += `Number of HVT: ${missionData.hvt}\n`
        }
        if(missionData.classified){
            response += `Number of Classified: ${missionData.classified}\n`
        }
        if(missionData.intelCom){
            response += `Mission supports the use of INTELCOM (support and control)\n`
        }
        if(missionData.room){
            response += `Mission has Center ROOM Zone of Operations\n`
        }
        if(missionData.exclusionZone){
            response += `Mission has Exclusion Zone that limits deployment. Please check the current ITS\n`
        }
        if(missionData.qaz !== 'none'){
            response += `Mission has Quantum Anomaly in the form of: ${missionData.qaz}\n`
        }
        if(missionData.jointCMD){
            response += `Mission has Joint Command. Both forces gain an extra Command Token\n`
        }
        if(missionData.specialUnit !== 'none'){
            response += `Mission has a special unit with the name: ${missionData.specialUnit}\n`
        }
        if(missionData.specialOrder !== 'none'){
            response += `Mission has special extra order for the listed type of unit with the listed type of order: ${missionData.specialOrder}\n`
        }
        if(missionData.specialistBonus !== 'none'){
            response += `Mission has Specialist Bonus for the following specialists: ${missionData.specialistBonus}\n`
        }
        
        await interaction.reply(response)
    }
}

