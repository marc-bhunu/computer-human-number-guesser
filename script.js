let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (human, computer, secret) => {
    let computerDif = secret - computer
    let humanDif = secret - human

    const posetiveComputerDiference = computerDif < 0 ? -1 * (computerDif) : computerDif
    const posetiveHumanDiference = humanDif < 0 ? -1 * (humanDif) : humanDif
   
    if (posetiveComputerDiference === posetiveHumanDiference || posetiveHumanDiference < posetiveComputerDiference) {
        return true
    }
    else {
        return false
    }
}

const updateScore = (winner) => {

    switch (winner) {
        case 'human':
            humanScore += 1
            break
        case 'computer':
            computerScore += 1
            break
        default:
            console.log('Enter a valid winner')
            break
    }
}

const advanceRound = () => currentRoundNumber += 1

