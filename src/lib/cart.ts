import find  from 'lodash/fp/find'

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
	private totalPrice: number = 0
	private totalProduct: number = 0

	constructor() {}

	public getTotalItens(): number {
		return this.totalItems
	}

	public add(product: IItem): void {
		++this.totalItems
		this.listProducts.push(product)
		this.updateTotalPrice()
		this.updateTotalProducts()
	}

	public getListProducts(): IItem[] {
		return this.listProducts
	}

	public getTotalPrice(): number {
		return this.totalPrice
	}

	public getTotalProducts(): number {
		return this.totalProduct
	}

	private updateTotalPrice(): void {
		const totalPrice = this.listProducts.reduce(
			(tot, { product: { price }, quantity }) => {
				return price * quantity + tot
			},
			0,
		)

		this.totalPrice = totalPrice
	}

	private updateTotalProducts(): void { 
		const totalProducts =  this.listProducts.reduce((acc, { quantity }) => {
			return acc + quantity
		}, 0)

		this.totalProduct = totalProducts
	}
}
