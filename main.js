let userInput = document.querySelector("[name='dollar']");
let outputDollar = document.getElementById("dollar");
let outputDinar = document.getElementById("dinar");
// console.log(userInput);
// console.log(outputDollar);
// console.log(outputDinar);
userInput.addEventListener('input',convertToDollars);

function convertToDollars(event){
    let dollar = Number(event.target.value);
    outputDollar.textContent = (dollar).toLocaleString();
    outputDinar.textContent = (dollar*1320).toLocaleString();
}