type IProduct = {
  title: string
  price: number
}

export class Cart {
	private totalItems: number = 0
	private listProducts: IProduct[] = []

	constructor() {
	}

	public getTotal(): number {
		return this.totalItems
	}

	public add(product: IProduct): void {
		this.totalItems += product.price
		this.listProducts.push(product)
  }
  
  public getListProducts(): IProduct[] {
    return this.listProducts
  }
}
