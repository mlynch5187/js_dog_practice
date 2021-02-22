class Dog {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = 'Black';
    } else {
        this.color = color;
    }
  }

  isBlack() {
    if (this.color !== 'Black') {
      return false;
    }
  }

  Bark() {
    return 'Woof!'; {
    }
  }

  Says(message)  {
    return `**;* ${message} *;**`;
  }
}

module.exports = Dog
