/* ------------------------------------------------------------------
   MALLA ING. CIVIL BIOMEDICA – INTERACTIVA
   Cada ramo se desbloquea cuando se aprueban TODOS sus requisitos.
-------------------------------------------------------------------*/

const ramos = [
  /* PRIMER AÑO */
  /* 1º semestre */
  { id: "D.P", nombre: "Desarrollo personal", semestre: "1º", requisitos: []},
  { id: "F.M", nombre: "Fundamentos de matemática", semestre: "1º", requisitos: []},
  { id: "Q.I", nombre: "Química para ingeniería", semestre: "1º", requisitos: []},
  { id: "F.P", nombre: "Fundamentos de programación", semestre: "1º", requisitos: []},
  { id: "D.I", nombre: "Desafíos de ingeniería", semestre: "1º", requisitos: []},

  /* 2º semestre */
  { id: "F.F", nombre: "Fundamentos de física", semestre: "2º", requisitos: []},
  { id: "C.D", nombre: "Cálculo diferencial", semestre: "2º", requisitos: ["F.M"]},
  { id: "A", nombre: "Álgebra", semestre: "2º", requisitos: ["F.M"]},
  { id: "I.I.E", nombre: "Ingeniería, innovación y emprendimiento", semestre: "2º", requisitos: ["D.I"]},
  { id: "P", nombre: "Programación", semestre "2º", requisitos: ["F.P"]},

   /* SEGUNDO AÑO */
   /* 3º semestre */
   { id: "C.I.S", nombre: "Cálculo integral y series", semestre: "3º", requisitos: ["C.D"]},
   { id: "A.L", nombre: "Álgebra lineal", semestre: "3º", requisitos: ["A"]},
   { id: "F.M", nombre: "Física mecánica", semestre: "3º", requisitos: ["F.F","C.D"]},
   { id: "G.D", nombre: "Gestión de datos de salud", semestre: "3º", requisitos: ["F.P"]},
   { id: "B.C", nombre: "Biología celular", semestre: "3º", requisitos: []},
   { id: "T.I", nombre: "Taller de integración perfil sello uv 1", semestre: "3º", requisitos: ["F.P"]},

   /* 4º semestre */
   { id: "CVV", nombre: "Cálculo en varias variables", semestre: "4º", requisitos: ["C.I.S","A.L"]},
   { id: "EDO", nombre: "Ecuaciones diferenciales ordinarias", semestre: "4º", requisitos: ["C.I.S","A.L"]},
   { id: "FE", nombre: "Física electromagnetismo", semestre: "4º", requisitos: ["C.I.S","F.M"]},
   { id: "EC", nombre: "Estadística computacional", semestre: "4º", requisitos: ["F.P","C.D"]},
   { id: "FS1", nombre: "Fisiología de sistemas I", semestre: "4º", requisitos: ["B.C"]},
   { id: "I", nombre: "Inglés", semestre: "4º", requisitos: ["D.P"]},

   /* TERCER AÑO */
   /* 5º semestre */
   { id: "EA", nombre: "Electrónica analógica", semestre: "5º", requisitos: ["EDO","FE"]},
   { id: "LABEA", nombre: "Laboratorio de electrónica analógica", semestre: "5º", requisitos: ["EDO","FE"]},
   { id: "FCO", nombre: "Física, calor y ondas", semestre: "5º", requisitos: ["C.I.S","F.M"]},
   { id: "MNO", nombre: "Métodos numéricos y optimización", semestre: "5º", requisitos: ["A.L","G.D"]},
   { id: "FS2", nombre: "Fisiología de sistemas II", semestre: "5º", requisitos: ["B.C"]},
   { id: "TI2", nombre: "Taller de integración perfil sello uv 2", semestre: "5º", requisitos: ["G.D"]},

   /* 6º semestre */
   { id: "ED", nombre: "Electrónica digital", semestre: "6º", requisitos: ["F.P","EA"]},
   { id: "LABED", nombre: "Laboratorio de electrónica digital", semestre "6º", requisitos: ["F.P","LABEA"]},
   { id: "BM", nombre: "Mediciones biomédicas", semestre: "6º", requisitos: ["B.C","EA"]},
   { id: "GI", nombre: "Gráfica en ingeniería", semestre: "6º", requisitos: ["F.M"]},
   { id: "GOS", nombre: "Gestión de organizaciones de salud", semestre: "6º", requisitos: ["G.D"]},
   { id: "SPSS", nombre: "Salud pública y sistemas de salud", semestre: "6º", requisitos: ["TI2","G.D"]},

   /* CUARTO AÑO */
   /* 7º semestre */
   { id: "EM1", nombre: "Equipos médicos 1", semestre: "6º", requisitos: [" 
   
  
  
const mallaContainer = document.getElementById("malla");

// Guarda qué ramos están aprobados
const aprobados = new Set();

function puedeAprobar(ramo) {
  // Si todos los requisitos están aprobados, se puede aprobar
  return ramo.requisitos.every(r => aprobados.has(r));
}

function crearBotonRamo(ramo) {
  const btn = document.createElement("button");
  btn.textContent = `${ramo.nombre} (${ramo.semestre})`;
  btn.className = "ramo";

  if (!puedeAprobar(ramo)) {
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
      }
    }
    actualizarEstado();
  });

  return btn;
}

function actualizarEstado() {
  // Recorremos todos los botones para habilitar/deshabilitar según requisitos
  const botones = mallaContainer.querySelectorAll("button.ramo");
  botones.forEach(btn => {
    const ramo = ramos.find(r => btn.textContent.startsWith(r.nombre));
    if (ramo) {
      if (puedeAprobar(ramo)) {
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
}

function cargarMalla() {
  // Agrupamos ramos por semestre
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
}

cargarMalla();
actualizarEstado();
