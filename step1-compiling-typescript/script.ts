const character = 'mario';
console.log(character);

//SELECTING ALL INPUT TAGS
const inputs = document.querySelectorAll('input');
console.log("inputs: ", inputs);

//ITERATING OVER EACH INPUT
inputs.forEach(input => {
    console.log(input)
})