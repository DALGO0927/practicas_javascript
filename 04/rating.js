const personas = [];

document.addEventListener('DOMContentLoaded', function() {
  const agregarBtn = document.getElementById('agregarBtn');
  const mostrarBtn = document.getElementById('mostrarBtn');
  const guardarPersonaBtn = document.getElementById('guardarPersonaBtn');
  const buscarPersonaBtn = document.getElementById('buscarPersonaBtn');
  const formularioAgregar = document.getElementById('formularioAgregar');
  const formularioMostrar = document.getElementById('formularioMostrar');
  const datosPersona = document.getElementById('datosPersona');

  agregarBtn.addEventListener('click', function() {
    formularioAgregar.classList.toggle('oculto');
  });

  mostrarBtn.addEventListener('click', function() {
    formularioMostrar.classList.toggle('oculto');
  });

  guardarPersonaBtn.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;
    const ciudadResidencia = document.getElementById('ciudadResidencia').value;
    const ciudadOrigen = document.getElementById('ciudadOrigen').value;
    const canciones = Array.from(document.getElementsByClassName('artista')).map((input, index) => {
      return {
        artista: input.value,
        titulo: document.getElementsByClassName('tituloCancion')[index].value
      };
    });

    // Validar que se ingrese al menos una canción
    if (!canciones[0].artista || !canciones[0].titulo) {
      alert('Debe ingresar al menos una canción favorita.');
      return;
    }

    personas.push({
      nombre,
      cedula,
      fechaNacimiento,
      correo,
      ciudadResidencia,
      ciudadOrigen,
      canciones
    });

    alert('Persona agregada exitosamente');
    formularioAgregar.classList.add('oculto');
  });

  buscarPersonaBtn.addEventListener('click', function() {
    const indice = document.getElementById('indicePersona').value - 1; // Arrays son base 0
    if (indice < 0 || indice >= personas.length) {
      alert('Posición inválida');
      return;
    }

    const persona = personas[indice];
    datosPersona.innerHTML = `
      <p>Nombre: ${persona.nombre}</p>
      <p>Cédula: ${persona.cedula}</p>
      <p>Fecha de Nacimiento: ${persona.fechaNacimiento}</p>
      <p>Correo: ${persona.correo}</p>
      <p>Ciudad de Residencia: ${persona.ciudadResidencia}</p>
      <p>Ciudad de Origen: ${persona.ciudadOrigen}</p>
      <p>Canciones Favoritas:</p>
      <ul>
        ${persona.canciones.map(cancion => `<li>${cancion.artista} - ${cancion.titulo}</li>`).join('')}
      </ul>
    `;
  });

});
