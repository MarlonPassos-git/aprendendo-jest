import { Cart } from './cart'

describe('cart1', () => {
  it('should return 0 when getTotal() is executed in a newly created ', () => {
    const cart = new Cart()

    expect(cart.getTotal()).toEqual(0)
  })

  it('should empty list when started', () => {
    const cart = new Cart()

    expect(cart.getListProducts()).toEqual([])
  })

})
// ssas 