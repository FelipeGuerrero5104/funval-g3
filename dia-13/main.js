/* function eliminaEspacios(cadena){
    let resultado = ""
    for( let i=0; i<cadena.length; i++){
    if(cadena[i] !==" ") {
        resultado = resultado + cadena[i];
    }
    } 
    return resultado
}

console.log(eliminaEspacios("Felipe Guerrero")) */



/* function invertirNombre(cadena){
    let resultado2 ="";
    for(let i = cadena.length - 1; i >= 0; i--){
        resultado2 += cadena[i];
    }
    return resultado2
}

console.log(invertirNombre("Tengo Hambre")); */

let numero;
do {
  numero = parseInt(prompt("Introduce un número:"));
} while (numero >= 0);
alert("HAS INGRESADO UN NUMERO NEGATIVO >:v")