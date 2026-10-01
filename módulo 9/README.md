# Módulo 9 - Cadastro de clientes

## 📋 Descrição

Aplicação web em **HTML**, **CSS** e **JavaScript** para cadastrar, listar e excluir clientes. Os dados ficam na API do [CrudCrud](https://crudcrud.com/), sem backend próprio.

## 🎯 Como funciona

- O formulário pede **nome** e **e-mail**
- **Cadastrar cliente** envia um `POST` com `{ name, email }`
- Ao abrir a página, um `GET` busca os clientes e monta a lista na tela
- Cada cliente tem o botão **Excluir**, que envia um `DELETE` pelo `_id`
- Sem nome, ou com e-mail sem `@` e `.`, o cadastro não é enviado
- O sucesso aparece em verde e o erro em vermelho
- `console.log()` mostra o status das requisições no DevTools (F12 → Console)

Não há edição de cliente. O exercício usa criar, listar e excluir.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Formulário e lista
- **CSS3** - Cards e layout responsivo
- **JavaScript (Vanilla)** - `fetch` com `async/await` e manipulação do DOM
- **CrudCrud** - API REST de teste

## 📁 Estrutura de Arquivos

```
módulo 9/
├── clientes/
│   ├── index.html    # Página do cadastro
│   ├── scripts.js    # GET, POST e DELETE
│   └── styles.css    # Estilos dos cards
└── README.md         # Documentação
```

## 🚀 Como executar

A página usa `fetch`, então precisa ser aberta por um servidor HTTP. Abrir o arquivo direto (`file://`) não consulta a API.

1. Na pasta `clientes`, use o Live Server ou outro servidor local
2. Digite um nome e um e-mail, por exemplo `ana@email.com`
3. Clique em **Cadastrar cliente**
4. Confira o nome e o e-mail em **Clientes cadastrados**
5. Clique em **Excluir** para remover esse cliente da API

O endpoint fica na constante `URL_API`, no início de `clientes/scripts.js`:

`https://crudcrud.com/api/8482748065c344a0bdd7952e76027303/clientes`

Para testar fora da página, use essa mesma URL no Postman ou na aba Network do DevTools. Se o endpoint parar de responder, gere outro em [crudcrud.com](https://crudcrud.com/) e troque o valor de `URL_API`.
