function obtenerUsuario() {
  fetch('https://api.ejemplo.com/usuario/1')
    .then(respuesta => respuesta.json())
    .then(usuario => {
      console.log("Usuario:", usuario.nombre);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
