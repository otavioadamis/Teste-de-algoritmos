function mdc(numero1, numero2) {
    while (numero2 !== 0) {
      const temp = numero2;
      numero2 = numero1 % numero2;
      numero1 = temp;
    }
    const resultado = numero1;
    return resultado;
}

module.exports = mdc;