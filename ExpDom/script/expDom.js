const btnMenu = document.getElementById('btnMenu');
const btnAutenticar = document.getElementById('btnAutenticar');
const user = document.getElementById('user');
const senha = document.getElementById('senha');
const msgUser = document.getElementById('msg_user');
const msgSenha = document.getElementById('msg_senha');
const inpUser = document.getElementById('user');
const inpSenha = document.getElementById('senha');

btnMenu.addEventListener('click', mostraLista);
btnAutenticar.addEventListener('click', autenticacao);

function mostraLista(){
    const divOpcoes = document.getElementById('opcoes');
    if(divOpcoes.style.display == 'block'){
        divOpcoes.style.display = 'none';
    } else{
        divOpcoes.style.display = 'block';
    }
}

function autenticacao(){
    if(user.value == ''){
        msgUser.style.color = '#ff0000';
        msgUser.style.fontSize = '12px';
        msgUser.innerText = 'Usuário deve ser preenchido';
        inpUser.style.border= '1px solid #ff0000';
    }
    if(senha.value == ''){
        msgSenha.style.color = '#ff0000';
        msgSenha.style.fontSize = '12px';
        msgSenha.innerText = 'Senha deve ser preenchida';
        inpSenha.style.border= '1px solid #ff0000';    
    }
    
    if(senha.value.length < 6 || senha.value.length > 30){
        msgSenha.style.color = '#ff0000';
        msgSenha.style.fontSize = '12px';
        msgSenha.innerText = 'Senha deve ter entre 6 a 30 caracteres';
        inpSenha.style.border= '1px solid #ff0000';
    }
    if(senha.value.length >= 6 && senha.textContent.length <= 30){
        inpSenha.style.border= '1px solid #00ff40';
        msgSenha.innerText = '';
    }
    if(user.value != ''){
        inpUser.style.border= '1px solid #00ff40';
        msgUser.innerText = '';
    }
}