import money from 'dinero.js'

money.defaultCurrency = 'BRL'
money.defaultPrecision = 2

type IProduct = {
  title: string
  price: number
}

type IItem = {
	product: IProduct
	quantity: number
}

/**
 * Componente responsavel por controlar todo o fuxo do carrinho de compras
 */
export class Cart {
	private totalItems: number = 0
	private listProducts: IItem[] = []
	private totalPrice: money.Dinero = money({ amount: 0 })
	private totalProduct: number = 0

	public getTotalItens(): number {
		return this.totalItems
	}

	/**
	 * Remove product from cart if it exists
	 */
	public remove(item: IProduct): void {
		const positionArray = this.itemPosition(item)

		if (positionArray !== -1) {
			this.listProducts.splice(positionArray, 1)
		}

		this.updateAll()
	}

	public checkout(): void {
		this.listProducts = []
		this.totalItems = 0
		this.totalPrice = money({ amount: 0 })
		this.totalProduct = 0
	}

	public summary() {
		const { totalItems, totalPrice, totalProduct, listProducts } = this

		return {
			items: totalItems,
			price: totalPrice.getAmount(),
			produts: {
				total: totalProduct,
				list: listProducts,
			},
		}
	}

	/**
	 * add product to cart
	 */
	public add(item: IItem): void {
		const positionArray = this.itemPosition(item.product)
		const itemExists = positionArray !== -1

		if (itemExists) {
			this.listProducts[positionArray].quantity = item.quantity
		} else {
			this.listProducts.push(item)
		}
		this.updateAll()
	}
	/**
	 * return all itens in cart
	 */
	public getListProducts(): IItem[] {
		return this.listProducts
	}
	/**
	 * return the total price of all product
	 */
	public getTotalPrice(): number {
		return this.totalPrice.getAmount()
	}

	/**
	 * return the total quantity of all product
	 * @example
	 * if add an product with 2 unities and another
	 * with 3 unities, the total quantity will be 5
	 */
	public getTotalProducts(): number {
		return this.totalProduct
	}
	/**
	 * return the total of different products in the cart
	 */
	private updateTotalPrice(): this {
		const totalPrice = this.listProducts.reduce(
			(acc, { product: { price }, quantity }) => {
				return acc.add(money({ amount: price * quantity }))
			},
			money({ amount: 0 }),
		)

		this.totalPrice = totalPrice

		return this
	}

	private updateTotalItems(): this {
		this.totalItems = this.listProducts.length

		return this
	}

	private updateTotalProducts(): this {
		const totalProducts = this.listProducts.reduce((acc, { quantity }) => {
			return acc + quantity
		}, 0)

		this.totalProduct = totalProducts

		return this
	}

	private itemPosition(item: IProduct): number {
		return this.listProducts.findIndex(({ product: { title } }) => {
			return title === item.title
		})
	}

	private updateAll(): void {
		this.updateTotalItems().updateTotalPrice().updateTotalProducts()
	}
}
