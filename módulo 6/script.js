(() => {
   'use strict';

   const MIN = 1;
   const MAX = 100;
   const MAX_TENTATIVAS = 10;

   const inputChute = document.getElementById('chute');
   const btnChutar = document.getElementById('btnChutar');
   const btnReiniciar = document.getElementById('btnReiniciar');
   const dicaEl = document.getElementById('dica');
   const resultadoEl = document.getElementById('resultado');
   const tentativasEl = document.getElementById('tentativas');

   let numeroSecreto = gerarNumeroSecreto();
   let tentativasRestantes = MAX_TENTATIVAS;
   let jogoEncerrado = false;

   function gerarNumeroSecreto() {
      return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
   }

   function setDica(texto) {
      dicaEl.textContent = texto;
   }

   function setResultado(texto) {
      resultadoEl.textContent = texto;
   }

   function atualizarTentativas() {
      tentativasEl.textContent = `Tentativas restantes: ${tentativasRestantes}`;
   }

   function setEstadoJogoEncerrado(encerrado) {
      jogoEncerrado = encerrado;
      btnChutar.disabled = encerrado;
      inputChute.disabled = encerrado;
      btnReiniciar.hidden = !encerrado;
   }

   function encerrarJogo(mensagemFinal) {
      setResultado(mensagemFinal);
      setEstadoJogoEncerrado(true);
   }

   function dicaPorChute(chute) {
      if (chute > numeroSecreto) return 'O número secreto é menor.';
      return 'O número secreto é maior.';
   }

   function validarChute(chute) {
      if (!Number.isInteger(chute)) return false;
      if (chute < MIN || chute > MAX) return false;
      return true;
   }

   function onChutar() {
      if (jogoEncerrado) return;

      const valor = inputChute.value.trim();
      const chute = Number.parseInt(valor, 10);

      if (!validarChute(chute)) {
         setResultado(`Digite um número inteiro entre ${MIN} e ${MAX}.`);
         inputChute.focus();
         inputChute.select();
         return;
      }

      tentativasRestantes -= 1;

      if (chute === numeroSecreto) {
         setDica('');
         atualizarTentativas();
         encerrarJogo(`Você acertou! O número secreto era ${numeroSecreto}.`);
         return;
      }

      setDica(dicaPorChute(chute));

      if (tentativasRestantes <= 0) {
         atualizarTentativas();
         encerrarJogo(`Você perdeu! O número secreto era ${numeroSecreto}.`);
         return;
      }

      setResultado('Tente novamente.');
      atualizarTentativas();
      inputChute.focus();
      inputChute.select();
   }

   function reiniciar() {
      numeroSecreto = gerarNumeroSecreto();
      tentativasRestantes = MAX_TENTATIVAS;
      setDica('');
      setResultado('Novo jogo iniciado. Boa sorte!');
      atualizarTentativas();
      setEstadoJogoEncerrado(false);
      inputChute.value = '';
      inputChute.focus();
   }

   btnChutar.addEventListener('click', onChutar);
   btnReiniciar.addEventListener('click', reiniciar);
   inputChute.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') onChutar();
   });

   setResultado('Digite um número e clique em “Chutar”.');
   atualizarTentativas();
   inputChute.focus();
})();
