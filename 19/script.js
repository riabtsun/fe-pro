let kitchenProducts = [
  {
    type: 'grater',
    price: 10
  },
  {
    type: 'pastry-bag',
    price: 25
  },
  {
    type: 'scale',
    price: 5
  },
  {
    type: 'whisk',
    price: 15
  }
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000]
  },
  {
    type: 'laptop',
    price: [50, 1500]
  },
  {
    type: 'smartphone',
    price: [80, 2000]
  },
  {
    type: 'tablet',
    price: [20, 1300]
  }
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100
  },
  {
    type: 'eyeshadow',
    price: 50
  },
  {
    type: 'lipstick',
    price: 80
  },
  {
    type: 'nail-polish',
    price: 200
  },
  {
    type: 'perfume',
    price: 300,
  }
];

let kitchen = {
  category: 'kitchen',
  render() {
    let itemImg = ``;
    if (this.icon) {
      itemImg = `<img src='images/${this.category}/${this.type}.svg' alt='${this.type}' height='30' >`
    }
    document.write(`<div class='category'><div class='box'>${itemImg} <p>Name: ${this.type}</p> <p>price: $${this.price}</p></div></div>`)
    return `Category ${this.category}`;
  }
};
let devices = {
  category: 'devices',
  render() {
    let itemImg = ``;
    if (this.icon) {
      itemImg = `<img src='images/${this.category}/${this.type}.svg' alt='${this.type}' height='30' >`
    }
    document.write(`<div class='category'><div class='box'>${itemImg} <p>Name: ${this.type}</p> <p>price: $${this.price.join('-')}</p></div></div>`)
    return `Category ${this.category} ${itemImg}`;
  }
};
let cosmetics = {
  category: 'cosmetics',
  render() {
    let itemImg = ``;
    if (this.icon) {
      itemImg = `<img src='images/${this.category}/${this.type}.svg' alt='${this.type}' height='30' >`
    }
    document.write(`<div class='category'><div class='box'>${itemImg} <p>Name: ${this.type}</p> <p>price: $${this.price}</p></div></div>`)
    return `Category ${this.category} ${itemImg}`;
  }
};

function addPrototype(arr, proto) {
  let arrayProto = arr.map(function (category) {
    let newCategory = Object.create(proto);
    for (let key in category) {
      newCategory[key] = category[key]
    }
    newCategory.icon = 'true';
    return newCategory
  })
  return arrayProto
}

let kitchenProductsProto = addPrototype(kitchenProducts, kitchen);
let devicesProto = addPrototype(devicesProducts, devices);
let cosmeticsProto = addPrototype(cosmeticsProducts, cosmetics);

kitchenProductsProto.forEach(function (item) {
  console.log(item.render())
})
devicesProto.forEach(function (item) {
  console.log(item.render())
})
cosmeticsProto.forEach(function (item) {
  console.log(item.render())
})
