import { Cart } from './cart'

describe('cart1', () => {
  let cart: Cart

  beforeEach(() => {
    cart = new Cart()
  })
  
  it('should return 0 when getTotal() is executed in a newly created ', () => {
    expect(cart.getTotalItens()).toEqual(0)
  })

  it('should empty list when started', () => {
    expect(cart.getListProducts()).toEqual([])
  })

  it('should be able to add an item to cart', () => {
		const item = {
			product: {
				title: 'Product 1',
				price: 1000,
			},
			quantity: 2,
		}

		cart.add(item)

    expect(cart.getListProducts()).toEqual([item])
    expect(cart.getTotalItens()).toEqual(2)
    expect(cart.getTotalPrice()).toEqual(2000)
	})

})
// ssas 