// Ejercicio 1

let auto = {
  marca: "Ford",
  modelo: "Focus",
  encendido: false,
  onOff: function () {
    if (this.encendido) {
      alert("El motor está encendido. Apagando motor.");
      this.encendido = false;
    } else {
      alert("El motor está apagado. Encendiendo motor.");
      this.encendido = true;
    }
  },
};

// Ejercicio 2 -- En realidad no necesito llamar a la funcion extraer o ingresar ya que los valores entran del HTML pero es para seguir la consigna del tp.

let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresos: [],
  extraciones: [],
  ingresar: function (cantidad,dia) {
    this.saldo += cantidad;
    alert(`Ingresaste $${cantidad} a tu cuenta bancaria. ${dia}`);
    this.ingresos.push(dia)
  },
  extraer: function (cantidad,dia) {
    if (cantidad > this.saldo)
      alert("Fondos insuficientes para hacer la extracción.");
    else {
      alert(`Sacaste $${cantidad} de tu cuenta bancaria. ${dia}`);
      this.saldo -= cantidad;
      this.extraciones.push(dia);
    }
  },
  informar: function () {
    alert(`Los datos de tu cuenta bancaria son:
        Nombre del titular: ${this.titular}
        Saldo en la cuenta: ${this.saldo}
        Movimientos de ingresos: ${this.ingresos}
        Movimientos de extracciones: ${this.extraciones}`);
  },
  obtenerValorIngreso: function () {
    let dineroIngresado = Number(document.getElementById("transaccion").value);
    let d = new Date;
    let date = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    this.ingresar(dineroIngresado,date);
  },
  obtenerValorExtraccion: function () {
    let dineroExtraido = Number(document.getElementById("transaccion").value);
    let d = new Date;
    let date = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    this.extraer(dineroExtraido,date);
  },
};

// Ejercicio 3

class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  mostrarProp() {
    return `Altura: ${this.altura} cm
Base: ${this.base} cm`;
  }
  calcArea() {
    return `El área del rectángulo es de ${this.altura * this.base} cm2`;
  }
}

function obtenerRectangulo() {
  let param1 = prompt("Ingresar altura");
  let param2 = prompt("Ingresar base");
  const rectangulo1 = new Rectangulo(param2, param1);
  console.log(rectangulo1.mostrarProp());
  console.log(rectangulo1.calcArea());
}
