try {
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Você deve fornecer dois números válidos.");
    }
    const resultado = numero1 / numero2;


    if (!isFinite(resultado)) {
                throw new Error("A operação resulta em um valor indefinido ou infinito.");
    }

    console.log("O resultado da operação é:", resultado);
} catch (erro) {
    console.error("Ocorreu um erro:", erro.message);
} finally {
    console.log("Fim do programa.");
}
