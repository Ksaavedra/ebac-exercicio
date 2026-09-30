# Módulo 8 - Cadastro de usuário

## 📋 Descrição

Formulário de cadastro feito com **HTML**, **CSS** e **JavaScript**. O CEP consulta o endereço na [ViaCEP](https://viacep.com.br/) e os dados ficam salvos neste navegador, sem backend.

## 🎯 Como funciona

- O CEP é formatado como `00000-000`
- Com 8 números, a página consulta `https://viacep.com.br/ws/{cep}/json/`
- CEP válido preenche logradouro, bairro, cidade, UF e, se vier na resposta, o complemento
- CEP inexistente mostra **Erro: CEP não encontrado.** e apaga o endereço antigo
- O número é obrigatório, ou a pessoa marca **Sem número**
- **Salvar cadastro** abre um modal verde de sucesso ou um modal vermelho de erro
- Fechar o modal de sucesso limpa a tela para um novo preenchimento
- Fechar o modal de erro mantém os campos, para corrigir
- O último cadastro salvo volta ao recarregar a página

## ✅ O que o formulário exige

- Nome
- E-mail com `@` e `.`
- CEP consultado com sucesso
- Número, ou a opção **Sem número**

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Formulário
- **CSS3** - Card centralizado, mensagens e modal
- **JavaScript (Vanilla)** - `fetch`, `localStorage` e manipulação do DOM
- **ViaCEP** - Consulta de endereço pelo CEP

## 📁 Estrutura de Arquivos

```
módulo 8/
├── cadastro/
│   ├── index.html    # Página do cadastro
│   ├── scripts.js    # Consulta do CEP, validação e localStorage
│   └── styles.css    # Estilos do card e do modal
└── README.md         # Documentação
```

## 🚀 Como executar

A consulta do CEP usa `fetch`, então a página precisa ser aberta por um servidor HTTP. Abrir o arquivo direto (`file://`) não consulta o CEP.

1. Na pasta `cadastro`, use o Live Server ou outro servidor local
2. Digite um CEP, por exemplo `01001-000`
3. Confira o endereço: Praça da Sé, Sé, São Paulo, SP
4. Informe o número, ou marque **Sem número**
5. Clique em **Salvar cadastro**
6. Feche o modal de sucesso e recarregue a página para ver os dados salvos

A chave usada no navegador é `cadastroUsuario`.
