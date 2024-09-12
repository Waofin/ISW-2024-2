const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const letras = ['a', 'B', 'c', 'D', 'e', 'f', 'G', 'h', 'i', 'J'];



function sumar(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
function promedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

function mayusculas(letras) {
    let mayusculas = [];
    for (let i = 0; i < letras.length; i++) {
        mayusculas.push(letras[i].toUpperCase());
    }
    return mayusculas;
}

function numerospares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}
console.log(sumar(numeros));
console.log(promedio(numeros));
console.log(mayusculas(letras));
console.log(numerospares(numeros));

