const calculator = require('./src/calculator');

function main() {
  const a = 10;
  const b = 5;

  // eslint-disable-next-line no-console
  console.log(`Soma: ${a} + ${b} = ${calculator.add(a, b)}`);
  // eslint-disable-next-line no-console
  console.log(`Subtração: ${a} - ${b} = ${calculator.subtract(a, b)}`);
  // eslint-disable-next-line no-console
  console.log(`Multiplicação: ${a} * ${b} = ${calculator.multiply(a, b)}`);
  // eslint-disable-next-line no-console
  console.log(`Divisão: ${a} / ${b} = ${calculator.divide(a, b)}`);
}

main(); 