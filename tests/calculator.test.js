const calculator = require('../src/calculator');

describe('Testes da Calculadora', () => {
  test('Soma dois números corretamente', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('Subtrai dois números corretamente', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(0, 5)).toBe(-5);
  });

  test('Multiplica dois números corretamente', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 1)).toBe(-1);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test('Divide dois números corretamente', () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(calculator.divide(0, 5)).toBe(0);
  });

  test('Lança erro ao dividir por zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Divisão por zero não é permitida');
  });
}); 