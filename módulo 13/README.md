# Módulo 13 - Agência Criativa Web com SASS

## 📋 Descrição

Conversão do CSS da **Agência Criativa Web** para **SASS**. A página continua a mesma do módulo 12: menu, home, sobre, serviços, depoimentos e contato, com classes **BEM**. O que muda é a estrutura dos estilos, dividida em partials e compilada para CSS.

O CSS em BEM permanece em `módulo 12/`. O projeto original permanece em `módulo 11/`.

## 🎯 Como funciona

- `scss/estilos.scss` importa os partials com `@use`
- `_variaveis.scss` guarda cores, fonte, espaçamentos e larguras de tela
- `_mixins.scss` tem os mixins `botao`, `espacamento` e `foco`
- Os espaçamentos usam operadores, como `calc($espacamento / 2)` e `$espacamento * 2`
- O aninhamento usa `&__elemento` e `&--modificador`, então o CSS compilado continua em BEM
- O `index.html` carrega o arquivo compilado `css/estilos.css`

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Mesma página do módulo 12
- **SASS** - Partials, variáveis, mixins, operadores e aninhamento
- **CSS3** - Resultado da compilação, com Flexbox, Grid e media queries
- **Node.js** - Compilação do SASS pela linha de comando
- **BEM** - Nomenclatura das classes
- **JavaScript** - Fecha o menu no celular e rola até a seção escolhida

## 📁 Estrutura de Arquivos

```
módulo 13/
├── index.html              # Página da agência
├── package.json            # Comando npm run build
├── scss/
│   ├── estilos.scss        # Arquivo principal, com @use
│   ├── _variaveis.scss     # Cores, fonte e espaçamentos
│   ├── _mixins.scss        # Mixins de botão, espaçamento e foco
│   ├── _base.scss          # Reset e tipografia
│   ├── _componentes.scss   # Logo, menu, cartão, grade e formulário
│   └── _layout.scss        # Cabeçalho, seções e rodapé
├── css/
│   └── estilos.css         # CSS compilado
├── imagens/
│   ├── banner-480.svg      # Home no celular
│   ├── banner-800.svg      # Home no tablet
│   ├── banner-1400.svg     # Home no computador
│   ├── sobre-480.svg       # Sobre no celular
│   └── sobre-960.svg       # Sobre em telas maiores
└── README.md               # Documentação
```

## 🚀 Como executar

Na pasta `módulo 13`, compile o SASS:

```bash
npm install
npm run build
```

Depois:

1. Abra `index.html` no navegador, ou use o Live Server na pasta `módulo 13`
2. No celular, toque em **Menu** e escolha uma seção
3. No computador, use os links do topo
4. Mude a largura da janela e confira se o layout continua responsivo
