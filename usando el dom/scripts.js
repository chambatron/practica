/*const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')


console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerHTML = 'Patito'

console.log (h1.getAttribute('pantalla'));
h1.setAttribute('class', 'rojo');*/

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult =document.querySelector('#result')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log([event]);
    event.preventDefault(); 
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

