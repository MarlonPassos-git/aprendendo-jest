import remove from 'lodash/remove'
import find  from 'lodash/find'

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

	public getTotalItens(): number {
		return this.totalItems
	}

	public add(item: IItem): void {
		
		const positionArray = this.itemPosition(item)
		const itemExists = positionArray !== -1
		
		if (itemExists) {
			this.listProducts[positionArray].quantity = item.quantity
		} else {
			this.listProducts.push(item)
		}
		this.updateAll()
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

	private updateTotalPrice(): this {
		const totalPrice = this.listProducts.reduce(
			(tot, { product: { price }, quantity }) => {
				return price * quantity + tot
			},
			0,
		)

		this.totalPrice = totalPrice

		return this
	}

	private updateTotalItems(): this {
		this.totalItems = this.listProducts.length

		return this
	}

	private updateTotalProducts(): this { 
		const totalProducts =  this.listProducts.reduce((acc, { quantity }) => {
			return acc + quantity
		}, 0)

		this.totalProduct = totalProducts

		return this
	}

	private itemPosition(item: IItem): number {
		return this.listProducts.findIndex(({ product: { title } }) => {
			return title === item.product.title
		})
	}	

	private updateAll(): void {
		this.updateTotalItems()
			.updateTotalPrice()
			.updateTotalProducts()
	}

	public remove(item: IItem): void {
		const positionArray = this.itemPosition(item)

		if (positionArray !== -1) {
			this.listProducts.splice(positionArray, 1)
		}

		this.updateAll()
	}
}
