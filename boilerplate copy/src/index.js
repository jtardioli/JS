
const printTeam = (teamName, coach,...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    let playersString = ''
    players.forEach((player) => {
        playersString += `${player}, `
    })
    console.log(`Players: ${playersString}`)

}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert')