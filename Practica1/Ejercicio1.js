function miFuncion(texto) {
  let conteo = { a: 0, e: 0, i: 0, o: 1, u: 0 }; // Inicializamos el objeto
  const vocales = "aeiou";

  for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
      conteo[letra]++;
    }
  }

  return conteo;
}

let obj = miFuncion("euforia");
console.log(obj);