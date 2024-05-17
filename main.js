// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:
/* function greetings() {
	return "Hola"
} */

const greetings = () => 'Hola'


// Convierte la siguiente función en una función flecha en línea:
/* function division(a, b) {
	return a / b
}
 */
const division = (a, b) => a / b

// Convierte la siguiente función en una función flecha:
/* function myName(name) {
	return `Mi nombre es ${name}`
} */

const myName = (name) => `Mi nombre es ${name}`

// Convierte las siguientes funciones en funciones flecha:
/* function test2() {
	console.log("Función test 2 ejecutada.")
}
function test1(callback) {
	callback()
}	 */

const test2 = () => console.log("Función test 2 ejecutada.")

const test1 = (callback) => callback()

// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 


let people = [
	{ name: 'Jamiro', age: 45 },
	{ name: 'Juan', age: 35 },
	{ name: 'Paco', age: 34 },
	{ name: 'Pepe', age: 14 },
	{ name: 'Pilar', age: 24 },
	{ name: 'Laura', age: 24 },
	{ name: 'Jenny', edad: 10 },
 ]

 // Crea un array con la gente mayor de 25 años y muéstralo por consola.
 people.filter((element) => element?.age >= 25)

 //Crea un array con la gente que empieza por J.
people.filter((element) => element?.name.match(/^J[a-zA-Z]/)
)

// 3. Map
// Utilizando el array de antes crea un º	ºarray con la gente mayor de 25 años y muéstralo por consola
people.filter((element) => element?.name.match(/^J[a-zA-Z]/)).map((e) => e.age >= 25)

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.map((e) => e * e))


// Filter 
// Crea un segundo array que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers2.filter(numero => numero % 2 !== 0)


// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const veganFoodSentences = foodList.filter(food => food.isVeggie).map(food => `¡Qué rico ${food.name} me voy a comer!`)

// 
const numbers3 = [39, 2, 4, 25, 62]
numbers3.reduce((accumulator, currentValue) => accumulator * currentValue);