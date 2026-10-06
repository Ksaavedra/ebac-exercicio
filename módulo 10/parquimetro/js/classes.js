import {
    normalizarEntrada,
    entradaVazia,
    converterValor,
    buscarTarifaInicial,
    buscarTarifaCompativel,
    calcularTroco,
    formatarMoeda
} from "./utils.js";

export const tarifasPadrao = [
    { valor: 1, tempo: "30 minutos" },
    { valor: 1.75, tempo: "60 minutos" },
    { valor: 3, tempo: "120 minutos" }
];

export class Parquimetro {
    constructor(valor) {
        const valorNormalizado = normalizarEntrada(valor);

        this.tarifas = tarifasPadrao;
        this.valorDigitado = valorNormalizado;
        this.valor = converterValor(valorNormalizado);
    }

    buscarTarifa() {
        return buscarTarifaCompativel(this.tarifas, this.valor);
    }

    calcularTempo() {
        const tarifa = this.buscarTarifa();

        if (tarifa === null) {
            return null;
        }

        return tarifa.tempo;
    }

    calcularTroco() {
        return calcularTroco(this.valor, this.buscarTarifa());
    }

    montarMensagem() {
        if (entradaVazia(this.valorDigitado)) {
            return "Nenhum valor foi digitado";
        }

        if (Number.isNaN(this.valor)) {
            return "Valor insuficiente";
        }

        if (this.tarifas.length === 0) {
            return "Preencha a tabela de tarifas em js/classes.js com os valores do enunciado.";
        }

        const tarifaInicial = buscarTarifaInicial(this.tarifas);

        if (tarifaInicial === null || this.valor < tarifaInicial.valor) {
            return "Valor insuficiente";
        }

        const tempo = this.calcularTempo();

        if (tempo === null) {
            return "Valor insuficiente";
        }

        return "Tempo de permanência: " + tempo + "\nTroco: " + formatarMoeda(this.calcularTroco());
    }
}
