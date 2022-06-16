import { frasezona } from './baguncinha'



describe('Baguncinha', () => {
  it('should conter um texto', () => {
    expect(frasezona()).toContain('Baguncinha')
  })
  
  it('funciona com um objeto ?', () => {
    expect({
      nome: 'Baguncinha',
      idade: '13212a',
    }).toContain({nome: 'Baguncinha'})
  })

  fit('funciona com um objeto ?', () => {
		expect(['marlon', 'felipe', 'passos']).toContain('felipe')
	})
})
 