
const HAMBURGER = {

  small: {
    price: 5,
    calories: 20
  },

  big: {
    price: 10,
    calories: 40
  },

  cheese: {
    price: 1,
    calories: 20
  },

  salad: {
    price: 2,
    calories: 5
  },

  potato: {
    price: 1.5,
    calories: 10
  },

  spice: {
    price: 1.5,
    calories: 0
  },

  mayo: {
    price: 2,
    calories: 5
  }

}

class myBurger {
  constructor(size, stuffing, dlc) {
    this.size = size;
    this.stuffing = stuffing;
    this.dlc = dlc;
  }

  getPrice() {
    let priceStuff = this.stuffing[0].price + this.stuffing[1].price
    let price = this.size.price + priceStuff + this.dlc.price
    return price;
  }
  getKkal() {
    let kkalStuff = this.stuffing[0].calories + this.stuffing[1].calories
    let kkal = this.size.calories + kkalStuff + this.dlc.calories;
    return kkal;
  }

  final() {
    return `Your price is ${this.getPrice()}$, and calories is ${this.getKkal()} kkal`
  }
}



let myNewBurger = new myBurger(HAMBURGER.small, [HAMBURGER.cheese, HAMBURGER.salad], HAMBURGER.mayo);
// console.log(myNewBurger);

console.log(myNewBurger.final());