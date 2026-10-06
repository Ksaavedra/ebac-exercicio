# Módulo 12 - Agência Criativa Web com BEM

## 📋 Descrição

Refatoração do CSS da **Agência Criativa Web**, do módulo 11. A página continua a mesma: menu, home, sobre, serviços, depoimentos e contato. O que muda é a organização do CSS, com a metodologia **BEM** (Block, Element, Modifier).

O projeto original permanece em `módulo 11/`.

## 🎯 Como funciona

- As classes seguem o padrão `.bloco__elemento--modificador`, por exemplo `menu__link`, `titulo--secao` e `cartao--escuro`
- O CSS está dividido em estilos gerais, componentes, seções e responsivo
- Não há seletor de ID. Os `id` do HTML servem só para o menu, o formulário e os links das seções
- Botão, rótulo, título, cartão e grade são componentes reutilizados
- O menu, as imagens e o formulário se comportam como no módulo 11

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Mesma página do módulo 11, com classes BEM
- **CSS3** - Flexbox, Grid, unidades relativas e media queries
- **BEM** - Nomenclatura previsível e especificidade baixa
- **JavaScript** - Fecha o menu no celular e rola até a seção escolhida

## 📁 Estrutura de Arquivos

```
módulo 12/
├── index.html          # Página da agência com classes BEM
├── estilos.css         # CSS refatorado: gerais, componentes, seções e responsivo
├── imagens/
│   ├── banner-480.svg  # Home no celular
│   ├── banner-800.svg  # Home no tablet
│   ├── banner-1400.svg # Home no computador
│   ├── sobre-480.svg   # Sobre no celular
│   └── sobre-960.svg   # Sobre em telas maiores
└── README.md           # Documentação
```

## 🚀 Como executar

1. Abra `index.html` no navegador, ou use o Live Server na pasta `módulo 12`
2. No celular, toque em **Menu** e escolha uma seção
3. No computador, use os links do topo
4. Mude a largura da janela e confira se o layout continua responsivo
