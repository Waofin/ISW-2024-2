class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
}
const persona = new Persona('Cesar', 26, 'no binarie');

class Caja {
    constructor(cuadernos, lapices, papel, fotografias, buen_estado) {
        this.cuadernos = cuadernos;
        this.lapices = lapices;
        this.papel = papel;
        this.fotografias = fotografias;
        this.buen_estado = buen_estado;
    }   
}

const caja = new Caja(3, 5, 10, 2, true);
console.log(persona);
console.log(caja);
console.log(typeof caja);
console.log(typeof caja.cuadernos);
console.log(typeof caja.lapices);
console.log(typeof caja.papel);
console.log(typeof caja.fotografias);
console.log(typeof caja.buen_estado);
