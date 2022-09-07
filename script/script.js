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
  ingresar: function (cantidad, dia) {
    this.saldo += cantidad;
    alert(`Ingresaste $${cantidad} a tu cuenta bancaria. ${dia}`);
    this.ingresos.push([dia, cantidad]);
  },
  extraer: function (cantidad, dia) {
    if (cantidad > this.saldo)
      alert("Fondos insuficientes para hacer la extracción.");
    else {
      alert(`Sacaste $${cantidad} de tu cuenta bancaria. ${dia}`);
      this.saldo -= cantidad;
      this.extraciones.push([dia, cantidad]);
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
    let d = new Date();
    let date =
      d.getDate() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();
    this.ingresar(dineroIngresado, date);
  },
  obtenerValorExtraccion: function () {
    let dineroExtraido = Number(document.getElementById("transaccion").value);
    let d = new Date();
    let date =
      d.getDate() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getFullYear() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();
    this.extraer(dineroExtraido, date);
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

// Ejercicio 4
let articulos = {
  productos: [],

  Creacion: function (codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.price = precio;
  },

  agregarProducto: function () {
    let cod = document.getElementById("codigo").value;
    let name = document.getElementById("nombre").value;
    let price = document.getElementById("precio").value;
    let newArticle = new this.Creacion(cod, name, price);
    this.productos.push(newArticle);
  },

  imprimeDatos: function(){
    console.log(this.productos)
  }
};

/* class Producto {
  constructor(codigo,nombre,precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos(){
    console.log(`Producto: ${this.nombre} - Código: ${this.codigo} - Precio: $${this.precio}`);
  }
}

function agregarProducto(){
  let stock = [];
  let cod = document.getElementById('codigo').value;
  let name = document.getElementById('nombre').value;
  let price = document.getElementById('precio').value;

  console.log(cod)
  console.log(name)
  console.log(price)

  const articulo = new Producto(cod,name,price);

  console.log(articulo)

  stock.push(articulo)

  console.log(stock)
}

let fideos = new Producto(101520, 'Arroz largo fino', 80);
let carne = new Producto(101522, 'Bola de lomo', 1200);
let manteca = new Producto(101530, 'Manteca x 200 g', 380);

console.log(fideos.imprimeDatos()) */
