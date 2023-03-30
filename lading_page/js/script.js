window.onload = function (){

    const enviar = document.getElementById("enviar");

    enviar.addEventListener("click", teste);    
    function teste (){
        alert("Obrigado, entraremos em contato");
    }

}

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."        
    },
    telefone: {
        valueMissing:"Este campo não pode estar vazio.",
        typeMismatch:"Por favor, preencha um telefone válido.",
        tooShort:"Por favor, preencha um telefone válido."

    }
    
}
function verificaCampo(campo){
    let mensagem = "";
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.nextElementSibling;
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem;        
    } else {
        mensagemErro.textContent = "";
    }
}