const CHAVE_CADASTRO = "cadastroUsuario";
const campos = ["nome", "email", "cep", "logradouro", "numero", "complemento", "bairro", "cidade", "uf"];

const formulario = document.getElementById("cadastro");
const campoCep = document.getElementById("cep");
const campoNumero = document.getElementById("numero");
const campoSemNumero = document.getElementById("sem-numero");
const mensagemCep = document.getElementById("mensagem-cep");
const modal = document.getElementById("modal");
const modalCaixa = document.querySelector(".modal-caixa");
const modalTitulo = document.getElementById("modal-titulo");
const modalTexto = document.getElementById("modal-texto");
const fecharModal = document.getElementById("fechar-modal");

function lerFormulario() {
    const dados = {};

    for (let i = 0; i < campos.length; i++) {
        const nome = campos[i];
        dados[nome] = document.getElementById(nome).value;
    }

    dados.semNumero = campoSemNumero.checked;

    return dados;
}

function salvarFormulario() {
    localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(lerFormulario()));
}

function restaurarFormulario() {
    const salvo = localStorage.getItem(CHAVE_CADASTRO);

    if (!salvo) {
        return;
    }

    const dados = JSON.parse(salvo);

    for (let i = 0; i < campos.length; i++) {
        const nome = campos[i];

        if (dados[nome]) {
            document.getElementById(nome).value = dados[nome];
        }
    }

    if (dados.semNumero) {
        campoSemNumero.checked = true;
        campoNumero.value = "";
        campoNumero.disabled = true;
    }
}

function mostrarMensagem(elemento, texto, tipo) {
    elemento.textContent = texto;
    elemento.classList.remove("sucesso", "erro");

    if (tipo) {
        elemento.classList.add(tipo);
    }
}

function limparCep(cep) {
    return cep.replace(/\D/g, "");
}

function formatarCep(cep) {
    const numeros = limparCep(cep).slice(0, 8);

    if (numeros.length <= 5) {
        return numeros;
    }

    return numeros.slice(0, 5) + "-" + numeros.slice(5);
}

function preencherEndereco(endereco) {
    document.getElementById("logradouro").value = endereco.logradouro || "";
    document.getElementById("bairro").value = endereco.bairro || "";
    document.getElementById("cidade").value = endereco.localidade || "";
    document.getElementById("uf").value = endereco.uf || "";

    if (!document.getElementById("complemento").value && endereco.complemento) {
        document.getElementById("complemento").value = endereco.complemento;
    }
}

function limparEndereco() {
    document.getElementById("logradouro").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
}

let cepConsultado = "";
let cepEncontrado = "";

async function buscarCep() {
    const cep = limparCep(campoCep.value);

    if (cep.length === 8 && cep === cepEncontrado) {
        return;
    }

    if (cep.length !== 8) {
        cepEncontrado = "";
        mostrarMensagem(mensagemCep, "", "");
        return;
    }

    cepConsultado = cep;
    cepEncontrado = "";
    mostrarMensagem(mensagemCep, "Buscando CEP...", "");

    try {
        const resposta = await fetch("https://viacep.com.br/ws/" + cep + "/json/");

        if (cepConsultado !== cep) {
            return;
        }

        if (!resposta.ok) {
            throw new Error("Falha na consulta");
        }

        const endereco = await resposta.json();

        if (cepConsultado !== cep) {
            return;
        }

        if (endereco.erro) {
            cepEncontrado = "";
            limparEndereco();
            salvarFormulario();
            mostrarMensagem(mensagemCep, "Erro: CEP não encontrado.", "erro");
            return;
        }

        cepEncontrado = cep;
        preencherEndereco(endereco);
        salvarFormulario();
        mostrarMensagem(mensagemCep, "Sucesso: endereço preenchido.", "sucesso");
    } catch (erro) {
        if (cepConsultado !== cep) {
            return;
        }

        cepEncontrado = "";
        limparEndereco();
        salvarFormulario();
        mostrarMensagem(mensagemCep, "Erro: não foi possível consultar o CEP.", "erro");
    }
}

restaurarFormulario();

if (limparCep(campoCep.value).length === 8) {
    buscarCep();
}

formulario.addEventListener("input", function (evento) {
    if (evento.target === campoCep) {
        campoCep.value = formatarCep(campoCep.value);
    }

    salvarFormulario();
});

campoCep.addEventListener("input", buscarCep);
campoCep.addEventListener("blur", buscarCep);

campoSemNumero.addEventListener("change", function () {
    if (campoSemNumero.checked) {
        campoNumero.value = "";
        campoNumero.disabled = true;
    } else {
        campoNumero.disabled = false;
        campoNumero.focus();
    }

    salvarFormulario();
});

function mensagemDeErro() {
    const dados = lerFormulario();
    const emailValido = dados.email.indexOf("@") > 0 && dados.email.indexOf(".") > 0;

    if (!dados.nome.trim()) {
        return "Informe o nome.";
    }

    if (!emailValido) {
        return "Informe um e-mail válido.";
    }

    if (limparCep(dados.cep).length !== 8) {
        return "Informe um CEP com 8 números.";
    }

    if (mensagemCep.classList.contains("erro")) {
        return "Corrija o CEP antes de salvar.";
    }

    if (limparCep(dados.cep) !== cepEncontrado) {
        return "Consulte um CEP válido antes de salvar.";
    }

    if (!dados.logradouro.trim() || !dados.cidade.trim() || !dados.uf.trim()) {
        return "Consulte um CEP válido antes de salvar.";
    }

    if (!dados.semNumero && !dados.numero.trim()) {
        return "Informe o número ou marque Sem número.";
    }

    return "";
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const erro = mensagemDeErro();

    if (erro) {
        abrirModal("erro", erro);
        return;
    }

    salvarFormulario();
    abrirModal("sucesso", "Sucesso: cadastro salvo neste navegador.");
});

function abrirModal(tipo, texto) {
    modalCaixa.classList.remove("sucesso", "erro");
    modalCaixa.classList.add(tipo);
    modalTitulo.textContent = tipo === "sucesso" ? "Sucesso" : "Erro";
    modalTexto.textContent = texto;
    modal.hidden = false;
    fecharModal.focus();
}

function limparPreenchidos() {
    for (let i = 0; i < campos.length; i++) {
        document.getElementById(campos[i]).value = "";
    }

    cepEncontrado = "";
    cepConsultado = "";
    campoSemNumero.checked = false;
    campoNumero.disabled = false;
    mostrarMensagem(mensagemCep, "", "");
}

function fecharJanela() {
    const limpar = modalCaixa.classList.contains("sucesso");
    modal.hidden = true;

    if (limpar) {
        limparPreenchidos();
    }
}

fecharModal.addEventListener("click", fecharJanela);

modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
        fecharJanela();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharJanela();
    }
});
