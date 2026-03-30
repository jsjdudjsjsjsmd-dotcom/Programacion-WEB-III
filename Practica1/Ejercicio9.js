const miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Éxito: Promesa cumplida tras 3 segundos");
  }, 3000);
});

// Para probarla y ver el mensaje en consola:
miPromesa.then((mensaje) => {
  console.log(mensaje);
});