document.getElementById('formIMC').addEventListener('submit', function (e) {
   e.preventDefault();

   const peso = parseFloat(document.getElementById('peso').value);
   const altura = parseFloat(document.getElementById('altura').value);

   if (!peso || !altura || altura === 0) {
      alert('Preencha corretamente os campos!');
      return;
   }

   const imc = peso / (altura * altura);
   document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(
      2
   )}`;

   let classificacao = '';

   if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
   } else if (imc < 24.9) {
      classificacao = 'Peso normal';
   } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
   } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
   } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
   } else {
      classificacao = 'Obesidade grau 3';
   }

   document.getElementById('classificacao').textContent = classificacao;
});
