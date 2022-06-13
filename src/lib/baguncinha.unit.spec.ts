import { frasezona } from './baguncinha'



describe('Baguncinha', () => {
  it('should conter um texto', () => {
    expect(frasezona()).toContain('Baguncinha')
  })
})
 