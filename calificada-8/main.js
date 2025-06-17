document.addEventListener("DOMContentLoaded", () => {
  const celdas = document.querySelectorAll("#cajas > div");
  const marcadorX = document.getElementById("marcadorX");
  const marcadorO = document.getElementById("marcadorO");
  const empateMarcador = document.getElementById("empateMarcador");
  const turnoElemento = document.getElementById("turno");
  const modalGanador = document.getElementById("modalGanador");
  const ganadorRonda = document.getElementById("ganadorRonda");
  const tuGanas = document.getElementById("tuGanas");
  const btnCerrar = document.getElementById("botonCerrarModal");
  const btnSiguiente = document.getElementById("siguienteRonda");
  const btnCpu = document.getElementById("juegoCpu");
  const btnPlayer = document.getElementById("JuegoPlayer");
  const modalInicio = document.getElementById("modalInicio");
  const btnX = document.getElementById("empezarX");
  const btnO = document.getElementById("empezarO");
  const btnReinicio = document.getElementById("reinicio");
  const divEscogerSimbolo = document.getElementById("escogerSimbolo");

  let turno = "X";
  let tablero = Array(9).fill("");
  let puntajes = { X: 0, O: 0, E: 0 };
  let contraCPU = null; 
  let simboloJugador = null;
  let simboloCPU = null;

  const combinacionesGanadoras = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  function verificarGanador() {
    for (const combo of combinacionesGanadoras) {
      const [a,b,c] = combo;
      if (tablero[a] && tablero[a] === tablero[b] && tablero[b] === tablero[c]) {
        return tablero[a];
      }
    }
    if (!tablero.includes("")) return "E";
    return null;
  }

  function actualizarTurno() {
    turnoElemento.textContent = turno ? `${turno} turn` : "";
  }

  function mostrarModal(ganador) {
    modalGanador.classList.remove("hidden");
    if (ganador === "E") {
      ganadorRonda.textContent = "Empate";
      tuGanas.textContent = "Nadie gana";
    } else {
      ganadorRonda.textContent = `${ganador} gana la Ronda`;
      tuGanas.textContent = ganador === simboloJugador ? "Tú ganas" : "CPU gana";
    }
  }

  function reiniciarTablero() {
    tablero = Array(9).fill("");
    celdas.forEach(celda => {
      celda.textContent = "";
      celda.classList.remove("pointer-events-none");
    });
  }

  function jugarCPU() {
    if (!contraCPU || turno !== simboloCPU) return;

    let vacias = tablero.map((v,i) => v === "" ? i : null).filter(i => i !== null);
    if (vacias.length === 0) return;

    const eleccion = vacias[Math.floor(Math.random() * vacias.length)];

    setTimeout(() => {
      tablero[eleccion] = simboloCPU;
      celdas[eleccion].textContent = simboloCPU;
      celdas[eleccion].classList.add("pointer-events-none");

      const resultado = verificarGanador();
      if (resultado) {
        if (resultado === "E") {
          puntajes.E++;
          empateMarcador.textContent = puntajes.E;
        } else {
          puntajes[resultado]++;
          if (resultado === "X") marcadorX.textContent = puntajes.X;
          if (resultado === "O") marcadorO.textContent = puntajes.O;
        }
        mostrarModal(resultado);
        return;
      }

      turno = simboloJugador;
      actualizarTurno();
    }, 500);
  }

  celdas.forEach((celda, index) => {
    celda.addEventListener("click", () => {
      if (contraCPU === null) return;
      if (tablero[index] !== "") return;
      if (contraCPU && turno !== simboloJugador) return;

      tablero[index] = turno;
      celda.textContent = turno;
      celda.classList.add("pointer-events-none");

      const resultado = verificarGanador();
      if (resultado) {
        if (resultado === "E") {
          puntajes.E++;
          empateMarcador.textContent = puntajes.E;
        } else {
          puntajes[resultado]++;
          if (resultado === "X") marcadorX.textContent = puntajes.X;
          if (resultado === "O") marcadorO.textContent = puntajes.O;
        }
        mostrarModal(resultado);
        return;
      }

      turno = turno === "X" ? "O" : "X";
      actualizarTurno();

      if (contraCPU) jugarCPU();
    });
  });

  btnCerrar.addEventListener("click", () => {
    modalGanador.classList.add("hidden");
  });

  btnSiguiente.addEventListener("click", () => {
    modalGanador.classList.add("hidden");
    reiniciarTablero();
    turno = "X"; 
    actualizarTurno();
    if (contraCPU && simboloCPU === "X") jugarCPU();
  });


  btnReinicio.addEventListener("click", () => {
    location.reload();
  });

  function actualizarBotonesSimbolo() {
    if (simboloJugador === "X") {
      btnX.classList.add("bg-gray-700");
      btnO.classList.remove("bg-gray-700");
    } else if (simboloJugador === "O") {
      btnO.classList.add("bg-gray-700");
      btnX.classList.remove("bg-gray-700");
    }
  }

  btnX.addEventListener("click", () => {
    simboloJugador = "X";
    simboloCPU = "O";
    turno = "X"; 
    actualizarBotonesSimbolo();
  });

  btnO.addEventListener("click", () => {
    simboloJugador = "O";
    simboloCPU = "X";
    turno = "X"; 
    actualizarBotonesSimbolo();
  });

  btnCpu.addEventListener("click", () => {
    if (!simboloJugador) {
      alert("Primero elige un símbolo");
      return;
    }
    contraCPU = true;
    modalInicio.classList.add("hidden");
    reiniciarTablero();
    actualizarTurno();
    if (simboloCPU === "X") jugarCPU();
  });

  btnPlayer.addEventListener("click", () => {
    if (!simboloJugador) {
      alert("Primero elige un símbolo");
      return;
    }
    contraCPU = false;
    modalInicio.classList.add("hidden");
    reiniciarTablero();
    actualizarTurno();
  });

  modalInicio.classList.remove("hidden");

  turnoElemento.textContent = "";
});

