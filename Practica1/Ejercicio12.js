async function procesarPerfil(id) {
  try {
    const usuario = await autenticarUsuario(id);
    const datos = await obtenerDatos(usuario);
    const perfil = await mostrarPerfil(datos);
    
    console.log("Perfil cargado:", perfil);
  } catch (error) {
    console.error("Hubo un error en el proceso:", error);
  }
}

procesarPerfil(1);