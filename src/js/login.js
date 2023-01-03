const cardLogin = document.getElementById('card-login');
const campos = document.querySelectorAll('.required');
/*const spans = querysellectorall .span-required*/
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; /* email regex pego da internet*/

function nameValidate(){
    if(campos[0].value.length < 3){
        console.log("Nome deve ter 3 caracteres");
    } 
    else{
        console.log("nome validado");
    }
}

function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert("Login efetuado com sucesso");
        location.href = "home.html";
    } else{
        alert("Usuário ou senha inválidos!");
    }   
}

function deslogar(){    
    var logado = this.logar();

    if(logado == false){
        alert("Você saiu do sistema!");
    }
}