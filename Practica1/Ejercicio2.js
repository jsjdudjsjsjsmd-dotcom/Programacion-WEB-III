function miFuncion(frase) {
  return frase.split("").reverse().join("");
}

let cad = miFuncion("abcd");
console.log(cad); // dcba 