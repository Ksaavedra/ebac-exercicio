# Módulo 11 - Agência Criativa Web

## 📋 Descrição

Página institucional fictícia da **Agência Criativa Web**, feita com **HTML** e **CSS**. O layout é próprio: menu, home, sobre, serviços, depoimentos e contato, com imagens em tamanhos diferentes para celular, tablet e computador.

## 🎯 Como funciona

- O menu leva até as seções **Home**, **Sobre nós**, **Serviços**, **Depoimentos** e **Contato**
- No celular, o menu abre pelo botão **Menu** e fecha ao escolher uma seção
- O título da seção para abaixo do menu fixo, para o texto não ficar escondido
- As imagens usam `srcset` e `<picture>`: o navegador escolhe o arquivo conforme a largura da tela
- O formulário de contato pede nome, e-mail e mensagem. Ele não envia dados para um servidor

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Página semântica, com `header`, `nav`, `main`, `section`, `picture` e `footer`
- **CSS3** - Flexbox no menu, na home e no sobre; Grid nos serviços, depoimentos e contato
- **Unidades relativas** - `rem`, `vw` e `%` no espaçamento e no tamanho do texto
- **Media queries** - Ajustes a partir de `40rem`, `48rem` e `64rem`
- **JavaScript** - Só fecha o menu no celular e rola até a seção escolhida

## 📁 Estrutura de Arquivos

```
módulo 11/
├── index.html          # Página da agência
├── estilos.css         # Estilos, menu e media queries
├── imagens/
│   ├── banner-480.svg  # Home no celular
│   ├── banner-800.svg  # Home no tablet
│   ├── banner-1400.svg # Home no computador
│   ├── sobre-480.svg   # Sobre no celular
│   └── sobre-960.svg   # Sobre em telas maiores
└── README.md           # Documentação
```

## 🚀 Como executar

1. Abra `index.html` no navegador, ou use o Live Server na pasta `módulo 11`
2. No celular, toque em **Menu** e escolha uma seção
3. No computador, use os links do topo
4. Role a página e confira se as imagens e os blocos se reorganizam ao mudar a largura da janela
