const title = document.querySelector(".title")
console.log(title)

const div = document.querySelectorAll("div")
console.log(div)

// const form = document.getElementById("formulario")  
//otra opcion:
// const otroForm = document.querySelector("#formulario")

const textarea = document.getElementById("cover-letter")
console.log(textarea)
textarea.addEventListener("keyup", function(e){
    console.log("El usuario apreto", e.key)
})

const resetButton = document.getElementById("reset-btn")
resetButton.addEventListener("click", function(e){
    console.log("el usuario hizo click")
})

const form = document.getElementById("form")
form.addEventListener("submit", function(e){
    const fullname = document.getElementById("fullname")
    console.log("fullname:", fullname)
    const email = document.getElementById("email").value
    console.log("email:", email)
    const passport = document.getElementById("dni").value
    console.log("passport:", passport)
    const workingPreferences = document.querySelectorAll("input[name='working-preferences']:checked")[0].value
    console.log("working-preferences", workingPreferences)
    const languages = document.querySelectorAll("input[name='language']:checked")
    console.log("languages", languages)
    const languagesArray = [];
    languages.forEach(item =>{
        languagesArray.push(item,value)
    })
    console.log("languages array:", languagesArray)
})


