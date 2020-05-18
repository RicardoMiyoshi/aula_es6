const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log(
  'Número transformado em string: ',
  numberAsString,
  typeof numberAsString
);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas cadas decimais:', fixedTwoDecimals);

//Trasforma uma string em float
console.log(
  '\nString parseada para float:',
  parseFloat('13.22'),
  typeof parseFloat('13.22')
);

//Transforma uma string em int
console.log(
  '\nString parseada para int:',
  parseInt('13.20'),
  typeof parseInt('13.20')
);
