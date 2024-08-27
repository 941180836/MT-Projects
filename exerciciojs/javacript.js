var btn= document.querySelector(".btn")
var input= document.querySelector("input")
var button= document.querySelector("button")
btn.addEventListener('click', () =>{
input.style.opacity="1" 
input.style.pointerEvents="all" 
button.style.opacity="1" 
button.style.pointerEvents="all" 
})

function verificarPeriodo(periodo){
    if(periodo<12){
        let texto= "Manhã"
        return texto
    }else if(periodo < 17){
        let texto = "Tarde"
        return texto
    }else{
        let texto = "Noite" 
        return texto
    }
} 

button.addEventListener('click', () =>{
    var verificado = verificarPeriodo(input.value)

    if (verificado == "Manhã") {
        let body = document.querySelector("body")
        body.style.backgroundColor = "red"
    }else if(verificado == "Tarde"){
        let body = document.querySelector("body")
        body.style.backgroundColor = "green"
    }else{
        let body = document.querySelector("body")
        body.style.backgroundColor = "black"
    }
})