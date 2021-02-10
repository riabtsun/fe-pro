// Создать класс SuperMath с методом check(obj), параметр obj которого имеет свойства X, Y, znak.

// Пример объекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.

// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в классе), иначе -
//  запросить ввод новых данных через метод input() с класса SuperMath.

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает

class SuperMath {
  constructor() {
  }
  input() {
    switch (obj.znak) {
      case '+':
        alert(obj.X + obj.Y);
        break;
      case '-':
        alert(obj.X - obj.Y);
        break;
      case '/':
        alert(obj.X / obj.Y);
        break;
      case '*':
        alert(obj.X * obj.Y);
        break;
      case '%':
        alert(obj.X % obj.Y);
        break;
      default:
        this.input;
        this.check(this.obj);
    }
  }
  check(obj, action) {
    action = confirm(`Do you want ${obj.znak} with X = ${obj.X} and Y = ${obj.Y}`);
    if (!action) {
      obj.znak = prompt('Введите znak(возможные варианты znak =>  `+ - / * %`): ');
    }
  }
}

obj = {
  X: 12, Y: 3, znak: '/'
}

p = new SuperMath();

p.check(obj)
p.input()
