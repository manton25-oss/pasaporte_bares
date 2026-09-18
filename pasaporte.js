//**************Versión Merceditas *************/

//Declarar variables

// let nombre = document.getElementById("nombre");

// let entrar = document.getElementById("btnEntrar");

// let elMensaje = document.getElementById("mensajeAcceso");

//Listeners

// entrar.addEventListener("click", entrarEvento);

// Función entrarEvento

// function entrarEvento() {
//   console.log("el botón funciona");
//   let name = nombre.value;
//   elMensaje.innerHTML = `Bienvenid@, ${name} borratx@ `;

//   if (name === "") {
//     elMensaje.innerHTML = `Escribe primero tu nombre`;
//   }
// }

//******************** Versión María ******************/

//Array : un conjunto de objetos, se sabe que
//es un array porque va entre []
//dentro del array [] puedo crear varios objetos
// estos objetos van entre {}
const bares = [
  {
    id: 1,
    nombre: "Bar Atlanta",
    visitado: false,
  },
  {
    id: 2,
    nombre: "Bar el Toro",
    visitado: false,
  },
  {
    id: 3,
    nombre: "Fat Cat",
    visitado: false,
  },
  {
    id: 4,
    nombre: "La Prudència",
    visitado: false,
  },
  {
    id: 5,
    nombre: "Las Fernández",
    visitado: false,
  },
  {
    id: 6,
    nombre: "Nun Cultural Café",
    visitado: false,
  },
  {
    id: 7,
    nombre: "Chula Vista",
    visitado: false,
  },
  {
    id: 8,
    nombre: "El Magraner Boig",
    visitado: false,
  },
  {
    id: 9,
    nombre: "El Cafetí",
    visitado: false,
  },
  {
    id: 10,
    nombre: "La Ravala",
    visitado: false,
  },
  {
    id: 11,
    nombre: "La Monroe",
    visitado: false,
  },
  {
    id: 12,
    nombre: "Arume",
    visitado: false,
  },
  {
    id: 13,
    nombre: "La Morera",
    visitado: false,
  },
  {
    id: 14,
    nombre: "Bar Mendizábal",
    visitado: false,
  },
  {
    id: 15,
    nombre: "Dr. Beer & Mr. Friend",
    visitado: false,
  },
  {
    id: 16,
    nombre: "Biocenter",
    visitado: false,
  },
  {
    id: 17,
    nombre: "Bar Costa",
    visitado: false,
  },
  {
    id: 18,
    nombre: "Clemen's Boqueria",
    visitado: false,
  },
  {
    id: 19,
    nombre: "L'Universal",
    visitado: false,
  },
];
console.log(bares[2].nombre);
for (let i = 0; i < bares.length; i++) {
  console.log(bares[i].nombre);
}

// Declaración de varibles

const btnEntrar = document.getElementById("btnEntrar");

//Función nombre de usuario y que sea válido

function obtenerNombreUsuario() {
  const nombre = document.getElementById("nombre").value;
  return nombre;
}

function nombreValido(nombre) {
  if (nombre.trim() === "") {
    return false;
  } else {
    return true;
  }
}

// Función mostrar saludo

function mostrarSaludo(nombre) {
  const saludo = document.getElementById("saludo");
  saludo.textContent = `Hola ${nombre}, borratx@`;
}

btnEntrar.addEventListener("click", function () {
  const nombre = obtenerNombreUsuario();
  if (nombreValido(nombre) === false) {
    document.getElementById("mensajeAcceso").textContent = `Mindundi, escribe primero tu nombre!`;
    return;
  }
  document.getElementById("mensajeAcceso").textContent = "";
  mostrarSaludo(nombre);
  document.getElementById("acceso").style.display = "none";
  document.getElementById("pasaporte").style.display = "block";

  // mostrarBares();
  actualizarAplicacion();
});

// Gestionamos los bares

function buscarBarPorId(idBar) {
  for (let i = 0; i < bares.length; i++) {
    if (bares[i].id === idBar) {
      return bares[i];
    }
  }
  return null;
}

function sellarBar(idBar) {
  const bar = buscarBarPorId(idBar);

  if (bar === null) {
    return "Bar not found";
  }

  if (bar.visitado === true) {
    return "Bar ya visitado, prueba otro";
  }

  bar.visitado = true;
  return `Has sellado tu visita en ${bar.nombre}`;
}

//Función para mostrar los bares

function mostrarBares() {
  const listaBares = document.getElementById("listaBares");
  listaBares.innerHTML = "";
  for (let i = 0; i < bares.length; i++) {
    const tarjeta = document.createElement("article");
    const numero = document.createElement("p");
    const nombre = document.createElement("h3");
    const estado = document.createElement("p");
    const boton = document.createElement("button");

    tarjeta.classList.add("bar");
    numero.classList.add("numero-bar");
    estado.classList.add("estado");

    numero.textContent = `Parada ${bares[i].id}`;
    nombre.textContent = bares[i].nombre;

    if (bares[i].visitado === true) {
      estado.textContent = "Visitado";
      boton.textContent = `Ya sellado`;
      boton.disabled = true;
      tarjeta.classList.add("bar-visitado");
    } else {
      estado.textContent = `Pendiente de visitar`;
      boton.textContent = `Sellar ahora`;
    }
    boton.addEventListener("click", function () {
      const mensaje = sellarBar(bares[i].id);
      document.getElementById("mensajeSello").textContent = mensaje;
      actualizarAplicacion();
      if (todosVisitados()) {
        document.getElementById("mensajeFinal").textContent = `Enhorabuena, llevas una cogorza del 19 `;
      }
    });
    tarjeta.appendChild(numero);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(estado);
    tarjeta.appendChild(boton);

    listaBares.appendChild(tarjeta);
  }
}

// Mensaje una vez sellado todos los bares
//Creamos una función que sea todos visitados
//A la función le aplicamos un bucle for que:
//Empieza en el primer bar que es el número 0;
//Mientras no hayas recorrido todos los bares
//avanza un bar más

//Si los bares no están (false)todos ([i]) visitados
//devuelveme falso

//se cierra el bucle y por lo tanto
//sino devuelve verdadero

function todosVisitados() {
  for (let i = 0; i < bares.length; i++) {
    if (bares[i].visitado === false) {
      return false;
    }
  }
  return true;
}

//GESTIONAR ESTADO (BARRA Y PORCENTAJE)

function contarBaresVisitados() {
  let contador = 0;

  for (let i = 0; i < bares.length; i++) {
    if (bares[i].visitado === true) {
      contador++;
    }
  }
  return contador;
}

function calcularPorcentaje(visitados, total) {
  const porcentaje = (visitados / total) * 100;
  return Math.round(porcentaje);
}

function crearMensajeProgreso(visitados, total) {
  const porcentaje = calcularPorcentaje(visitados, total);
  const mensaje = `Has visitado ${visitados} bares, de un total de ${total} bares. Tu progreso es del ${porcentaje}%`;
  return mensaje;
}

function mostrarProgreso() {
  const visitados = contarBaresVisitados();
  const total = bares.length;
  const mensaje = crearMensajeProgreso(visitados, total);
  document.getElementById("progreso").textContent = mensaje;
}

function comprobarPasaporteCompleto() {
  const visitados = contarBaresVisitados();
  const total = bares.length;

  if (visitados === total) {
    return `¡Pasaporte completo!`;
  }
  const pendientes = total - visitados;
  return `Te faltan ${pendientes} bares por visitar.`;
}

function mostrarEstadoPasaporte() {
  const mensaje = comprobarPasaporteCompleto();
  document.getElementById("estadoPasaporte").textContent = mensaje;
}

function actualizarBarraProgreso() {
  const visitados = contarBaresVisitados();
  const total = bares.length;
  const porcentaje = calcularPorcentaje(visitados, total);
  document.querySelector(".barraProgreso").style.width = `${porcentaje}%`;
}

function actualizarAplicacion() {
  mostrarBares();
  mostrarProgreso();
  mostrarEstadoPasaporte();
  actualizarBarraProgreso();
}
