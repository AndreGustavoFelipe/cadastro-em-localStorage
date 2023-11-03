function guardarCadastro(){

    const titleModal = document.querySelector(".modal-title");
    const bodyModal = document.querySelector(".modal-body");

    const novoUsuario = document.getElementById('cadastroUsuario').value;
    const novaSenha = document.getElementById('cadastroSenha').value;

    // Obter usuários do localStorage ou inicializar um array vazio
    const usuarios = JSON.parse(localStorage.getItem('login')) || [];

    // Verificar se o usuário já existe
    const usuarioExistente = usuarios.find(u => u.usuario === novoUsuario);

    if (usuarioExistente) {
        titleModal.textContent = 'Este Usuário já esta Cadastrado!';
        bodyModal.textContent = 'O usuário informado já foi cadastrado em nosso sistema!';
    } else {
    // Adicionar novo usuário ao array
    usuarios.push({ usuario: novoUsuario, senha: novaSenha });

    // Atualizar o localStorage com os novos dados
    localStorage.setItem('login', JSON.stringify(usuarios));
    titleModal.textContent = 'Cadastro Realizado com Sucesso!';
    bodyModal.textContent = 'O seu cadastro foi realizado com sucesso!';
    window.location.assign("login.html");
    }
}

function verificarLogin(){

    const titleModal = document.querySelector(".modal-title");
    const bodyModal = document.querySelector(".modal-body");

    const usuario = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('loginSenha').value;

    // Obter usuários do localStorage ou inicializar um array vazio
    const usuarios = JSON.parse(localStorage.getItem('login')) || [];

    // Verificar se o usuário e a senha correspondem a algum registro
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioEncontrado) {
        titleModal.textContent = 'Login Realizado com Sucesso!';
        bodyModal.textContent = 'Usuário e senha encontrados com sucesso!';
        window.location.assign("index.html");
    }
    else {
        titleModal.textContent = 'O Usuário Informado não foi encontrado!';
        bodyModal.textContent = 'O usuário não foi encontrado, tente realizar o cadastro!';
    }

    
}

function exibirAlert(){
    const alertList = document.querySelectorAll('.alert')
    const alerts = [...alertList].map(element => new bootstrap.Alert(element))  

}