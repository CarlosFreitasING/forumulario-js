console.log("CONECTADO");

//EXPRESIONES RECULARES RegExp o RegEx
//son patrones para hacer coincidir combinaciones de caracteres de cadenas
// /patron/flag el patron es lo que se evalua y la flag es una ayuda

const regExp = /bluuweb/i; //notacion literal
const regExObjeto = new RegExp("bluuweb","i") //notacion de objeto

//i Ignora mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
//g Búsqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una.
//m Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.

console.log(regExp.test("asdasdas asdasd bluuweb")); //true

//CARACTERES ESPECIALES
//[ ] Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
// | Establece una alternativa: lo que está a la izquierda o lo que está a la derecha

const regExLiteral = /[ue]/i;
console.log(regExLiteral.test("asdasdas asdasd bluuweb")); //true

const regExpLiteral2 = /bluweb|bluuweb/i;
console.log(regExpLiteral2.test("asdasdas asdasd bluweb")); //true

// [0-9] Un dígito del 0 al 9.
// [A-Z] Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
// [a-z] Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
// [A-Za-z0-9] Carácter alfanumérico (letra mayúscula, minúscula o dígito).

const soloLetrasNum = /[A-Za-z0-9]/i;
console.log(soloLetrasNum.test("$$$")); //true

