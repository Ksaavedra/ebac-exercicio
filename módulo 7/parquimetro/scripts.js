class Parquimetro {
   tarifas = [
      { valor: 1, tempo: 'cole o tempo desta faixa' },
      { valor: 2, tempo: 'cole o tempo desta faixa' },
   ];

   // Constructor: recebe o valor digitado e guarda na propriedade valor
   constructor(valor) {
      this.valor = Number(valor);
   }

   // Método: escolhe a maior faixa cujo preço o valor informado consegue pagar
   buscarTarifa() {
      let tarifaEscolhida = null;

      for (let i = 0; i < this.tarifas.length; i++) {
         const tarifa = this.tarifas[i];

         if (this.valor >= tarifa.valor) {
            if (
               tarifaEscolhida === null ||
               tarifa.valor > tarifaEscolhida.valor
            ) {
               tarifaEscolhida = tarifa;
            }
         }
      }

      return tarifaEscolhida;
   }

   // Método: devolve o tempo de permanência da faixa encontrada
   calcularTempo() {
      const tarifa = this.buscarTarifa();

      if (tarifa === null) {
         return null;
      }

      return tarifa.tempo;
   }

   // Método: devolve o que sobrou depois de pagar a faixa utilizada
   calcularTroco() {
      const tarifa = this.buscarTarifa();

      if (tarifa === null) {
         return 0;
      }

      const troco = this.valor - tarifa.valor;

      if (troco < 0) {
         return 0;
      }

      return troco;
   }

   // Método: monta o texto que aparece na tela
   montarMensagem() {
      if (Number.isNaN(this.valor) || this.valor < 1) {
         return 'Valor insuficiente';
      }

      if (this.tarifas.length === 0) {
         return 'Preencha a tabela de tarifas no scripts.js com os valores do enunciado.';
      }

      const tempo = this.calcularTempo();

      if (tempo === null) {
         return 'Valor insuficiente';
      }

      const trocoFormatado = this.calcularTroco().toLocaleString('pt-BR', {
         style: 'currency',
         currency: 'BRL',
      });

      return 'Tempo de permanência: ' + tempo + '\nTroco: ' + trocoFormatado;
   }

   // Método: escreve a mensagem dentro da div de resultado
   exibir(elementoResultado) {
      elementoResultado.textContent = this.montarMensagem();
   }
}

// Manipulação do DOM: o objeto só nasce quando o botão Calcular é clicado
document.getElementById('calcular').addEventListener('click', function () {
   const valorDigitado = document.getElementById('valor').value;
   const resultado = document.getElementById('resultado');

   // Objeto criado com o valor informado pelo usuário
   const parquimetro = new Parquimetro(valorDigitado);

   parquimetro.exibir(resultado);
});
