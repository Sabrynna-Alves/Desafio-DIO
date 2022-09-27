/* -----------------------------------------------------------------------------------------------------------------------------------

// O que são Vetores ou Arrays

//Como declarar um array
let array = ['string',  1,  true];
console.log(array);

//Pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[0]); */

/* -----------------------------------------------------------------------------------------------------------------------------------

// Manipulando Arrays

//ForEach
array.forEach(function(item, index){console.log(item, index)}); 

//Push
array.push('novo item');
console.log(array);

//Pop
array.pop();
console.log(array);

//Shift
array.shift();
console.log(array);

//Unshift
array.unshift('novo item');
console.log(array);

//IndexOf
console.log(array.indexOf(true));

//Splice
array.splice(0, 3);
console.log(array);

//Slice
let NovoArray = array.slice(0, 3);
console.log(NovoArray); */

/* -----------------------------------------------------------------------------------------------------------------------------------

// Objetos

let Object = {string: 'string', Number: 1, Boolean: true, array:[array], objectInterno: {objectInterno: 'objecto Interno'} };
console.log(Object.Boolean);

var string = Object.string;
console.log(string);

var arrayInterno = Object.array;
console.log(arrayInterno); 

var {string, Boolean} = Object;
console.log(string, Boolean); */
