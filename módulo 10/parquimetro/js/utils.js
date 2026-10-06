export function normalizarEntrada(valor) {
    if (typeof valor === "string") {
        return valor.trim();
    }

    return valor;
}

export function entradaVazia(valor) {
    return valor === "" || valor === null || typeof valor === "undefined";
}

export function converterValor(valor) {
    if (entradaVazia(valor)) {
        return NaN;
    }

    return Number(valor);
}

export function listarPrecos(tarifas) {
    return tarifas.map(function (tarifa) {
        return tarifa.valor;
    });
}

export function menorPreco(tarifas) {
    const precos = listarPrecos(tarifas);

    if (precos.length === 0) {
        return null;
    }

    return precos.reduce(function (menor, preco) {
        return preco < menor ? preco : menor;
    });
}

export function buscarTarifaInicial(tarifas) {
    const preco = menorPreco(tarifas);

    return tarifas.find(function (tarifa) {
        return tarifa.valor === preco;
    }) || null;
}

export function buscarTarifaCompativel(tarifas, valor) {
    return tarifas.reduce(function (escolhida, tarifa) {
        const cabeNoValor = valor >= tarifa.valor;
        const eMaiorFaixa = escolhida === null || tarifa.valor > escolhida.valor;

        if (cabeNoValor && eMaiorFaixa) {
            return tarifa;
        }

        return escolhida;
    }, null);
}

export function calcularTroco(valor, tarifa) {
    if (tarifa === null) {
        return 0;
    }

    const troco = valor - tarifa.valor;

    if (troco < 0) {
        return 0;
    }

    return Math.round(troco * 100) / 100;
}

export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
