class Item {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	getTotalItemValue() {
		return this.quantity * this.price;
	}
}

export default Item;
