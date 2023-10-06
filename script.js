const calculateNetVictories = (victories, defeats) => victories - defeats

const winBalance = calculateNetVictories(70, 7)

const levelCriteriaByWins = [
    { maxVictories: 10, level: 'Ferro' },
    { maxVictories: 20, level: 'Bronze' },
    { maxVictories: 50, level: 'Prata' },
    { maxVictories: 80, level: 'Ouro' },
    { maxVictories: 90, level: 'Diamante' },
    { maxVictories: 100, level: 'Lendário' }
]

const heroLevel = levelCriteriaByWins.find(criteria => winBalance <= criteria.maxVictories)?.level || 'Imortal'

console.log(`O Herói tem de saldo de ${winBalance} está no nível de ${heroLevel}`)