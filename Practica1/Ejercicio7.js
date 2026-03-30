const arreglo = [10, 20, 30, 40, 50];

// Las dos comas iniciales omiten los índices 0 y 1
const [, , ...elResto] = arreglo;

console.log(elResto); // [30, 40, 50]