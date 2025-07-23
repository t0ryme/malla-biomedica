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
  { id: "I.I.E", nombre: "Ingeniería, innovación y emprendimiento", semestre "2º", requisitos: ["D.I"]},
  { id: "P", nombre: "Programación", semestre "2º", requisitos: ["F.P"]},
  
  
