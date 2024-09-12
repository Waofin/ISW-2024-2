const palabra = 'palabra';
const palabraMayuscula = 'PALABRA';
const numero1 = 10;
const numero2 = 7;

function mayusculas(palabra) {
  return palabra.toUpperCase();
}
function minusculas(palabraMayuscula) {
  return palabraMayuscula.toLowerCase();
}
function resta (numero1, numero2) {
    return numero1 - numero2;
    }
function division (numero1, numero2) {
    return numero1 / numero2;
    }
function multiplicacion (numero1, numero2) {    
    return numero1 * numero2;
    }
function largostring (palabra) {
    return palabra.length;
    }   
console.log(mayusculas(palabra));
console.log(minusculas(palabraMayuscula)); 
console.log(resta(numero1, numero2));
console.log(division(numero1, numero2));
console.log(multiplicacion(numero1, numero2));
console.log(largostring(palabra));
