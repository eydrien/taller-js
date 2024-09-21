//SINTAXIS Y SEMANTICA -TIPOS DE DATOS

//Tipo de dato: String
var nombre = "Camilo";
//Tipo de dato: Numérico
var numero = 25;

//Tipo de dato: Booleano
var bandera = true;

//Tipo de dato: Symbol (Valor único para una variable) - ECMA 6
var simbolo = Symbol("Mi símbolo");
Symbol("foo") === Symbol("foo"); // false
//Tipo de dato: Undefined (default)
var x;
var c = undefined;

console.log(nombre);






//Tipo de dato: Objeto - object
var objeto = {
     nombre : "Norbey",
     apellido : "Muñoz",
     telefono : 3153160759
    }
    
    // Array
    var autos = ['BMW', 'Audi', 'Volvo'];
    
    // Nulo
    var y = null;

    function myfuncion(){}
    
    class Persona{
     constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    }
    





    //OPERADORES

    //SUMA
    let num = 3;
    let b = 2;
    let     z = num + b;  
    //RESTA
        z = num - b;
    //MULTIPLICACIÓN
        z = num * b;
    //DIVISIÓN
        z = num / b;

    //MÓDULO
        z = num % b;
    //EXPONENTE
        z = num ** b;


    //INCREMENTOP Y DESCREMENTO

    //Variables
    let x = 3, y = 4;
    let sum = x + y;
    //INCREMENTO

    //Preincremento (++ antes de la variable)
    sum = ++x;
    //Posincremento (++ después de la variable)
    sum = y++;

    //DECREMENTO
    //Predecremento (-- antes de la variable)
    sum = --x;
    //Posdecremento (-- después de la variable)
    sum = y--;









    //OPERADORES DE ASIGNACION 
    // Asignación (=)
    let a = 1;
    // Asignación compuesto 
    num += 3; // num = num + 3
    num -= 2; // num = num - 2
    num *= 5; // num = num * 5
    num /= 3; // num = num / 3
    num %= 2; // num = num % 3
    num **= 2; // num = num ** 2



    //OPERADORES RELACIONALES
    b = 3;
    // Menor
    z = (a < b);
    //Menor o igual
    z = (a <= b);
    //Mayor
    z = (a > b);
    //Mayor o igual
    z = (a >= b);





    //Operador ternario: Se asigna un valor a una variable dependiente a que se cumpla una condición booleana (true/false).

    //Se define una variable.
    //Se asigna una condición
    //Se añade un ‘?’
    //Posteriormente se codifica el valor a asignar a la variable del paso 1 si la condición retorna true.
    //Finalmente se codifica el valor a asignar a la variable del paso 1 si la condición retorna false.

    let resultado = (1 > 2) ? "verdadero" : "falso";
    let resultado2 = (1 > 2) ? "verdadero" : 0;
    let numero = 10;
    resultado = ( numero % 2 == 0) ? "par" : "impar";







    //OPERADORES LOGICOS (AND) y (OR)

    let p = 11;
    let minimo = 0;
    let maximo = 10;

    //AND: Se cumple cuando dos condiciones son verdaderas
    if( p >= minimo && p <= maximo ){
    console.log("El número está en el rango")
    }
    else{
    console.log("El número está fuera del rango")
    }






    //OR: Se cumple cuando una o dos condiciones de dos es verdadera.

    let vacaciones = false;
    let diaDescanso = true;
    if ( vacaciones || diaDescanso ){
     console.log("El padre puede asistir al juego del hijo");
    }
    else{
    console.log("El padre está ocupado");
    }









    
    