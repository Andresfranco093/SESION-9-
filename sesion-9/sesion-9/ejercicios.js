// BLOQUE 1

// Ejercicio 1.1 – Datos personales
// Usamos const porque estos valores no cambian.
const nombre = "ANDRES FRANCO ";
const edad = 21;
const semestre = 8;

console.log("Nombre:", nombre, typeof nombre);
console.log("Edad:", edad, typeof edad);
console.log("Semestre:", semestre, typeof semestre);
// Ejercicio 1.2 – Conversión de tipos

const texto = "25";
const numero = Number(texto);

// Antes de convertir
console.log('"25" == 25:', texto == 25);
console.log('"25" === 25:', texto === 25);

// Después de convertir
console.log('Number("25") == 25:', numero == 25);
console.log('Number("25") === 25:', numero === 25);

// == permite conversión automática de tipos.
// === compara el valor y también el tipo de dato.


// Ejercicio 1.3 – Precio con IVA

const precio = 80000;
const IVA = 0.19;
const total = precio + (precio * IVA);

console.log("Total con IVA:", total);


// Ejercicio 1.4 – Par o impar

const numero1 = 7;
const resultado1 = numero1 % 2 === 0 ? "par" : "impar";

console.log(numero1, "es", resultado1);

const numero2 = 10;
const resultado2 = numero2 % 2 === 0 ? "par" : "impar";

console.log(numero2, "es", resultado2);


// Ejercicio 1.5 – Pregunta de análisis

// typeof null devuelve "object".
// Esto es un error histórico de JavaScript que se mantiene
// por compatibilidad con código existente.
//
// Una variable declarada con const no puede ser reasignada.
// Por ejemplo:
// const x = 10;
// x = 20;
// Esto produce un TypeError.
