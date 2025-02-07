/*
    Diferencias entre var-let y const en JS
    -var: Se puede reasignar y redeclarar en cualquier parte del código
    -let: Se puede reasignar, pero No se puede redeclarar en el mismo ámbito
*/

//VAR
var nombre = "Valeria"; //Declaramos una variable con var
nombre = "Vale"; //Reasignamos el valor de nombre
var nombre = "Val"; //Redeclaro la variable sin problema

console.log(nombre);

//LET
let apellido = "Rivero"; //Declaramos una variable con let
apellido = "Lopez"; //Reasignamos el valor de apellido
//let apellido = "Parra" //Esto daria error porque no se puede redeclarar en eel mismo ámbito

//CONST
const gravedad = "9.81 M/s2";
gravedad = "10.1 M/s2"; //Esto daría error porque no se puede reasignar constantes
//const gravedad = "1.0 M/s2"; //Esto daria error porque no sse puede redeclarar una constante en el mismo ámbito


