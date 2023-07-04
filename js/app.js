class Usuario {
  constructor(name, username, password, status = true) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.status = status;
  }

  presentacion() {
    console.log("---------Tarjeta de presentación----------");
    console.log(`Nombre: ${this.name}`);
    console.log(`Nombre de usuario: ${this.username}`);
  }

  cambiarEstado() {
    this.status = !this.status;
  }
}

const user1 = new Usuario("Pablo", "pmarino", "12345678", true);
const user2 = new Usuario("Josefina", "jsefina", "12345678", false);
const user3 = new Usuario("Andres", "andresito", "12345678");
const user4 = new Usuario("Pedro", "pp2023", "12345678");

class Administrador extends Usuario {
  constructor(name, username, password, role, status = true) {
    super(name, username, password, status);
    this.role = role;
  }
  superPresentacion() {
    this.presentacion();
    console.log(`Role en la empresa: ${this.role}`);
  }
}

const admin = new Administrador(
  "Jony",
  "jonywin",
  "elmasmejor",
  "gerente gerencial"
);

/*
  Cuenta bancaria
      1-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
      - Una propiedad titular.
      - Una propiedad saldo, teniendo como valor inicial 0.
      - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
      - Un método extraer() que permita retirar la cantidad pasada como parámetro.
      - Un método informar() que retorne la información del estado de la cuenta. 
      - Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
  */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  imgresar(valor) {
    this.saldo += valor;
    this.informar();
  }
  extraer(valor) {
    this.saldo -= valor;
    this.informar();
  }
  informar() {}
}
