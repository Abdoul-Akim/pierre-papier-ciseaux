
const option = ['pierre','papier','ciseaux'];

function getRandomElement(option) {
    const RandomIndex = Math.floor(Math.random()*option.length)
    return option[RandomIndex]
}



function PlayRound(UserEntry,ComputerChoice){
    
    if (UserEntry =='pierre' && ComputerChoice =='ciseaux'){
        return 'La pierre casse le ciseaux. Vous avez gagnez.'
    }
    else if (UserEntry =='papier' && ComputerChoice =='pierre'){
        return 'Le papier embale la pierre. Vous avez gagnez.'
    }
    else if (UserEntry =='ciseaux' && ComputerChoice =='papier'){
        return 'les ciseaux coupe le papier. Vous avez gagnez.'
    }
    else if (ComputerChoice =='ciseaux' && UserEntry =='papier'){
        return 'les ciseaux coupe le papier. Vous avez perdue.'
    }
    else if (ComputerChoice =='papier' && UserEntry =='pierre'){
        return 'Le papier embale la pierre. Vous avez perdue.'
    }
    else if (ComputerChoice =='pierre' && UserEntry =='ciseaux'){
        return 'La pierre casse le ciseaux. Vous avez perdue.'
    }
    else{
        return ('egalite')
    }
}
function Game(){
    v = 0
    d = 0

for(let i = 0; i<5; i++){

    const ComputerChoice = getRandomElement(option).toLowerCase()

    console.log(ComputerChoice)

    const UserEntry = prompt(`pierre,papier,ciseaux`).toLowerCase()

    let result = PlayRound(UserEntry,ComputerChoice)

    console.log(result)

    if(result.includes('perdue')){
        v += 1
    }
    else if(result.includes('perdue')){
        d += 1
    }
}
if(d>v){
    console.log(`vous avez perdue a ${d} contre ${v}`)
}
else if(d<v){
    console.log(`vous avez gagnez a ${v} contre ${d}`)
}
else{
    console.log(`il y a egalite a ${v} a ${d}`)
}
}

Game()
