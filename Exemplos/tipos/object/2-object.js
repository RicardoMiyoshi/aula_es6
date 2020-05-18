const user = {
  name: 'Ricardo',
  lastName: 'Miyoshi',
};

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear propriedades de objetos não é recomendado para manter a imutabilidade
Object.assign(user, { fullName: 'Ricardo Miyoshi' });

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log(
  '\nRetorna um novo objeto mergeando dois ou mais objetos',
  Object.assign({}, user, { age: 26 })
);
console.log(user);

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObject após as alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Ricardo' };
Object.seal(person);

person.name = 'Ricardo Miyoshi';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);
