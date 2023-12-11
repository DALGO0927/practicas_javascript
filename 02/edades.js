document.addEventListener('DOMContentLoaded', function() {
  const inputContainer = document.getElementById('edadInputs');
  const resultadosContainer = document.getElementById('resultados');
  const analizarBtn = document.getElementById('analizarBtn');

  // Generar campos de entrada para las edades
  for (let i = 0; i < 10; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 1;
    input.max = 120;
    input.placeholder = `Edad ${i + 1}`;
    input.required = true;
    inputContainer.appendChild(input);
  }

  // Función para analizar las edades
  function analizarEdades() {
    const inputs = inputContainer.querySelectorAll('input');
    const edades = Array.from(inputs).map(input => parseInt(input.value));
    if (edades.some(isNaN)) {
      alert('Por favor, ingrese edades válidas entre 1 y 120 años para todas las personas.');
      return;
    }

    let menores = 0, mayores = 0, adultosMayores = 0, min = 120, max = 0, suma = 0;

    edades.forEach(edad => {
      if (edad < 18) menores++;
      else if (edad >= 60) adultosMayores++;
      else mayores++;

      if (edad < min) min = edad;
      if (edad > max) max = edad;
      suma += edad;
    });

    const promedio = suma / edades.length;

    resultadosContainer.innerHTML = `
      <p>Menores de edad: ${menores}</p>
      <p>Mayores de edad: ${mayores}</p>
      <p>Adultos mayores (60+): ${adultosMayores}</p>
      <p>Edad más baja: ${min}</p>
      <p>Edad más alta: ${max}</p>
      <p>Promedio de edades: ${promedio.toFixed(2)}</p>
    `;
  }

  // Evento del botón para analizar las edades
  analizarBtn.addEventListener('click', analizarEdades);
});
