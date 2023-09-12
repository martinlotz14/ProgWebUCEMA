console.log("content load")

// Cálculo de IMC (Índice de Masa Corporal):
//    Pedir al usuario que ingrese su peso (en kg) y su altura (en metros).
//  Calcular el IMC utilizando la fórmula: `IMC = peso / (altura^2)`.
// Dependiendo del resultado, mostrar si está bajo de peso, en peso normal o con sobrepeso.

function calculoImc(){
const peso = parseFloat(prompt("ingrese su peso"))            // parseFloat se usa para convertir el dato en un numero  
const altura = parseFloat(prompt("ingrese su altura"))
// Para inicializar variables podemo usar, var (hoy en dia no se usa tanto), const(se usa para declarar una variable que va a ser
//  constante durante todo el desarrollo del documento) o let(es recomenable para variables que van a cambiar, como el peso)
const imc = peso / (altura * altura)
if(imc < 18.5){
    alert("estas bajo de peso, tu imc es de"+imc)
}
if(imc >= 18.5 && imc < 24.9){
    alert("tenes un peso normal, tu imc es de"+imc)
}else{
    alert("estas por encima de tu peso esperado, tu im es de"+imc)
}
}



// Registro de personas:
// Crear un objeto que represente a una persona, con propiedades como nombre, edad, profesión y hobbies.
//    * Crear funciones que permitan:
//    * Añadir un hobby.
//    * Cambiar la profesión.
//      	   * Celebrar un cumpleaños (incrementar la edad).
// Crear una lista de personas
// Agregar una persona a la lista 
// Eliminar una persona de la lista
// Saludar a cada persona

const persona = {
    nombre: "Juan",
    edad: 20,
    profesion: "Estudiante",
    hobbies: ["correr", "cantar"],
    añadirhobby: function(hobby){
        this.hobbies.push(hobby)
    },
    cambiarProfesion: function(nuevaProfesion){
        this.profesion = nuevaProfesion

    }
}

function agregarHobby(hobby){
    persona.hobbies.push(hobby)
    console.log("persona en agregar hobby", persona)
}

console.log("persona sin hobby nuevo", persona)
persona.añadirhobby("jugar al futbol")
console.log("persona con hobby nuevo", persona)
persona.cambiarProfesion("doctor")
console.log("persona con profesion nueva", persona)

// const persona2 = {
//     nombre: "Maria",
//     edad: 20,
//     profesion: "Estudiante",
//     hobbies: ["correr", "cantar"],
//     añadirhobby: function(hobbie){
//         this.hobbies.push(hobby)
//     },
// }

// console.log("persona sin hobby nuevo", persona2)
// persona2.añadirhobby("bailar")
// console.log("persona con hobby nuevo", persona2)