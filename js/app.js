// const inputName = document.querySelector('input[name="nome_utente"]');
// console.log(inputName) 
// const inputDist = document.querySelector('input[name="distanza"]');
// console.log(inputDist)
const buttonElement = document.querySelector('input[type="submit"]');
// console.log(buttonElement)
buttonElement.addEventListener('click', function () {
    const inputName = document.querySelector('input[name="nome_utente"]')
    // console.log(inputName) 
    const userName = inputName.value
    // console.log(userName)
    const name = document.getElementById('nome')
    name.innerHTML = userName
    const inputDist = document.querySelector('input[name="distanza"]');
    // console.log(inputDist)
    const prezzoBase = parseFloat(inputDist.value) * 0.21
    if (isNaN(prezzoBase)){
        alert('Inserisci un NUMERO di km')
    }
    // console.log(prezzoBase)
    const selectAge = document.querySelector('select[name="age"]');
    // console.log(selectAge)
    const userAge = document.getElementById('tariffa')
    if (selectAge.value == 0.2 ){
        userAge.innerHTML = 'Young'

    } else if (selectAge.value == 0.4 ){
        userAge.innerHTML = 'Senior'

    } else {
        userAge.innerHTML = 'Adult'
    }
    const discount = parseFloat(selectAge.value)
    // console.log(discount)
    const userPrice = document.getElementById('costo')
    const price = (prezzoBase - (prezzoBase * discount))
    const roundedPrice = price.toFixed(2)
    userPrice.innerHTML = roundedPrice;
}
)