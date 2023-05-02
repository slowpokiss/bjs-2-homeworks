// 1st task
function parseCount(num) {
  if (parseFloat(num) === NaN) {
  throw new Err("Невалидное значение");
  }
  return parseFloat(num)

}
function validateCount(params) {
  try {
    parseCount(num)
  } catch (err) {
    return err;
  }
}


// 2nd task
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimetr() {
    return this.a + this.b + this.c
  }

  get area() {
    return Math.sqrt((this.perimetr / 2) * (this.perimetr / 2 - this.a) * (this.perimetr / 2 - this.b) * (this.perimetr / 2 - this.c)).toFixed(3)
  }
}

function getTriangle(a,b,c) {
  try {
    return new getTriangle(a,b,c) 
  } catch(err) {
    return {
      get area () {
        return "Ошибка! Треугольник не существует";
      },
  
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}
