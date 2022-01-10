// class Coche{
//     constructor(marca, modelo, antiguedad, color, tipo) {
//       this.marca = marca;
//       this.modelo = modelo;
//       this.antiguedad = antiguedad;
//       this.color = color;
//       this.tipo = tipo;
//     }
//     detalles() {
//       console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
//     }
//   }
  
//   let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
//   console.log(miCoche)
//   miCoche.detalles();

// class Coche{
//     constructor(marca, modelo, antiguedad, color, tipo) {
//       this.marca = marca;
//       this.modelo = modelo;
//       this.antiguedad = antiguedad;
//       this.color = color;
//       this.tipo = tipo;
//     }
//     detalles(){
//                 return "Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color;
//         }
//   }
  

//   // definimos la clase nueva y la clase que vamos a heredar
//   class Furgon extends Coche { 
//       //definimos constructor
//     constructor (marca, modelo, antiguedad, color, tipo,taraMinima, cargaUtil, volumenCarga) {
//       super(marca, modelo, antiguedad, color, tipo) // Llama al constructor del padre
//       this.taraMinima = taraMinima;
//       this.cargaUtil = cargaUtil;
//       this.volumenCarga = volumenCarga;
//       }
//   };
  
//   //instanciamos le objeto
//   let miFurgon = new Furgon("Peugeot", "607", 2002, "rojo", "turismo",1200, 768, 4.5);
//   console.log(miFurgon.detalles())

class Coche{
    static info(edad){
        console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conducir": "y ... ¡Sorry! Sigue esperando para conducir."}`);
    }
    constructor(marca, modelo, antiguedad, color, tipo) {
      this.marca = marca;
      this.modelo = modelo;
      this.antiguedad = antiguedad;
      this.color = color;
      this.tipo = tipo;
    }
    detalles() {
      console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
    }
  }
  
  Coche.info(50);
  Coche.info(8);
  let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");

