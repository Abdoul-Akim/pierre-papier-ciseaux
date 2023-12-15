function basic(){
    const body = document.querySelector('body')

    const textResult = document.createElement('div')
    textResult.classList.add('textResult')
    textResult.innerText = 'hello '

    const imgResult = document.createElement('div')
    imgResult.classList.add('imgResult')

    const imgcomputer = document.createElement('img')
    imgcomputer.classList.add('imgcomputer')
    imgcomputer.src = './none.png'

    const imgUser = document.createElement('img')
    imgUser.classList.add('imgUser')
    imgUser.src = './none.png'

    imgResult.appendChild(imgUser)
    imgResult.appendChild(imgcomputer)

    body.appendChild(textResult)
    body.appendChild(imgResult)

}

function button(object){
    const body = document.querySelector('body')

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button')

    Object.values(object).forEach(function(item){
        const button = document.createElement('button')
        button.onclick = function(){
            PlayRound(item, getRandomElement(object))}
        const img = document.createElement('img')
        img.src = item.img
        button.appendChild(img)
        buttonContainer.appendChild(button)
    })
    body.appendChild(buttonContainer)
}



function getRandomElement() {
    const randomIndex = Math.floor(Math.random() * 3);
    const choice = option[randomIndex+1];
    return choice;
}


function PlayRound(UserEntry, ComputerChoice) {
    const option = {
        'pierre-ciseaux': 'La pierre casse le ciseaux. Vous avez gagné.',
        'papier-pierre': 'Le papier emballe la pierre. Vous avez gagné.',
        'ciseaux-papier': 'Les ciseaux coupent le papier. Vous avez gagné.',
        'papier-ciseaux': 'Les ciseaux coupent le papier. Vous avez perdu.',
        'pierre-papier': 'Le papier emballe la pierre. Vous avez perdu.',
        'ciseaux-pierre': 'La pierre casse le ciseaux. Vous avez perdu.',
        'ciseaux-ciseaux': 'Égalité.',
        'pierre-pierre': 'Égalité.',
        'papier-papier': 'Égalité.'
    }

    const result = option[`${UserEntry.name}-${ComputerChoice.name}`];
    const textResult = document.querySelector('.textResult')
    const imgUser = document.querySelector('.imgUser')
    const imgcomputer = document.querySelector('.imgcomputer')
    textResult.innerText = result
    imgUser.src = UserEntry.img
    imgcomputer.src = ComputerChoice.img
}

const option = {
    1:{
        name:'pierre',
        img:'./pierre.png'
    },
    2:{
        name:'papier',
        img:'./papier.png'
    },
    3:{
        name:'ciseaux',
        img:'./ciseaux.png'
    }
}

basic()
button(option)