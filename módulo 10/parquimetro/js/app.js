import { Parquimetro, tarifasPadrao } from "./classes.js";
import { listarPrecos, buscarTarifaInicial, buscarTarifaCompativel } from "./utils.js";

console.log("map() - preços das tarifas:", listarPrecos(tarifasPadrao));
console.log("find() - tarifa inicial:", buscarTarifaInicial(tarifasPadrao));
console.log("reduce() - tarifa para R$ 5,00:", buscarTarifaCompativel(tarifasPadrao, 5));

const campoValor = document.getElementById("valor");
const resultado = document.getElementById("resultado");
const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", function () {
    const parquimetro = new Parquimetro(campoValor.value);

    resultado.textContent = parquimetro.montarMensagem();
});
