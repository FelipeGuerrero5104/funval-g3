let saldo = 0;
let salir = false

function menuPrincipal() {
  return prompt(
    " MENÚ DE LA CUENTA BANCARIA \n" +
    "1. Ingresar dinero\n" +
    "2. Retirar dinero\n" +
    "3. Consultar saldo\n" +
    "4. Salir\n" 
  );
}

function ingresarDinero() {
  const cantidad = parseFloat(prompt("Cuanto quieres depositar?"));
  if (cantidad > 0) {
    saldo += cantidad;
    alert(`Ingreso listo! Tu nuevo saldo es: $${saldo.toFixed(2)}`);
  } else {
    alert("La cantidad debe ser mayor que cero");
  }
}

function retirarDinero() {
  const cantidad = parseFloat(prompt("Cuanto quieres retirar?"));
  if (cantidad <= 0) {
    alert("La cantidad debe ser mayor que cero");
  } else if (cantidad > saldo) {
    alert("Saldo insuficiente! TAS POBRE");
  } else {
    saldo -= cantidad;
    alert(`Retiro exitoso! ERES RICO! Nuevo saldo: $${saldo.toFixed(2)}`);
  }
}

function consultarSaldo() {
  alert(`Su saldo actual es: $${saldo.toFixed(2)}`);
}

while (!salir) {
  const opcionMenu = menuPrincipal();

  if (opcionMenu === "1") {
    ingresarDinero();
  } else if (opcionMenu === "2") {
    retirarDinero();
  } else if (opcionMenu === "3") {
    consultarSaldo();
  } else if (opcionMenu === "4") {
    alert("Gracias por usar este cajero que esta medio meh :D");
    salir = true;
  } else {
    alert("Hay 4 opciones y no puedes colocar ninguna? >:v");
  }
}


