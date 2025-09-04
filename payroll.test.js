import {sumOvertimeHours, discount} from "./index.js";

describe("payroll tests", () => {
	it("SumOvertimeHours", () => {
		const expected = 2500;
		const returned = sumOvertimeHours(2000, 500);

		expect(returned).toBe(expected);
	});

	it("discount", () => {
		const expected = 1700;
		const returned = discount(2000, 300);

		expect(returned).toBe(expected);
	});
});
