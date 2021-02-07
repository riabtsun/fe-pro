
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
    let priceOfStuffing = 0
    if (Object.keys(this.stuffing).length > 0) {
      for (let key in this.stuffing) {
        let newPrice = this.stuffing[key]
        priceOfStuffing += newPrice.price
      }
    }
    let price = this.size.price + priceOfStuffing + this.dlc.price
    return price;
  }
  getKkal() {
    let priceOfkkal = 0
    if (Object.keys(this.stuffing).length > 0) {
      for (let key in this.stuffing) {
        let newPrice = this.stuffing[key]
        priceOfkkal += newPrice.calories
      }
    }
    let kkal = this.size.calories + priceOfkkal + this.dlc.calories;
    return kkal;
  }

  final() {
    return `Your price is ${this.getPrice()}$, and calories is ${this.getKkal()} kkal`
  }
}



let myNewBurger = new myBurger(HAMBURGER.small, [HAMBURGER.cheese, HAMBURGER.salad], HAMBURGER.mayo);
// console.log(myNewBurger);

console.log(myNewBurger.final());
