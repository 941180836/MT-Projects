var iptnome= document.querySelector("#nome")
var iptnumero= document.querySelector("#numero")
var iptpass= document.querySelector("#pass")
var iptpass1= document.querySelector("#pass1")
var btnc = document.querySelector("#btnc")

btnc.onclick=(e)=>{
    e.preventDefault()
    var valueNome = iptnome.value
    var valueNumero = iptnumero.value
    var valuepass= iptpass.value
    var valuepass1 = iptpass1.value

    if(valueNome=="" || valueNumero=="" || valuepass==""){
        alert("preencha todos os campos")
    }
    else if(valuepass!=valuepass1){
        alert("Pass diferentes")
        
    }
    else{
    localStorage.setItem("nome",valueNome)
    localStorage.setItem("numero",valueNumero)
    localStorage.setItem("pass",valuepass)
    alert("cadastro feito com sucesso!")
    location.href="../index.html"
}

}
