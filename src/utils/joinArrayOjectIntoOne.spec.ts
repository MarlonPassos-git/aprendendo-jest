import { joinArrayOjectIntoOne } from './joinArrayOjectIntoOne'

describe('Junção de objetos', () => {
  it('deve juntar os 3 objeto em apenas 1 ', () => {
    const arrayOfObjects: Record<string, string | string[]>[] = [
      {
        nome: 'marlon',
      },
      {
        idade: '23',
      },
      {
        color: 'blue',
      },
    ]

    const fullObjet = {
      nome: 'marlon',
      idade: '23',
      color: 'blue',
    }

    expect(joinArrayOjectIntoOne(arrayOfObjects)).toEqual(fullObjet)
    
  })
})