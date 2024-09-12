const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

if (numero1 > numero2 && numero1>numero3) {
    console.log(numero1);

} else if(numero2 > numero1 && numero2 > numero3){
    console.log(numero2);

} else if(numero3 > numero1 && numero3 > numero2){
    console.log(numero3);
}


if (numero1 < numero2 && numero1<numero3) {
    console.log(numero1);

} else if(numero2 < numero1 && numero2 < numero3){
    console.log(numero2);

} else if(numero3 < numero1 && numero3 < numero2){
    console.log(numero3);
}

if (numero1 %2 == 0) {
    console.log('numero1 es par');
} else {
    console.log('numero1 es impar');
}
if (numero2 %2 == 0) {
    console.log('numero2 es par');
} else {
    console.log('numero2 es impar');
}
if (numero3 %2 == 0) {
    console.log('numero3 es par');
} else {
    console.log('numero3 es impar');
}

if (numero1 %5 == 0) {
    console.log('numero1 es divisible entre 5');
}
if (numero2 %5 == 0) {
    console.log('numero2 es divisible entre 5');
}
if (numero3 %5 == 0) {
    console.log('numero3 es divisible entre 5');
}
