'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var respuesta = null;
  var numero = num.toString().split('').reverse();

  for(let i=0; i<numero.length;i++){
    respuesta += numero[i] * (2**i);  
  }
  
  return respuesta;

}

function DecimalABinario(num) {

let arrBinario = [];
let respuesta = null

  while (num >=2 ){
      arrBinario.unshift(Math.floor(num % 2));
      num = Math.floor(num/2);
  }

arrBinario.unshift(Math.floor(num));
respuesta = arrBinario.join('');

  return respuesta;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}