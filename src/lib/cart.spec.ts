import { Cart } from './cart'

describe('cart1', () => {
  it('should return 0 when getTotal() is executed in a newly created ', () => {
    const cart = new Cart()

    expect(cart.getTotalItens()).toEqual(0)
  })

  it('should empty list when started', () => {
    const cart = new Cart()

    expect(cart.getListProducts()).toEqual([])
  })

  it('should be able to add an item to cart', () => {
		const cart = new Cart()
		const item = {
			product: {
				title: 'Product 1',
				price: 1000,
			},
			quantity: 1,
		}

		cart.add(item)

    expect(cart.getListProducts()).toEqual([item])
    expect(cart.getTotalItens()).toEqual(1)
	})

})
// ssas 