function Pessoa(customProperties) {
  return {
    name: 'Ricardo',
    lastName: 'Miyoshi',
    ...customProperties,
  };
}

const p = Pessoa({ name: 'Custom Name', age: 27 });
console.log(p);
