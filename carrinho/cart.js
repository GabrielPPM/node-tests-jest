class Cart {
	constructor() {
		this.items = [];
		this.subtotal = null;
		this.freight = null;
		this.total = null;
	}

	add(item) {
		this.items.push(item);
	}

	addFreight(price) {
		this.freight = price;
	}

	calculeteTotal() {
		this.subtotal = this.items.reduce(
			(acum, item) => acum + item.getTotalItemValue(),
			0
		);
		return this.subtotal + this.freight;
	}

	checkout() {
		if (this.items.length === 0) {
			throw new Error("carrinho de compras vazio");
		}

		this.total = this.calculeteTotal();

		return {
			subtotal: this.subtotal,
			freight: this.freight,
			total: this.total,
		};
	}
}

export default Cart;
