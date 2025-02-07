/*

    Estructura de control IF en JS
    - Permite ejecutar código solo si se cumple una condición
    - Puede usarse con operadores de comparación y lógicos

*/

let edad = 18;
let tieneINE = true;

//Condición con else
if(edad >= 18 && tieneINE)
{
    console.log("Tienes los requisitos para votar :)");
}
else
{
    console.log("No tienes los requisitos para votar :(, verifica tu información");
}

//Condición con else if
if(edad < 13)
{
    console.log("Eres un niño");
}
else if(edad < 18)
{
    console.log("Eres un adolescente");
}
else
{
    console.log("Eres un adulto");
}

let tieneEntrada = true

if(!tieneEntrada)
{
    console.log("Debes comprar una entrada");
}

console.log("Fin de la ejecución");

