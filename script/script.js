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

// Ejercicio 4

class Persona{
  constructor(nombre,apellido,edad,sexo,peso,altura,anioNac){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = 0;
    this.sexo = sexo;
    this. peso = peso;
    this.altura = altura;
    this.anioNac = anioNac;
    this.generaciones = [
      {
        generacion: 'Generación Z',
        anioComienza: 1994,
        anioTermina: 2010,
        poblacion: 7800000,
        circunstancia: 'Expanción de internet.',
        rasgo: 'Irreverencia 😋'
      },
      {
        generacion: 'Generación Y - Millennials',
        anioComienza: 1981,
        anioTermina: 1993,
        poblacion: 7200000,
        circunstancia: 'Inicio de la digitalización.',
        rasgo: 'Frustación 😖'
      },
      {
        generacion: 'Generación X',
        anioComienza: 1969,
        anioTermina: 1980,
        poblacion: 9300000,
        circunstancia: 'Crisis del 73 y trasición española.',
        rasgo: 'Obseción por el éxito 😎'
      },
      {
        generacion: 'Baby Boom',
        anioComienza: 1949,
        anioTermina: 1968,
        poblacion: 12200000,
        circunstancia: 'Paz y explosición demográfica.',
        rasgo: 'Ambición 🤑'
      },
      {
        generacion: 'Silent Generation - Los niños de la posguerra',
        anioComienza: 1930,
        anioTermina: 1948,
        poblacion: 6300000,
        circunstancia: 'Conflictos Bélicos.',
        rasgo: 'Austeridad 😐'
      }
    ]
  }

  buscarGeneracion(anio){
    let found = this.generaciones.find(gen => anio >= gen.anioComienza && anio <= gen.anioTermina)
    return found
  }

  mostrarGeneracion(){
    let coleccion = this.buscarGeneracion(this.anioNac);
    console.log(`${this.nombre} ${this.apellido}:
Generación: ${coleccion.generacion}
Rasgo característico: ${coleccion.rasgo}.`)
  }

  esMayorDeEdad(){
    this.edad >= 18 ? console.log(`Tiene ${this.edad} años, es mayor de edad.`) : console.log(`Tiene ${this.edad} años, no es mayor de edad.`)
  }

  mostrarDatos(){
    console.log(`Nombre: ${this.nombre}
Apellido: ${this.apellido}
Edad: ${this.edad} años
Sexo: ${this.sexo}
Peso: ${this.peso} kg
Altura: ${this.altura} cm
Año de Nacimiento: ${this.anioNac}`)
  }

  generarDNI(){
    this.dni = Math.floor((Math.random() * (99999999-9999999)) +9999999);
  }

/*   mostrarGeneracion(){
    if(this.anioNac >= 1994 && this.anioNac <= 2010){
      console.log(`${this.nombre} ${this.apellido}: Generación Z - Rasgo característico: Irreverencia 😋`)
    }
    else if(this.anioNac >= 1981 && this.anioNac <= 1993){
      console.log(`${this.nombre} ${this.apellido}: Generación Y (millennials) - Rasgo característico: Frustración 😖`)
    }
    else if(this.anioNac >= 1969 && this.anioNac <= 1980){
      console.log(`${this.nombre} ${this.apellido}: Generación X - Rasgo característico: Obsesión por el éxito 😎`)
    }
    else if(this.anioNac >= 1949 && this.anioNac <= 1968){
      console.log(`${this.nombre} ${this.apellido}: Generación Baby Boom - Rasgo característico: Ambición 🤑`)
    }
    else if(this.anioNac >= 1930 && this.anioNac <= 1948){
      console.log(`${this.nombre} ${this.apellido}: Generación Silent Generation (posguerra) - Rasgo característico: Austeridad 😐`)
    }
  } */
}

const persona1 = new Persona('Nahuel','Zelaya',29,'H',76,177,1993);
const persona2 = new Persona('Melina','Lencina',29,'M',55,165,1993);
const persona3 = new Persona('Francisco','Zelaya',55,'H',115,179,1968);

persona1.mostrarGeneracion()
persona2.mostrarGeneracion()
persona3.mostrarGeneracion()

persona1.esMayorDeEdad();
persona2.esMayorDeEdad();
persona3.esMayorDeEdad();

persona1.mostrarDatos()
persona2.mostrarDatos()
persona3.mostrarDatos()

persona1.generarDNI()

console.log(persona1.dni)