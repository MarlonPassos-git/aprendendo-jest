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

	constructor() {}

	public getTotalItens(): number {
		return this.totalItems
	}

	public add(product: IItem): void {
		++this.totalItems
		this.listProducts.push(product)
	}

	public getListProducts(): IItem[] {
		return this.listProducts
	}
}
