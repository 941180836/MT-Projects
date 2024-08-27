document.addEventListener('DOMContentLoaded', () =>{
    let nome = document.querySelector('.nome')
    let tel = document.querySelector('.tel')
    let senha = document.querySelector('.senha')
    let confirmarSenha = document.querySelector('.confirmarSenha')
    let btn = document.querySelector('.btn')
    let formulario = document.querySelector('.formulario')
    let formularioLogin = document.querySelector('.formLogin')
    let asa = document.querySelectorAll('.asa')
//Formulario de Cadastro
    formulario.addEventListener('submit', (e) =>{
        e.preventDefault()
        if(verificarCampos(nome, tel, senha, confirmarSenha)){
            const users = JSON.parse(localStorage.getItem('users')) || []

            let nomeUsuario = nome.value
            let telUsuario = tel.value
            let senhaUsuario = senha.value
            let confirmarUsuario = confirmarSenha.value
            users.push({nomeUsuario, telUsuario, senhaUsuario, confirmarUsuario})
            localStorage.setItem('users', JSON.stringify(users));

            let popUp = document.querySelector('.login')
            popUp.style.scale = "1"
            let container = document.querySelector('.container')
            container.classList.remove("deactive")
            container.classList.add("active")

            
        }else{
            alert("Não podemos continuar")
        }
    })
    //formulario de Login
    formularioLogin.addEventListener('submit', (e) =>{
        e.preventDefault()
        let nomeUsuarioLogin = document.querySelector(".nomeLogin")
        let senhaUsuarioLogin = document.querySelector(".passLogin")
        let dados = verificarDadosLogin()
        const dadosFind = dados.find(user => user.nomeUsuario === nomeUsuarioLogin.value && user.senhaUsuario === senhaUsuarioLogin.value)
        const dadosFindIndex = dados.findIndex(user => user.nomeUsuario === nomeUsuarioLogin.value && user.senhaUsuario === senhaUsuarioLogin.value)
        if (dadosFind) {
            sessionStorage.setItem("UserLogado", JSON.stringify(dadosFind))
            sessionStorage.setItem("UserIndice", JSON.stringify(dadosFindIndex))
            console.log(dadosFindIndex)
            console.log(dadosFind)
            window.location.href = "home.html"
        }else{
            if (nomeUsuarioLogin.value==='' || senhaUsuarioLogin.value==='') {
                alert("Um dos campos está vazio")
            }else{
              alert("Dados incorretos")  
            }
        }
    })
})

function verificarCampos(nome, tel, senha, confirmarSenha){
    if (nome.value === '' || tel.value === '' || senha.value === '' || confirmarSenha.value === '') {
        alert("Um dos campos estão vazios")
        return false
        
    }else{
        if (verificarSenhas(senha, confirmarSenha)) {
            alert("Senhas identicas")
            return true
        }else{
            alert("Senhas não identicas")
            return false
        }
    }
}
function verificarSenhas(senha, confirmarSenha) {

    if (senha.value === confirmarSenha.value) {
        return true
    }else{
        return false
    }
}

function verificarDadosLogin() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users
}

document.querySelector(".exit").addEventListener('click', () =>{
    let popUp = document.querySelector('.login')
    popUp.style.scale = "0"
    let container = document.querySelector('.container')
    
    if (container.classList.contains("active")) {
        container.classList.remove("active")
        container.classList.add("deactive")
    }else{
        container.classList.add("active")
    }
})

document.querySelector(".log").addEventListener('click', () =>{
    let popUp = document.querySelector('.login')
    popUp.style.scale = "1"
    let container = document.querySelector('.container')
    container.classList.add("active")
    container.classList.remove("deactive")
})