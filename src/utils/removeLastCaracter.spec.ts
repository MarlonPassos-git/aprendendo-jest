import { removeLastCaracter } from './removeLastCaracter';

describe('Deve remover o utimo caracterer de uma string', () => {
  it('para "marlonpassos" deve me retornar "marlonpasso" ', () => {
    const fullText = 'marlonpassos';
    const textWithoutLastLetter = 'marlonpasso';

    expect(removeLastCaracter(fullText)).toBe(textWithoutLastLetter);
  });

  it('não deve ser iguais', () => {
    const fullText = 'marlonpass';

    expect(removeLastCaracter(fullText)).not.toBe(fullText);
  });
});
