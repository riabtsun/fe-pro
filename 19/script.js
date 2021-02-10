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


function items(category) {
  this.category = category;
}

items.prototype.render = function () {
  let itemImg = ``;
  if (this.icon) {
    itemImg = `<img src='images/${this.category}/${this.type}.svg' alt='${this.type}' height='30' >`
  }
  return `<div class='box'>${itemImg} <p class='text'>Name:  <b>${this.type}</b></p> <p> Price: <b>$${this.price}</b></p></div>`
}

let kitchen = new items('kitchen');
let devices = {
  category: 'devices',
  render() {
    let itemImg = ``;
    if (this.icon) {
      itemImg = `<img src='images/${this.category}/${this.type}.svg' alt='${this.type}' height='30' >`
    }
    return `<div class='category'><div class='box'>${itemImg} <p class='text'>Name: <b>${this.type}</b></p> <p class='text'>Price: <b>$${this.price.join('-')}</b></p></div></div>`;
  }
};
let cosmetics = new items('cosmetics');

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

function renderItems(arr) {
  return arr.map(function (item) {
    return item.render()
  })
}

function renderCategory(arr) {
  document.write(`<h2>Category: ${arr[0].category}</h2><div class='item-category' >
   <br> ${renderItems(arr).join('')}</div>`)
}

renderCategory(kitchenProductsProto)
renderCategory(devicesProto)
renderCategory(cosmeticsProto)
