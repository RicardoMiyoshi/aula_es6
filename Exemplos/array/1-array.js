//Array.of

const persons = Array.of('John', 'Cris', 'Jenny');
console.log(persons);

const numberAndStrings = Array.of(1, 2, 'strings', 'texto');
console.log(numberAndStrings);

//Array

const arrWith3Positions = Array(3); //cria um array com 3 posições vazias
console.log(arrWith3Positions);

const personsList = Array('John', 'Cris', 'Jenny');
console.log(personsList);

//Array.from
const divs = document.querySelectorAll('div');
const arr = Array.from(divs);

//push adiciona um elemento ao array e retorna o novo tamanho do array
const frutas = ['melancia', 'banana'];
const retPush = frutas.push('laranja');
console.log(frutas, retPush);

//pop remove o último elemento do array e retorna o elemento removido
const retPop = frutas.pop();
console.log(frutas, retPop);

//unshift adiciona um ou mais elementos no início do array e retorna o tamanho do novo array
const retUnshift = frutas.unshift('laranja');
console.log(frutas, retUnshift);

//shift remove o primeiro elemento de um array e retorna o elemento removido
const retShift = frutas.shift();
console.log(frutas, retShift);

//concat contatena um ou mais arrays retornando um novo array
const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados);
console.log(alimentos);

//slice retorna um novo array "fatiando" o array de acordo com início e fim
const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 2));
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(-3));

//splice altera um array adicionando novos elementos enquanto remove elementos antigos
const frutas = ['melancia', 'banana'];
frutas.splice(1, 0, 'acerola');
console.log(frutas);
frutas.splice(2, 1, 'laranja', 'amora');
console.log(frutas);
