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

   /* SEGUNDO AÑO */
   /* 3º semestre */
   { id: "C.I.S", nombre: "Cálculo integral y series", semestre: "3º", requisitos: ["C.D"]},
   { id: "A.L", nombre:
  
  
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Malla Curricular</title>

  <!-- Fuentes desde Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Playwrite+AU+QLD:wght@100;400&family=Winky+Rough&display=swap" rel="stylesheet">

  <!-- Estilos -->
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <h1>Malla Curricular</h1>

  <!-- Contenedor de la malla -->
  <div id="malla" class="grid"></div>

  <!-- Script funcional -->
  <script src="script.js"></script>
</body>
</html>
