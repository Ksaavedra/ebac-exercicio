const URL_API = "https://crudcrud.com/api/8482748065c344a0bdd7952e76027303/clientes";

const formulario = document.getElementById("cadastro");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("lista");

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.classList.remove("sucesso", "erro");

    if (tipo) {
        mensagem.classList.add(tipo);
    }
}

function emailValido(email) {
    return email.indexOf("@") > 0 && email.indexOf(".") > 0;
}

function mensagemDeErro() {
    if (!campoNome.value.trim()) {
        return "Informe o nome.";
    }

    if (!emailValido(campoEmail.value.trim())) {
        return "Informe um e-mail válido.";
    }

    return "";
}

function mostrarLista(clientes) {
    lista.innerHTML = "";

    if (clientes.length === 0) {
        const vazio = document.createElement("li");
        vazio.className = "vazio";
        vazio.textContent = "Nenhum cliente cadastrado.";
        lista.appendChild(vazio);
        return;
    }

    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i];
        const item = document.createElement("li");
        const info = document.createElement("div");
        info.className = "info";

        const blocoNome = document.createElement("div");
        const rotuloNome = document.createElement("span");
        const valorNome = document.createElement("strong");
        rotuloNome.textContent = "Nome";
        valorNome.textContent = cliente.name;
        blocoNome.appendChild(rotuloNome);
        blocoNome.appendChild(valorNome);

        const blocoEmail = document.createElement("div");
        const rotuloEmail = document.createElement("span");
        const valorEmail = document.createElement("strong");
        rotuloEmail.textContent = "E-mail";
        valorEmail.textContent = cliente.email;
        blocoEmail.appendChild(rotuloEmail);
        blocoEmail.appendChild(valorEmail);

        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "excluir";
        botao.textContent = "Excluir";
        botao.addEventListener("click", function () {
            excluirCliente(cliente._id);
        });

        info.appendChild(blocoNome);
        info.appendChild(blocoEmail);
        item.appendChild(info);
        item.appendChild(botao);
        lista.appendChild(item);
    }
}

async function listarClientes() {
    const resposta = await fetch(URL_API);

    console.log("GET", resposta.status);

    if (resposta.status === 404) {
        mostrarLista([]);
        return;
    }

    if (!resposta.ok) {
        throw new Error("Não foi possível listar os clientes.");
    }

    const clientes = await resposta.json();
    console.log("Clientes", clientes);
    mostrarLista(clientes);
}

async function cadastrarCliente(nome, email) {
    const resposta = await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nome,
            email: email
        })
    });

    console.log("POST", resposta.status);

    if (!resposta.ok) {
        throw new Error("Não foi possível cadastrar o cliente.");
    }

    const cliente = await resposta.json();
    console.log("Cliente cadastrado", cliente);
}

async function excluirCliente(id) {
    try {
        const resposta = await fetch(URL_API + "/" + id, {
            method: "DELETE"
        });

        console.log("DELETE", resposta.status);

        if (!resposta.ok) {
            throw new Error("Não foi possível excluir o cliente.");
        }

        mostrarMensagem("Cliente excluído.", "sucesso");
        await listarClientes();
    } catch (erro) {
        console.log(erro);
        mostrarMensagem("Erro ao excluir o cliente.", "erro");
    }
}

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const erro = mensagemDeErro();

    if (erro) {
        mostrarMensagem(erro, "erro");
        return;
    }

    try {
        await cadastrarCliente(campoNome.value.trim(), campoEmail.value.trim());
        formulario.reset();
        mostrarMensagem("Cliente cadastrado.", "sucesso");
        await listarClientes();
    } catch (erro) {
        console.log(erro);
        mostrarMensagem("Erro ao cadastrar o cliente.", "erro");
    }
});

listarClientes().catch(function (erro) {
    console.log(erro);
    mostrarMensagem("Erro ao carregar os clientes.", "erro");
    mostrarLista([]);
});
