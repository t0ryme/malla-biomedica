/* ------------------------------------------------------------------
   MALLA ING. CIVIL BIOMEDICA – INTERACTIVA
   Cada ramo se desbloquea cuando se aprueban TODOS sus requisitos.
-------------------------------------------------------------------*/

const ramos = [
  /* PRIMER AÑO */
  { id: "D.P", nombre: "Desarrollo personal", semestre: "1º", requisitos: []},
  { id: "F.M", nombre: "Fundamentos de matemática", semestre: "1º", requisitos: []},
  { id: "Q.I", nombre: "Química para ingeniería", semestre: "1º", requisitos: []},
  { id: "F.P", nombre: "Fundamentos de programación", semestre: "1º", requisitos: []},
  { id: "D.I", nombre: "Desafíos de ingeniería", semestre: "1º", requisitos: []},

  { id: "F.F", nombre: "Fundamentos de física", semestre: "2º", requisitos: []},
  { id: "C.D", nombre: "Cálculo diferencial", semestre: "2º", requisitos: ["F.M"]},
  { id: "A", nombre: "Álgebra", semestre: "2º", requisitos: ["F.M"]},
  { id: "I.I.E", nombre: "Ingeniería, innovación y emprendimiento", semestre: "2º", requisitos: ["D.I"]},
  { id: "P", nombre: "Programación", semestre: "2º", requisitos: ["F.P"]},

  /* SEGUNDO AÑO */
  { id: "C.I.S", nombre: "Cálculo integral y series", semestre: "3º", requisitos: ["C.D"]},
  { id: "A.L", nombre: "Álgebra lineal", semestre: "3º", requisitos: ["A"]},
  { id: "F.MEC", nombre: "Física mecánica", semestre: "3º", requisitos: ["F.F","C.D"]},
  { id: "G.D", nombre: "Gestión de datos de salud", semestre: "3º", requisitos: ["F.P"]},
  { id: "B.C", nombre: "Biología celular", semestre: "3º", requisitos: []},
  { id: "T.I", nombre: "Taller de integración perfil sello uv 1", semestre: "3º", requisitos: ["F.P"]},

  { id: "CVV", nombre: "Cálculo en varias variables", semestre: "4º", requisitos: ["C.I.S","A.L"]},
  { id: "EDO", nombre: "Ecuaciones diferenciales ordinarias", semestre: "4º", requisitos: ["C.I.S","A.L"]},
  { id: "FE", nombre: "Física electromagnetismo", semestre: "4º", requisitos: ["C.I.S","F.MEC"]},
  { id: "EC", nombre: "Estadística computacional", semestre: "4º", requisitos: ["F.P","C.D"]},
  { id: "FS1", nombre: "Fisiología de sistemas I", semestre: "4º", requisitos: ["B.C"]},
  { id: "I", nombre: "Inglés", semestre: "4º", requisitos: ["D.P"]},

  /* TERCER AÑO */
  { id: "EA", nombre: "Electrónica analógica", semestre: "5º", requisitos: ["EDO","FE"]},
  { id: "LABEA", nombre: "Laboratorio de electrónica analógica", semestre: "5º", requisitos: ["EDO","FE"]},
  { id: "FCO", nombre: "Física, calor y ondas", semestre: "5º", requisitos: ["C.I.S","F.MEC"]},
  { id: "MNO", nombre: "Métodos numéricos y optimización", semestre: "5º", requisitos: ["A.L","G.D"]},
  { id: "FS2", nombre: "Fisiología de sistemas II", semestre: "5º", requisitos: ["B.C"]},
  { id: "TI2", nombre: "Taller de integración perfil sello uv 2", semestre: "5º", requisitos: ["G.D"]},

  { id: "ED", nombre: "Electrónica digital", semestre: "6º", requisitos: ["F.P","EA"]},
  { id: "LABED", nombre: "Laboratorio de electrónica digital", semestre: "6º", requisitos: ["F.P","LABEA"]},
  { id: "BM", nombre: "Mediciones biomédicas", semestre: "6º", requisitos: ["B.C","EA"]},
  { id: "GI", nombre: "Gráfica en ingeniería", semestre: "6º", requisitos: ["F.M"]},
  { id: "GOS", nombre: "Gestión de organizaciones de salud", semestre: "6º", requisitos: ["G.D"]},
  { id: "SPSS", nombre: "Salud pública y sistemas de salud", semestre: "6º", requisitos: ["TI2","G.D"]},

  /* CUARTO AÑO */
  { id: "EM1", nombre: "Equipos médicos 1", semestre: "7º", requisitos: ["EA","LABEA","FS2"]},
  { id: "ICA", nombre: "Ingeniería de control automático", semestre: "7º", requisitos: ["EDO"]},
  { id: "SYM", nombre: "Señales y sistemas", semestre: "7º", requisitos: ["EDO","EC","FS1"]},
  { id: "RDYC", nombre: "Redes de datos y comunicaciones", semestre: "7º", requisitos: ["G.D"]},
  { id: "ISH", nombre: "Ingeniería de seguridad hospitalaria", semestre: "7º", requisitos: ["EA"]},
  { id: "GOPH", nombre: "Gestión de operaciones y procesos hospitalarios", semestre: "7º", requisitos: ["GOS"]},
  { id: "P1", nombre: "Práctica I", semestre: "7º", requisitos: ["EA","MNO","FS2"]},

  { id: "EM2", nombre: "Equipos médicos 2", semestre: "8º", requisitos: ["EA","LABEA","FS2"]},
  { id: "LABSE", nombre: "Laboratorio de sistemas embebidos", semestre: "8º", requisitos: ["LABEA","LABED","FCO"]},
  { id: "PDIM", nombre: "Procesamiento digital de imágenes médicas", semestre: "8º", requisitos: ["SYM"]},
  { id: "SIPS", nombre: "Sistemas de información para salud", semestre: "8º", requisitos: ["RDYC","GOPH"]},
  { id: "ICYET", nombre: "Ingeniería clínica y evaluación de tecnologías", semestre: "8º", requisitos: ["GOS"]},
  { id: "TDI", nombre: "Taller de integración", semestre: "8º", requisitos: ["BM"]},

  /* QUINTO AÑO */
  { id: "EM3", nombre: "Equipos médicos 3", semestre: "9º", requisitos: ["BM","FS2"]},
  { id: "E1", nombre: "Electivo 1", semestre: "9º", requisitos: ["BM"]},
  { id: "IAS", nombre: "Inteligencia artificial para la salud", semestre: "9º", requisitos: ["MNO"]},
  { id: "GCT", nombre: "Gestión de calidad y tecnovigilancia", semestre: "9º", requisitos: ["SPSS","EC"]},
  { id: "ICALM", nombre: "Ingeniería clínica aplicada y laboratorio de mantenimiento", semestre: "9º", requisitos: ["ISH","ICYET"]},
  { id: "FYEDP", nombre: "Formulación y evaluación de proyectos", semestre: "9º", requisitos: ["GOS"]},

  { id: "EM4", nombre: "Equipos médicos 4", semestre: "10º", requisitos: ["PDIM","SIPS"]},
  { id: "DDSBM", nombre: "Diseño y desarrollo de soluciones biomédicas", semestre: "10º", requisitos: ["ICA","LABSE"]},
  { id: "ESYTM", nombre: "E-salud y telemedicina", semestre: "10º", requisitos: ["SIPS"]},
  { id: "E2", nombre: "Electivo 2", semestre: "10º", requisitos: ["GOPH"]},
  { id: "E3", nombre: "Electivo 3", semestre: "10º", requisitos: ["BM"]},
  { id: "EPH", nombre: "Estudio de preinversión hospitalaria", semestre: "10º", requisitos: ["EM1","ICYET","FYEDP"]},

  /* SEXTO AÑO */
  { id: "PDT", nombre: "Proyecto de título", semestre: "11º", requisitos: ["SIPS","TDI","ICALM","EPH","DDSBM"]},
  { id: "P2", nombre: "Práctica II", semestre: "11º", requisitos: ["GOPH","P1","EM2","SIPS","ICALM"]}
];

/* ------------------ LÓGICA ------------------- */

const mallaContainer = document.getElementById("malla");
const progresoContainer = document.getElementById("progreso");
const resetBtn = document.getElementById("reset");

let aprobados = new Set(JSON.parse(localStorage.getItem("aprobados")) || []);

function guardarProgreso() {
  localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
}

function puedeAprobar(ramo) {
  return ramo.requisitos.every(r => aprobados.has(r));
}

function crearBotonRamo(ramo) {
  const btn = document.createElement("button");
  btn.textContent = `${ramo.nombre} (${ramo.semestre})`;
  btn.className = "ramo";

  if (aprobados.has(ramo.id)) {
    btn.classList.add("approved");
  } else if (!puedeAprobar(ramo)) {
    btn.classList.add("locked");
    btn.disabled = true;
  }

  btn.addEventListener("click", () => {
    if (btn.classList.contains("approved")) {
      aprobados.delete(ramo.id);
      btn.classList.remove("approved");
    } else {
      if (puedeAprobar(ramo)) {
        aprobados.add(ramo.id);
        btn.classList.add("approved");
        btn.classList.add("pulse"); // animación
        setTimeout(() => btn.classList.remove("pulse"), 500);
      }
    }
    guardarProgreso();
    actualizarEstado();
  });

  return btn;
}

function actualizarEstado() {
  const botones = mallaContainer.querySelectorAll("button.ramo");
  botones.forEach(btn => {
    const ramo = ramos.find(r => btn.textContent.startsWith(r.nombre));
    if (ramo) {
      if (puedeAprobar(ramo) || aprobados.has(ramo.id)) {
        btn.disabled = false;
        btn.classList.remove("locked");
      } else {
        if (!aprobados.has(ramo.id)) {
          btn.disabled = true;
          btn.classList.add("locked");
          btn.classList.remove("approved");
        }
      }
    }
  });
  actualizarProgreso();
}

function actualizarProgreso() {
  const total = ramos.length;
  const completados = aprobados.size;
  const porcentaje = Math.round((completados / total) * 100);
  progresoContainer.textContent = `Progreso: ${completados}/${total} ramos (${porcentaje}%)`;
}

function cargarMalla() {
  const semestres = {};
  ramos.forEach(r => {
    if (!semestres[r.semestre]) semestres[r.semestre] = [];
    semestres[r.semestre].push(r);
  });

  for (const semestre in semestres) {
    const divSem = document.createElement("div");
    divSem.className = "semestre";
    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${semestre}`;
    divSem.appendChild(h2);

    semestres[semestre].forEach(ramo => {
      const boton = crearBotonRamo(ramo);
      divSem.appendChild(boton);
    });

    mallaContainer.appendChild(divSem);
  }
  actualizarEstado();
}

/* ---- Reset ---- */
resetBtn.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres reiniciar la malla?")) {
    aprobados.clear();
    guardarProgreso();
    mallaContainer.innerHTML = "";
    cargarMalla();
  }
});

// Inicializar
cargarMalla();
