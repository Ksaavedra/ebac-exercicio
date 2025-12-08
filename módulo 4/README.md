# Módulo 4 - Calculadora de IMC

## 📋 Descrição

Este módulo contém uma **Calculadora de IMC (Índice de Massa Corporal)** desenvolvida com HTML, CSS e JavaScript puro. A aplicação permite que o usuário calcule seu IMC informando peso e altura, e recebe uma classificação sobre sua condição física.

## 🎯 Funcionalidades

-  Calcula o IMC com base no peso e altura informados
-  Exibe a classificação do IMC de acordo com os padrões da OMS:
   -  Abaixo do peso (IMC < 18,5)
   -  Peso normal (IMC 18,5 - 24,9)
   -  Sobrepeso (IMC 25 - 29,9)
   -  Obesidade grau 1 (IMC 30 - 34,9)
   -  Obesidade grau 2 (IMC 35 - 39,9)
   -  Obesidade grau 3 (IMC ≥ 40)
-  Validação de campos obrigatórios
-  Botão para limpar o formulário

## 🛠️ Tecnologias Utilizadas

-  **HTML5** - Estrutura da página
-  **CSS3** - Estilização e layout responsivo
-  **JavaScript (Vanilla)** - Lógica de cálculo e manipulação do DOM

## 📁 Estrutura de Arquivos

```
módulo 4/
├── formulario.html    # Página principal HTML
├── estilo.css         # Estilos da aplicação
├── script.js          # Lógica JavaScript
└── README.md          # Documentação
```

## 🚀 Como Usar

1. Abra o arquivo `formulario.html` em um navegador web
2. Preencha o campo **Peso** em quilogramas (ex: 70)
3. Preencha o campo **Altura** em metros (ex: 1.75)
4. Clique no botão **Calcular**
5. Veja o resultado do seu IMC e a classificação

### Exemplo de Uso

-  Peso: 70 kg
-  Altura: 1.75 m
-  Resultado: IMC = 22.86 (Peso normal)

## 💡 Fórmula do IMC

```
IMC = Peso (kg) / (Altura (m))²
```

## 🎨 Características de Design

-  Interface limpa e moderna
-  Layout centralizado e responsivo
-  Cores suaves com efeitos de hover
-  Design minimalista e fácil de usar

## ✨ Melhorias Futuras

-  Adicionar gráficos visuais para o IMC
-  Implementar histórico de cálculos
-  Adicionar suporte para diferentes unidades de medida
-  Melhorar a responsividade para dispositivos móveis
