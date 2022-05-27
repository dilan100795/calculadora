let process = require('process')
let suma = require('./operaciones/suma')
let resta = require('./operaciones/resta')
let multiplicacion = require('./operaciones/multiplicacion')
let division = require('./operaciones/division')

console.log(process.argv);
let operacion = process.argv[2]
let num1 = process.argv[3]
let num2 = process.argv[4]

num1 = +num1
num2 = +num2

switch (operacion) {
    case 'suma':
        let sumando = suma(num1,num2)
        console.log(sumando);
        break;

    case 'resta':
        let restando = resta(num1,num2)
       console.log(restando);
        break;

    case 'multiplicacion':
        let multiplicando = multiplicacion(num1,num2)
        console.log(multiplicando);
        break;

    case 'division':
        let dividiendo = division(num1,num2)
        console.log(dividiendo);
        break;
       
    default:
    
}
/* RESPUESTAS */
/* A.  No podriamos importar las operaciones en la calculadora.
   B.  porque si hay alguna falla o error en la consola por una operacion suma o resta , etc. ya sabremos donde esta el archivo con el error. 
   c.  si , voy poner todo de mi parte para terminar los trabajos practicos.
*/