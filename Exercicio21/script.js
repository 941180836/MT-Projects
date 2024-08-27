var spanHtml= document.querySelector("span")
var btn = document.querySelector("button")
spanHtml.innerHTML=`${localStorage.getItem("nome")}`

spanHtml.onclick=()=>{
    btn.style.display="block"
}
btn.onclick=()=>{

    var valueSpan=spanHtml.outerText

    var nomeDb= localStorage.getItem("nome")

    if(valueSpan != nomeDb){

        localStorage.setItem("nome",valueSpan)

        alert("alteração feita com sucesso")

        btn.style.display="none"

    }else if(sppp === nomeDb){

        alert("Sem atualização")

    }
}