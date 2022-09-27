/* ---------------------------------------------------------------------------------------------------------------------------------------------------

//Estrutura de Decisão 

var Jogador1 = 2;
var Jogador2 = 0;
var placar;

//If Ternário
Jogador1 != -1 & Jogador2 != -1 ? console.log('Os jogarodes são válidos') : console.log('Os jogadores são inválidos');

//If 
if (Jogador1 > 0 & Jogador2 == 0) {
    console.log('Jogador 1 marcou pomto');
    placar = Jogador1 > Jogador2;
}

//Else if 
else if (Jogador2 > 0 & Jogador1 == 0) {
    console.log('Jogador2 marcou ponto');
    placar = Jogador2 > Jogador1;
}

//Else
else{
    console.log('Ninguem marcou ponto');
}

//Ninho de If

if (Jogador1 != -1){
    if (Jogador1 > 0) {
        console.log('Jogador1 marcou pomto');
    }else if (Jogador2 > 0){
        console.log('Jogador2 marcou ponto');
    }else{
        console.log('Ninguem marcou ponto');
    } 
}

//Switch/Case
switch (placar) {
    case placar = Jogador1 > Jogador2:
        console.log('Jogador1 ganhou');
        break;
    case placar = Jogador2 > Jogador1:
        console.log('Jogador2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');

} */

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------

//Estrutura de Repetição

let array = ['Valor 1', 'Valor 2', 'Valor3', 'Valor4', 'Valor5'];

let object = {propriedade1: 'Valor1', propriedade2: 'Valor2', propriedade3: 'Valor3'};

//For
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
} 

//For/In
for (let i in array) {
    console.log(i);
}

for (i in object){
    console.log(i);
} 

//For/of
for (i of array) {
    console.log(i);
}
for (i of object.propriedade1) {
    console.log(i);

} 

//While
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

//Do/While
do {
    a++;
    console.log(a);
}while (a < 10) */
