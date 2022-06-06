import { transformStringWithSymbolEqualtoObject } from './transformStringWithSymbolEqualtoObject'

describe('transformação basica', () => {
  it('deve retorna um objeto valido ', () => {
    const input = 'nome=marlon'
    const obj = {nome: 'marlon'}
    
    expect(transformStringWithSymbolEqualtoObject(input)).toEqual(obj)
  })
})