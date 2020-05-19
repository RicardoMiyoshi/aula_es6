//forEach iteração de cada item dentro de um array
const frutas = ['melancia', 'acerola', 'laranja', 'amora'];
frutas.forEach((fruta, index, arr) => console.log(index, fruta, arr));

//map retorna um novo array, de mesmo tamanho, iterando cada item de um array
const frutas = ['melancia', 'acerola', 'laranja', 'amora'];
console.log(
  frutas.map((fruta, index) => `${index} - ${fruta}`),
  frutas
);

//flat retorna um novo array com todos os elemento de um sub-array concatenados
//de uma forma recursiva de acordo com a profundidade especificada(depth)
const idades = [20, 34, [35, 60, [70, 40]]];
console.log(idades.flat());
console.log(idades.flat(2));

//flatMap retorna um novo array assim como a função map e executa um flat de profundidade 1
const arr = [1, 2, 3, 4];

console.log(arr.map((value) => value * 2));
console.log(arr.flatMap((value) => value * 2));
console.log(arr.map((value) => [value * 2]));
console.log(arr.flatMap((value) => [value * 2]));
console.log(arr.map((value) => [[value * 2]]));
console.log(arr.flatMap((value) => [[value * 2]]));

//keys retorna um Array Iterator que contém as chaves para cada elemento do array
const arr = [1, 2, 3, 4];
const arrIterator = arr.keys();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

//values retorna um Array Iterator que contém os valores para cada elemento do array
const arr = [1, 2, 3, 4];
const arrIterator = arr.values();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

//entries retorna um Array Iterator que contém os pares chave/valor para cada elemento do array
const arr = [1, 2, 3, 4];
const arrIterator = arr.entries();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

const frutas = ['melancia', 'acerola', 'laranja', 'amora'];
const frutasIterator = frutas.entries();
console.log(frutasIterator);
console.log(frutasIterator.next());
console.log(frutasIterator.next());
console.log(frutasIterator.next());
console.log(frutasIterator.next());
console.log(frutasIterator.next());

//find retorna o primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4];
const firstGreaterThanTwo = arr.find((value) => value > 2);
console.log(firstGreaterThanTwo);

//findIndex retorna o índice do primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4];
const firstIndexGreaterThanTwo = arr.findIndex((value) => value > 2);
console.log(firstIndexGreaterThanTwo);

//filter retorna um novo array com todos os elementos que satisfazem a condição
const arr = [1, 2, 3, 4];
const allValuesGreateThanTwo = arr.filter((value) => value > 2);
console.log(allValuesGreateThanTwo);

//indexOf retorna o primeiro índice em que um elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3];
const firstIndexOfItem = arr.indexOf(3);
console.log(firstIndexOfItem);

//lastIndexOf retorna o último índice em que um elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3];
const lastIndexOfItem = arr.lastIndexOf(3);
console.log(lastIndexOfItem);

//includes retorna um booleano verificando se determinado elemento existe no array
const arr = [1, 3, 3, 4, 3];
const hasItemOne = arr.includes(1);
console.log(hasItemOne);
const hasItemTwo = arr.includes(2);
console.log(hasItemTwo);

//some retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
const arr = [1, 3, 3, 4, 3];
const hasSomeEvenNumber = arr.some((value) => value % 2 === 0);
console.log(hasSomeEvenNumber);

const students = [
  { name: 'John', grade: 7 },
  { name: 'Jenny', grade: 5 },
  { name: 'Peter', grade: 4 },
];

console.log(students.some((student) => student.grade >= 7));
console.log(students.find((student) => student.grade >= 7));
console.log(students.findIndex((student) => student.grade >= 7));

//every retorna um booleano verificando se todos os itens de um array satisfazem a condição
const arr = [1, 3, 3, 4, 3];
const allEvenNumber = arr.every((value) => value % 2 === 0);
console.log(allEvenNumber);

const students = [
  { name: 'John', grade: 7 },
  { name: 'Jenny', grade: 5 },
  { name: 'Peter', grade: 4 },
];

console.log(students.every((student) => student.grade >= 7));

//sort ordena os elementos de um array de acordo dom a condição
const students = [
  { name: 'John', grade: 7 },
  { name: 'Jenny', grade: 5 },
  { name: 'Peter', grade: 4 },
];
const studentsSorted = students.sort(
  (current, next) => current.grade - next.grade
);
console.log(studentsSorted);
const studentsSortedreverse = students.sort(
  (current, next) => next.grade - current.grade
);
console.log(studentsSortedreverse);

//reverse inverte os elemento de um array
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

//join junta todos os elementos de um array, separados por um delimitador e retorna uma string
const arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));

//reduce retorna um novo tipo de dado iterando cada posição de um array
const arr = [1, 2, 3, 4, 5];
const arrTotal = arr.reduce((total, value) => (total += value), 0);
console.log(arrTotal);

const students = [
  { name: 'John', grade: 7 },
  { name: 'Jenny', grade: 5 },
  { name: 'Peter', grade: 4 },
];

const averageGrade =
  students.reduce((totalGrades, student) => (totalGrades += student.grade), 0) /
  students.length;
const allNames = students.reduce(
  (studentsNames, student) => (studentsNames += student.name + ' '),
  ''
);

console.log(averageGrade);
console.log(allNames);
