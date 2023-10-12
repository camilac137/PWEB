
function encontrarMaior(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordenarCrescente(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    return numeros;
}