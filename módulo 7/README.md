# Módulo 7 - Parquímetro

## 📋 Descrição

Simulador de parquímetro feito com **HTML**, **CSS** e **JavaScript**, usando **Programação Orientada a Objetos**. A pessoa informa um valor em reais e a aplicação mostra o tempo de permanência e o troco.

## 🎯 Como funciona

- O valor digitado é lido do campo com id `valor`
- O objeto da classe `Parquimetro` só é criado ao clicar em **Calcular**
- O constructor guarda esse valor na propriedade `valor`
- Valor menor que **R$ 1,00** exibe **Valor insuficiente**
- A partir de R$ 1,00, o programa usa a maior faixa da tabela que o valor cobre
- O troco é a diferença entre o valor informado e o preço dessa faixa
- O tempo e o troco aparecem na div com id `resultado`

As regras de tempo e troco ficam dentro da classe, nos métodos `calcularTempo()` e `calcularTroco()`.

## 💰 Tabela de tarifas

Os preços e os tempos ficam no array `tarifas`, no arquivo `parquimetro/scripts.js`. Cada faixa tem:

- `valor` — preço em reais
- `tempo` — tempo de permanência

As faixas devem ser as do enunciado do exercício, da menor para a maior.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Card centralizado e layout responsivo
- **JavaScript (Vanilla)** - Classe, objeto e manipulação do DOM

## 📁 Estrutura de Arquivos

```
módulo 7/
├── parquimetro/
│   ├── index.html    # Página do parquímetro
│   ├── scripts.js    # Classe Parquimetro
│   └── styles.css    # Estilos do card
└── README.md         # Documentação
```

## 🚀 Como executar

1. Abra o arquivo `parquimetro/index.html` no navegador
2. Digite um valor em reais
3. Clique em **Calcular**
4. Leia o tempo de permanência e o troco

## ✅ Conceitos praticados

- Classe `Parquimetro`
- Constructor para receber e guardar o valor
- Métodos para tempo, troco e mensagem na tela
- Objeto criado no clique do botão
- Leitura e escrita de elementos pelo DOM
