type IProduct = {
  title: string
  price: number
}

type IItem = {
	product: IProduct
	quantity: number
}

export class Cart {
	private totalItems: number = 0
	private listProducts: IItem[] = []
	private totalPrice: number = 0
	constructor() {}

	public getTotalItens(): number {
		return this.totalItems
	}

	public add(product: IItem): void {
		++this.totalItems
		this.listProducts.push(product)
		this.updateTotalPrice()
	}

	public getListProducts(): IItem[] {
		return this.listProducts
	}

	public getTotalPrice(): number {
		return this.totalPrice
	}

	private updateTotalPrice(): void {
		const totalPrice = this.listProducts.reduce((tot, { product: { price }, quantity }) => {
			return (price * quantity) + tot
		}, 0)

		this.totalPrice = totalPrice
	}
}
