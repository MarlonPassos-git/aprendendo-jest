import { Cart } from './cart'

describe('cart1', () => {
  let cart: Cart
  const item1 = {
		product: {
			title: 'Product 1',
			price: 1000,
		},
		quantity: 2,
	}

  const item2 = {
		product: {
			title: 'Product 2',
			price: 12345,
		},
		quantity: 3,
	}

  const item3 = {
		product: {
			title: 'Product ',
			price: 5000,
		},
		quantity: 10,
	}
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
		cart.add(item1)

    expect(cart.getListProducts()).toEqual([item1])
    expect(cart.getTotalItens()).toEqual(1)
    expect(cart.getTotalPrice()).toEqual(2000)
    expect(cart.getTotalProducts()).toEqual(2)

  })
  
  it('should be able to add two products at the same time', () => {
    cart.add(item1)
    cart.add(item2)

    expect(cart.getListProducts()).toEqual([item1, item2])
    expect(cart.getTotalItens()).toEqual(2)
    expect(cart.getTotalPrice()).toEqual(12345 * 3 + 1000 * 2)
    expect(cart.getTotalProducts()).toEqual(5)

  })

  it('if the item exists in the cart and is re-added, the quantity of the last addition must remain', () => {
    const item1Plus = {
			product: {
				title: 'Product 1',
				price: 1000,
			},
			quantity: 5,
		}
    
    cart.add(item1)
    cart.add(item1Plus)
    
    expect(cart.getListProducts()).toEqual([item1Plus])

  })

  it('should keeo the values consistent when removing a product', () => {
    cart.add(item1)
    cart.add(item2)
    cart.add(item3)
    cart.remove(item1)

    expect(cart.getListProducts()).toEqual([item2])
    expect(cart.getTotalItens()).toEqual(2)
    expect(cart.getTotalPrice()).toEqual(12345 * 3 + 5000 * 10)
    expect(cart.getTotalProducts()).toEqual(13)
  })


})
// ssas 