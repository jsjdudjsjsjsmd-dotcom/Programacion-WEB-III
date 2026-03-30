function miFuncion(cadena) {
  const invertida = cadena.split("").reverse().join("");
  return cadena === invertida;
}

let band1 = miFuncion("oruro");
console.log(band1); // true

let band2 = miFuncion("hola");
console.log(band2); // false