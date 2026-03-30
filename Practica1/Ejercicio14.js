function obtenerDatosPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos recibidos"), 2000);
  });
}

function miFuncionConCallback(callback) {
  obtenerDatosPromesa()
    .then((resultado) => {
      callback(null, resultado);
    })
    .catch((error) => {
      callback(error);
    });
}

miFuncionConCallback((err, data) => {
  if (err) return console.error(err);
  console.log(data);
});