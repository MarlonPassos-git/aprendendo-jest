import { cart } from './cart'

describe('cart', () => {
  it('should return 0 when getTotal() is executed in a newly created ', () => {
    const cart = new Cart()

    expect(cart.getTotal()).toEqual(0)
  })
})
