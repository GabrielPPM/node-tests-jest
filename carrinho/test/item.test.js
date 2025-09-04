/* eslint-disable no-undef */
import Item from "../item.js";

describe("Items test", () => {
	it("Deve conter 3 campos: name, value e quantity", () => {
		const item = new Item("Beterraba", 2.5, 10);
        
		expect(item.name).toBe("Beterraba");
		expect(item.price).toBe(2.5);
		expect(item.quantity).toBe(10);
	});
    it("Deve retornar o valor total do item", () => {
        const item = new Item("Batata", 0.1, 3);
        expect(item.getTotalItemValue()).toBeCloseTo(0.3)
    })
});
