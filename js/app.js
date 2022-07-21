// const inputName = document.querySelector('input[name="nome_utente"]');
// console.log(inputName) 
// const inputDist = document.querySelector('input[name="distanza"]');
// console.log(inputDist)
const buttonElement = document.querySelector('input[type="submit"]');
console.log(buttonElement)
buttonElement.addEventListener('click', function () {
    const inputName = document.querySelector('input[name="nome_utente"]')
    console.log(inputName) 
    const userName = inputName.value
    console.log(userName)
    const inputDist = document.querySelector('input[name="distanza"]');
    console.log(inputDist)
    const prezzoBase = parseFloat(inputDist.value) * 0.21
    console.log(prezzoBase)
    const inputAge = document.querySelector('select[name="age"]');
    console.log(inputAge)
    const discount = parseFloat(inputAge.value)
    console.log(discount)
    const userPrice = document.getElementById('costo')
    userPrice.innerHTML = (prezzoBase - (prezzoBase * discount))
}
)