const objectives = [
    {
        id: 1,
        objectives: `
            At the end of the game, have an Activated Communication Antenna (2 OP for each Activated Communication Antenna).\r\n
            At the end of the game, Control a Communication Antenna (1 OP for each Controlled Communication Antenna).\r\n
            At the end of the game, Control the Tech-Coffin (3 OP).\r\n`,
        hvt: 1,
        classified: 1,
        intelCom: false,
        dz: '16"| 40cm',
        room: false,
        exclusionZone: false,
        qaz: 'Creatures',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'Engineer, Hacker'
    },
    {
        id: 2,
        objectives: `
            At the end of each Game Round, the Tracking Beacon is totally inside the enemy half of the game table. (1 OP).\r\n
            At the end of each Game Round, Control the Tracking Beacon (1 OP).\r\n
            At the end of each Game Round, Control at least one Console (1 OP).\r\n`,
        hvt: 1,
        classified: 1,
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: true,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 3,
        objectives: `
            To accomplish more Classified Objectives than the adversary (2 OP).\r\n
            To Kill more enemy Army Points than the adversary (2 OP).\r\n`,
        hvt: 1,
        classified: 3,
        intelCom: false,
        dz: '8" | 20cm',
        room: false,
        exclusionZone: false,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'EVO - regular',
        specialistBonus: 'none'
    },
    {
        id: 4,
        objectives: `
            At the end of each Game Round, have the Enemy Beacon Captured (2 OP).\r\n
            At the end of the game, have the Enemy Beacon Captured in your own Deployment Zone (2 OP).\r\n
            At the end of the game, have your Beacon not be Captured by the enemy (1 OP).\r\n`,
        hvt: 0,
        classified: 1,
        intelCom: true,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: false,
        qaz: 'Zones',
        jointCMD: false,
        specialUnit: 'Hazmat',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 5,
        objectives: `
            Randomly revealed
       `,
        hvt: 3,
        classified: 'Special',
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: true,
        qaz: 'Creatures',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'EVO - regular',
        specialistBonus: 'none'
    },
    {
        id: 6,
        objectives: `
            To Kill more Army Points than the adversary (3 OP).\r\n
            To Kill the same number of Lieutenants as the adversary
(2 OP, but only if at least 1 Lieutenant is killed by the
player).\r\n
            To Kill more Lieutenants than the adversary (3 OP).\r\n
            To Kill the Designated Target (2 OP for each one)\r\n`,
        hvt: 2,
        classified: 0,
        intelCom: false,
        dz: '16" | 40cm',
        room: false,
        exclusionZone: false,
        qaz: 'Zones',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 7,
        objectives: `
            At the end of the game, have an Extracted Civilian (1 OP for each one).\r\n
            At the end of the game, have an Extracted enemy HVT (2 OP for each one).\r\n`,
        hvt: '2+5',
        classified: 1,
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: true,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'none',
        soecialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 8,
        objectives: `
            To Kill more Specialist Troops than the adversary
(2 OP).\r\n
            To Kill more Lieutenants than the adversary (2 OP).\r\n
            To Kill more Army Points than the adversary (2 OP).\r\n
            At the end of the game, acquire more weapons or items from
the Panoplies than the adversary (1 OP)\r\n`,
        hvt: 1,
        classified: 3,
        intelCom: false,
        dz: '16" | 40cm',
        room: false,
        exclusionZone: false,
        qaz: 'Zones',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 9,
        objectives: `
            To kill more Army Points than the adversary (2 OP).\r\n
            At the end of the game, dominate the Exclusion Zone (3 OP).\r\n
            At the end of the game, have as many Active Heating Units as the adversary (2 OP, but only if the player has at least 1 Active Heating Unit).\r\n
            At the end of the game, have more Active Heating Units than the adversary (3 OP).\r\n`,
        hvt: 1,
        classified: 2,
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: true,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'Hazmat',
        specialOrder: 'Hazmat - Irregular',
        specialistBonus: 'none'
    },
    {
        id: 10,
        objectives: `
            At the end of the game, dominate the nearest Sector to your Deployment Zone (1 OP).\r\n
            At the end of the game, dominate the central Sector (2 OP).\r\n
            At the end of the game, dominate the farthest Sector from your Deployment Zone (3 OP).\r\n`,
        hvt: 1,
        classified: 4,
        intelCom: true,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: false,
        qaz: 'Zones',
        jointCMD: false,
        specialUnit: 'Turret',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 11,
        objectives: `
            At the end of the game, have accomplished more Main Classified Objectives than the adversary (3 OP).\r\n
            At the end of the game, have accomplished the same number of Main Classified Objectives as the adversary (2 OP, but only if at least 1 Classified Objective has been accomplished).\r\n
            Accomplish Main Classified Objectives (1 OP for each one).\r\n`,
        hvt: 1,
        classified: 'Special +1',
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: false,
        qaz: 'none',
        jointCMD: true,
        specialUnit: 'Hazmat',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 12,
        objectives: `
            At the end of the game, have Extracted more Army Points than the adversary (4 OP).\r\n
            At the end of the game, have Extracted more Specialist Troops than the adversary (2 OP).\r\n
            At the end of the game, have Killed more Specialist Troops than the adversary (2 OP).\r\n
            At the end of the game, have Killed the same number of Specialist Troops as the adversary (1 OP).\r\n
            At the end of the game, Dominate the Launching Tower (1 OP).\r\n`,
        hvt: 1,
        classified: 1,
        intelCom: false,
        dz: '12" | 30cm',
        room: true,
        exclusionZone: true,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 13,
        objectives: `
            Protect your AC2 (1 OP per STR point the AC2 still has at the end of the game).\r\n
            Damage the enemy AC2 (1 OP per STR point the AC2 has lost at the end of the game, to a maximum of 3).\r\n
            Destroy the enemy AC2 (2 OP, in addition to the previous Objective).\r\n
            At the end of the game, acquire more weapons or items from the Panoplies than the adversary (1 OP).\r\n`,
        hvt: 1,
        classified: 1,
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: false,
        qaz: 'none',
        jointCMD: true,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'none'
    },
    {
        id: 14,
        objectives: `
            At the end of the game, have Destroyed the Enemy Server containing the Rogue AI (3 OP).\r\n
            At the end of the game, have Destroyed the same number of Enemy Servers as your opponent, (1 OP, but only if at least 1 Server has been Destroyed by the player).\r\n
            At the end of the game, have Destroyed more Servers than your opponent (2 OP).\r\n
            At the end of the game, if your Server with the Rogue AI is not Destroyed (2 OP).\r\n
            At the end of the game, if none of your Servers are Destroyed (1 OP).\r\n
            Activate one Console (1 OP).\r\n`,
        hvt: 1,
        classified: 1,
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: false,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'UberHacker',
        specialOrder: 'Huberhacker - Irregular',
        specialistBonus: 'Hacker'
    },
    {
        id: 15,
        objectives: `
            At the end of each Game Round, Dominate the Panic Room (1 OP).\r\n
            At the end of each Game Round, have at least one Essential Personnel Trooper inside the Panic Room, in a non-Null State (1 OP)\r\n
            At the end of the game, have more Victory Points than the adversary (3 OP).\r\n`,
        hvt: 0,
        classified: 1,
        intelCom: false,
        dz: '8" | 20cm',
        room: true,
        exclusionZone: false,
        qaz: 'none',
        jointCMD: true,
        specialUnit: 'none',
        specialOrder: 'EVO - Regular',
        specialistBonus: 'none'
    },
    {
        id: 16,
        objectives: `
            At the end of the game, have Activated the same number of Antennas as the adversary (1 OP, but only if the player has Activated at least 1 Antenna).\r\n
            At the end of the game, have Activated more Antennas than the adversary (2 OP).\r\n
            At the end of each Game Round, Control the enemy Console (1 OP).\r\n
            At the end of the game, have your Console not be Controlled by the enemy (3 OP).\r\n`,
        hvt: 1,
        classified: 2,
        intelCom: false,
        dz: 'Special',
        room: false,
        exclusionZone: false,
        qaz: 'none',
        jointCMD: true,
        specialUnit: 'Turret',
        specialOrder: 'none',
        specialistBonus: 'Chain of Command'
    },
    {
        id: 17,
        objectives: `
            At the end of the game, Control a Supply Box (2 OP for each Supply Box).\r\n
            At the end of the game, Control more Supply Boxes than your adversary (1 OP).\r\n
            At the end of the game, if your adversary does not Control any Supply Boxes (1 OP).\r\n`,
        hvt: 1,
        classified: 2,
        intelCom: true,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: false,
        qaz: 'Creatures',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'Doctor, Paramedic'
    },
    {
        id: 18,
        objectives: `
            At the end of each Game Round, dominate more Quadrants than the adversary (2 OP).\r\n
            At the end of the Game Round, dominate the same number of Quadrants as the adversary (1 OP, but only if at least 1 Quadrant is Dominated by the player).\r\n
            At the end of the game, have a Hacked Console (1 OP for each Hacked Console, up to a maximum of 3 OP).\r\n`,
        hvt: 1,
        classified: 1,
        intelCom: true,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: false,
        qaz: 'Creatures',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'Hacker'
    },
    {
        id: 19,
        objectives: `
            At the end of each Game Round, Dominate the Armory (2 OP).\r\n
            At the end of the game, Dominate the Armory (1 OP).\r\n
            At the end of the game, have acquired more weapons or items from the Panoplies than the adversary (2 OP).\r\n`,
        hvt: 1,
        classified: 1,
        intelCom: true,
        dz: '12" | 30cm',
        room: true,
        exclusionZone: true,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'Turret',
        specialOrder: 'EVO - Regular',
        specialistBonus: 'none'
    },
    {
        id: 20,
        objectives: `
            To Kill the enemy Designated Target, but only if it has been previously Revealed (3 OP).\r\n
            To Kill enemy Target Decoys, but only if they have been previously Revealed (1 OP for each Target Decoys).\r\n
            To Kill more enemy Target Decoys, but only if they have been previously Revealed (1 OP).\r\n
            At the end of the game, have the same number of Activated Consoles as the adversary (1 OP but only if the player has at least 1 Activated Console).\r\n
            At the end of the game, have more Activated Consoles than the adversary (2 OP).\r\n
            At the end of the game, have your Designated Target not Killed (2 OP).\r\n`,
        hvt: 3,
        classified: 0,
        intelCom: false,
        dz: '12" | 30cm',
        room: false,
        exclusionZone: true,
        qaz: 'none',
        jointCMD: false,
        specialUnit: 'none',
        specialOrder: 'none',
        specialistBonus: 'Hacker'
    }
]

module.exports = objectives
