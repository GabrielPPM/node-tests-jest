/* eslint-disable no-undef */
import Cart from "../cart.js";
import Item from "../item.js";

describe("Teste do carrinho", () => {
	it("Deve inicializar vazio", () => {
		const cart = new Cart();

		expect(cart.subtotal).toBeNull();
	});

	it("Deve ter items", () => {
		const item = new Item("Banana", 2, 3);
		const item2 = new Item("Maça", 0.5, 1);
		const cart = new Cart();
		cart.add(item);
		cart.add(item2);

		expect(typeof cart).toBe("object");
		expect(cart.items).toContain(item);
		expect(cart.items).toContain(item2);
	});

	it('Deve ter a propriedade "total" na inicialização', () => {
		const cart = new Cart();

		expect(cart).toHaveProperty("total");
	});

	it("Deve lançar erro, ao finalizar compra com carrinho vazio", () => {
		function encompassesCartError() {
			const cart = new Cart();
			cart.checkout();
		}

		expect(() => encompassesCartError()).toThrow(
			"carrinho de compras vazio"
		);
	});
	it("Deve adicionar o freight", () => {
		const cart = new Cart();
		cart.addFreight(30);

		expect(cart.freight).toBe(30);
	});
	it("Deve finalizar compra", () => {
		const item = new Item("Banana", 2, 5);
		const item2 = new Item("Mel", 1, 5);
		const cart = new Cart();
		cart.add(item);
		cart.add(item2);
		cart.freight = 10;

		expect(cart.checkout()).toStrictEqual({
			subtotal: 15,
			freight: 10,
			total: 25,
		});
	});
	
});
