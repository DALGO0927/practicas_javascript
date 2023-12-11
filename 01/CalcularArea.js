document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formFiguras');
  const figuraSelect = document.getElementById('figura');
  const inputsFigura = document.getElementById('inputsFigura');
  const areaResultado = document.getElementById('areaResultado');
  const perimetroResultado = document.getElementById('perimetroResultado');

  figuraSelect.addEventListener('change', actualizarInputs);
  form.addEventListener('submit', calcularFigura);

  function actualizarInputs() {
    const figuraSeleccionada = figuraSelect.value;
    inputsFigura.innerHTML = '';
    let html = '';
    
    switch (figuraSeleccionada) {
      case 'triangulo':
        html = `
          <input type="number" id="base" placeholder="Base (b)" required>
          <input type="number" id="altura" placeholder="Altura (h)" required>
          <input type="number" id="ladoA" placeholder="Lado A (a)" required>
          <input type="number" id="ladoC" placeholder="Lado C (c)" required>
        `;
        break;
      case 'rectangulo':
        html = `
          <input type="number" id="baseR" placeholder="Base (b)" required>
          <input type="number" id="alturaR" placeholder="Altura (a)" required>
        `;
        break;
      case 'cuadrado':
        html = `
          <input type="number" id="lado" placeholder="Lado (a)" required>
        `;
        break;
      case 'circulo':
        html = `
          <input type="number" id="radio" placeholder="Radio (r)" required>
        `;
        break;
    }

    inputsFigura.innerHTML = html;
  }

  function calcularFigura(event) {
    event.preventDefault();
    const figuraSeleccionada = figuraSelect.value;
    let area, perimetro;

    switch (figuraSeleccionada) {
      case 'triangulo':
        const baseT = parseFloat(document.getElementById('base').value);
        const alturaT = parseFloat(document.getElementById('altura').value);
        const ladoA = parseFloat(document.getElementById('ladoA').value);
        const ladoC = parseFloat(document.getElementById('ladoC').value);
        area = (baseT * alturaT) / 2;
        perimetro = baseT + ladoA + ladoC;
        break;
      case 'rectangulo':
        const baseR = parseFloat(document.getElementById('baseR').value);
        const alturaR = parseFloat(document.getElementById('alturaR').value);
        area = baseR * alturaR;
        perimetro = 2 * (baseR + alturaR);
        break;
      case 'cuadrado':
        const lado = parseFloat(document.getElementById('lado').value);
        area = lado * lado;
        perimetro = 4 * lado;
        break;
      case 'circulo':
        const radio = parseFloat(document.getElementById('radio').value);
        area = Math.PI * radio * radio;
        perimetro = 2 * Math.PI * radio;
        break;
    }

    // Mostrar resultados
    areaResultado.textContent = area.toFixed(2);
    perimetroResultado.textContent = perimetro.toFixed(2);
  }

  // Iniciar con el formulario para el triángulo
  actualizarInputs();
});
