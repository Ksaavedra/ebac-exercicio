# Módulo 10 - Parquímetro

## 📋 Descrição

Simulador de parquímetro feito com **HTML**, **CSS** e **JavaScript**. Este projeto é a refatoração do exercício do módulo 7: o cálculo de tempo e troco continua o mesmo, agora organizado em módulos.

## 🎯 Como funciona

- O valor digitado é lido do campo com id `valor`
- O objeto da classe `Parquimetro` só é criado ao clicar em **Calcular**
- Se o campo estiver vazio, a aplicação mostra **Nenhum valor foi digitado**
- Valor menor que **R$ 1,00** exibe **Valor insuficiente**
- A partir de R$ 1,00, o programa usa a maior faixa que o valor cobre
- O tempo máximo é de 120 minutos
- O troco é o que sobra do valor informado depois de pagar essa faixa
- O tempo e o troco aparecem na div com id `resultado`, sem recarregar a página

## 💰 Tabela de tarifas

| Valor   | Tempo       |
| ------- | ----------- |
| R$ 1,00 | 30 minutos  |
| R$ 1,75 | 60 minutos  |
| R$ 3,00 | 120 minutos |

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da página, sem JavaScript inline
- **CSS3** - Card centralizado e layout responsivo
- **JavaScript (ES Modules)** - `import` e `export` entre os arquivos da pasta `js`
- **Programação Orientada a Objetos** - Classe `Parquimetro` e seus métodos
- **Programação funcional** - Funções puras com `map()`, `find()` e `reduce()`
- **DOM** - `getElementById` e `addEventListener` no clique de **Calcular**

## 📁 Estrutura de Arquivos

```
módulo 10/
├── parquimetro/
│   ├── index.html       # Página do parquímetro
│   ├── styles.css       # Estilos do card
│   └── js/
│       ├── classes.js   # Classe Parquimetro e tarifas
│       ├── utils.js     # Funções puras: map, find e reduce
│       └── app.js       # Clique do botão e atualização da tela
└── README.md            # Documentação
```

O exercício original permanece em `módulo 7/parquimetro/`, com `scripts.js`.

## 🚀 Como executar

Os arquivos usam `import`/`export`, então a página precisa ser aberta por um servidor HTTP, como o Live Server. Abrir o arquivo direto (`file://`) não carrega os módulos.

1. Na pasta `parquimetro`, inicie o Live Server
2. Digite um valor no campo **Valor (R$)**
3. Clique em **Calcular**
4. Leia o tempo de permanência e o troco

No DevTools (F12 → Console) aparecem exemplos de `map()`, `find()` e `reduce()` com a tabela de tarifas.
