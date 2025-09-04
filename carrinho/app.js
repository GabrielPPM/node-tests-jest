import Cart from "./cart.js";
import Item from "./item.js";

const cart = new Cart();

cart.add(new Item("Maçã", 1, 3));
cart.add(new Item("Banana", 1.4, 5));
cart.add(new Item("Melancia", 2, 1));
cart.add(new Item("Uva", 4.3, 2));
cart.add(new Item("Açaí", 3, 5));

cart.addFreight(15);

cart.calculaSubtotal();

cart.checkout();

console.log(cart);
