let error = document.querySelector(".error")
let success = document.querySelector(".success")
let name = document.getElementById("name")
let email = document.getElementById("email")
const form = document.getElementById("formSubmit")
const btn = document.getElementById("btn")


const validatorForm = (e) =>{
    success.innerHTML = "" 
    error.innerHTML = "" 
    success.style.display='none'
    error.style.display='none'
    e.preventDefault()
    if(!email.value || !name.value){
        if(!email.value && !name.value){
        error.innerHTML = "Veuillez renseigner tous les champs" 
        error.style.display='block'
        }
        if(!email.value){
            error.innerHTML = "Veuillez renseigner votre email" 
            error.style.display='block'
    
        }
        if(!name.value){
            error.innerHTML = "Veuillez renseigner votre nom" 
            error.style.display='block'
    
        }
    }
    else{
        success.innerHTML = "Information valide" 
        success.style.display='block'
    } 

}

const handleClick = () =>{
    let btn = document.getElementById("btn")
    btn.addEventListener(onclick, (e) =>{
        e.preventDefault()
    })


}

form.onsubmit = validatorForm
btn.onclick =handleClick
