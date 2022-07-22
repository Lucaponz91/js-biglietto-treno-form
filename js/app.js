const buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener('click', function () {
    const inputName = document.querySelector('input[name="nome_utente"]')
    const userName = inputName.value
    const name = document.getElementById('nome')
    name.innerHTML = userName
    const inputDist = document.querySelector('input[name="distanza"]');
    const prezzoBase = parseFloat(inputDist.value) * 0.21
    if (isNaN(prezzoBase)){
        alert('Inserisci un NUMERO di km')
    }
    const selectAge = document.querySelector('select[name="age"]');
    const userAge = document.getElementById('tariffa')
    if (selectAge.value == 0.2 ){
        userAge.innerHTML = 'Young'

    } else if (selectAge.value == 0.4 ){
        userAge.innerHTML = 'Senior'

    } else {
        userAge.innerHTML = 'Adult'
    }
    const discount = parseFloat(selectAge.value)
    const userPrice = document.getElementById('costo')
    const price = (prezzoBase - (prezzoBase * discount))
    const roundedPrice = price.toFixed(2)
    userPrice.innerHTML = roundedPrice;
    // CARROZZA RANDOM
    // const randomWagon = (function randomInteger(1, 9) {
    //     return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    //   })
    const randomWagon = Math.floor(Math.random() * 9) + 1
    const wagon = document.getElementById('carrozza')
    wagon.innerHTML = randomWagon
    // CODICE CP RANDOM
    const randomCP = Math.floor(Math.random() * 99999) + 1
    const cambioPrenotazione = document.getElementById('cp')
    cambioPrenotazione.innerHTML = randomCP
    
}
)
