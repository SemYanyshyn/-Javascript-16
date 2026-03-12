/*
Завдання 2: Поліморфізм: Клас "Shape"
            Базовий клас Shape з методом getArea().
            Наслідувані класи: Circle, Rectangle, Triangle.
            У кожному — своя реалізація getArea()
*/

class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    throw new Error("getArea must be implemented");
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  constructor(name, a, h) {
    super(name);
    this.a = a;
    this.h = h;
  }

  getArea() {
    return 0.5 * this.a * this.h;
  }
}

class Rectangle extends Shape {
  constructor(name, a, b) {
    super(name);
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a * this.b;
  }
}

const circle = new Circle("Circle", 4);
console.log(`${circle.name} area = ${circle.getArea()}`);

const triangle = new Triangle("Triangle", 5, 8);
console.log(`${triangle.name} area = ${triangle.getArea()}`);

const rectangle = new Rectangle("Rectangle", 5, 8);
console.log(`${rectangle.name} area = ${rectangle.getArea()}`);
