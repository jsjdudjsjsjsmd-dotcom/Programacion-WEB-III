// 1. La función original que usa callbacks (estilo antiguo)
function operacionConCallback(valor, callback) {
  setTimeout(() => {
    if (valor > 0) {
      callback(null, `Éxito con el valor: ${valor}`);
    } else {
      callback("Error: El valor debe ser mayor a 0");
    }
  }, 1500);
}

// 2. Conversión a Promesa (Promisificación)
function operacionPromesa(valor) {
  return new Promise((resolve, reject) => {
    operacionConCallback(valor, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// 3. Uso moderno con Async/Await
async function ejecutar() {
  try {
    const resultado = await operacionPromesa(10);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

ejecutar();