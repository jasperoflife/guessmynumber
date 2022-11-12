
const btn = document.querySelector('.check')
const nummber = document.querySelector('.number')
const button = document.querySelector('.again')
const msg = document.querySelector('.message')
// heading2.innertext = 'Jasper'

// function nameChanger (){
//     let sth = heading2.innerText === 'Guess My Nummber'
//     if(sth){
//         heading2.innerText = 'Jasper'
//     }else{ 
//         heading2.innerText = 'Guess My Nummber'
//     }
// }
// btn.addEventListener('click',nameChanger)

// to click the button and the class=number changes to random number between 10
// function random(){

//     let randomNumber = Math.ceil(Math.random()*10)
//     nummber.textContent = randomNumber
// }
// btn.addEventListener('click', random)

//handling input field
// // to get the data from an input field, you have to pass a value
// let inputField = document.querySelector('.guess')
// inputField.value = 20
// console.log(typeof Number(inputField.value));

function logic() {
    const msg = document.querySelector('.message')
    const number = document.querySelector('.number')
    const heading = document.querySelector('h2')
    let score = document.querySelector('.score')
    const guessedNumber = Math.ceil(Math.random()*6)
    number.textContent = guessedNumber
    let body = document.body.style
    let guess = Number(document.querySelector('.guess').value)
    if(!guess){
        msg.textContent = 'no number'
    }else if(guess === guessedNumber){
        msg.textContent = 'Correct guess🏆'
        body.backgroundColor = 'green'

    }else if(guess !== guessedNumber){
        msg.textContent = 'Wrong guess 🤦‍♀️'
        body.backgroundColor = 'red'
        if(score.textContent == 0){
            score.textContent = 0
        }else{
            score.textContent--
        }
        if(score.textContent == 0){
        heading.textContent = 'Trials exceeded, please click on play again to restart'
        }
    }
}
btn.addEventListener('click',logic)
// to refresh the game after 6 trials
const reload = document.querySelector('.again')
function refresh(){
    location.reload();
}
reload.addEventListener('click',refresh)