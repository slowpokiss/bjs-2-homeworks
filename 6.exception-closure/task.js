// 1st task
function parseCount(num) {
  const a = parseFloat(num);
  if (a.isNan()) {
    throw new Error("Невалидное значение");
  }
  return a;
}

function validateCount(params) {
  try {
    return parseCount(params)
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

    if ((a + b < c) || (a + c < b) || (b + c < a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimetr() {
    return this.a + this.b + this.c
  }

  get area() {
    const polyper = this.perimetr / 2;
    return Math.sqrt(polyper * (polyper - this.a) * (polyper - this.b) * (polyper - this.c)).toFixed(3)
  }
}

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c) 
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
