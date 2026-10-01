# Módulo 7 - Parquímetro

## 📋 Descrição

Simulador de parquímetro feito com **HTML**, **CSS** e **JavaScript**, usando **Programação Orientada a Objetos**. A pessoa adiciona um saldo, escolhe uma tarifa e a aplicação mostra o tempo de permanência e o troco.

## 🎯 Como funciona

- O valor digitado é lido do campo com id `valor`
- O objeto da classe `Parquimetro` só é criado ao clicar em **Calcular**
- O constructor normaliza a entrada e guarda o valor em `valor`
- Se o campo estiver vazio, a aplicação mostra a mensagem **Nenhum valor foi digitado**
- Valor menor que **R$ 1,00** exibe **Valor insuficiente**
- A partir de R$ 1,00, o programa identifica automaticamente a maior faixa que o valor cobre
- O troco é o que sobra do saldo depois de pagar essa faixa
- O tempo e o troco aparecem na div com id `resultado`

As regras de tempo e troco ficam dentro da classe, nos métodos `calcularTempo()` e `calcularTroco()`.

## 💰 Tabela de tarifas

| Valor | Tempo |
| --- | --- |
| R$ 1,00 | 30 minutos |
| R$ 1,75 | 60 minutos |
| R$ 3,00 | 120 minutos |

O tempo máximo é de 120 minutos. Essas faixas ficam no array `tarifas`, no arquivo `parquimetro/scripts.js`.

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
2. Digite um valor no campo **Valor (R$)**
3. Clique em **Calcular**
4. Leia a mensagem exibida com o tempo de permanência e o troco, ou a mensagem de erro caso o campo esteja vazio ou o valor seja insuficiente

## ✅ Conceitos praticados

- Classe `Parquimetro`
- Constructor para receber e guardar o valor
- Métodos para tempo, troco e mensagem na tela
- Objeto criado no clique do botão
- Leitura e escrita de elementos pelo DOM
