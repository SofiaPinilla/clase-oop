// const coche1 ={
//     modelo:'kuga',
//     marca:'Ford',
//     color:'gris',
//     arrancar: function(){
//        return this.marca + ' es de color ' + this.color
//     }
// }

// const coche2 ={
//     modelo:'a3',
//     marca:'Audi',
//     color:'blanco',
//     arrancar: function(){
//         return this.marca + ' es de color ' + this.color
//      }
// }

//constructor
// let Coche = function (marca, modelo, antiguedad, color, tipo) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.antiguedad = antiguedad
//     this.color = color;
//     this.tipo = tipo;
//     this.detalles = function(){
//         return "Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color;
//       }
// };
// Coche.prototype.detalles = function(){
//     return "Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color;
//   }
// //Instaciamos el objeto
// const coche1 = new Coche('Ford','Kuga',2021,'gris','st-line')
// const coche2 = new Coche('Audi','a3',2021,'blanco','st-line')
// console.log(coche1)
// console.log(coche1.detalles())
// console.log(coche2.detalles())

// function Libro(titulo, autor, año){
//     this.titulo = titulo;
//     this.autor = autor;
//     this.año = año
//   }
  
//   Libro.prototype.getSummary = function (){
//     return `${this.titulo} fue escrito por ${this.autor} en ${this.año}`;
//   };
  
//   // Revista Constructor
//   function Revista(titulo,autor, año,mes){
//     Libro.call(this, titulo, autor, año);
//     this.mes = mes
//   }
  
//   // Instanciamos Objeto revista
//   const mag1 = new Revista('Mag One','John Doe','2018','Enero')


//constructor
// function Libro(titulo, autor, año){
//     this.titulo = titulo;
//     this.autor = autor;
//     this.año = año
//   }
  
//   //Definimmos el prototpo
//   Libro.prototype.getSummary = function (){
//     return `${this.titulo} fue escrito por ${this.autor} en ${this.año}`;
//   };
  
//   // Revista Constructor
//   function Revista(titulo,autor, año,mes){
//     Libro.call(this, titulo, autor, año);
//     this.mes = mes
//   }
  
//   //Heredar Prototipos
//   Revista.prototype = Object.create(Libro.prototype)
  
//   // Instanciamos Objeto revista
//   const mag1 = new Revista('Mag One','John Doe','2018','Enero')

// console.log(mag1.getSummary())