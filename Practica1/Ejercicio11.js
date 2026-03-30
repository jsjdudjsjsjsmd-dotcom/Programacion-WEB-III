function verificarUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: id, nombre: "Alex" }), 1000);
  });
}

function obtenerPermisos(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Permisos de administrador para ${usuario.nombre}`), 1000);
  });
}

// Encadenamiento de promesas
verificarUsuario(1)
  .then((usuario) => {
    console.log("Usuario verificado:", usuario);
    return obtenerPermisos(usuario); // Retorna una nueva promesa
  })
  .then((permisos) => {
    console.log("Acceso concedido:", permisos);
  })
  .catch((error) => {
    console.error("Hubo un error:", error);
  });