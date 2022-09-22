'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <=1) return array;

  let pivot = array[Math.floor(Math.random()*array.length)];
  let equals =[];
  let left =[];
  let right =[];

  for(let i=0; i<array.length; i++){
    if(array[i] !== pivot){
      if (array[i]> pivot){
        right.push(array[i]);
      }
      else {
        left.push(array[i]);
      }
    }
    else{
      equals.push(array[i])
    }
  }
return quickSort(left).concat(equals).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length<2) return array;

  let half= Math.floor(array.length/2)
  let left = array.slice(0, half);
  let right = array.slice(half);
    
  array =[];

  left = mergeSort(left);
  right = mergeSort(right);

  while(right.length&&left.length){
    if(left[0]<right[0]){
      array.push(left.shift());
    }
    else{
      array.push(right.shift());
    }
  }

  array = array.concat(left,right);

  return array;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
