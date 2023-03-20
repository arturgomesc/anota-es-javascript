console.log('Trabalhando com atribuição de variáveis');

const idade = 29;
const nome = "Artur";
const sobrenome = "Gomes";

console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);
console.log(`meu nome é ${nome + " " + sobrenome}`);

//nome = nome + sobrenome; dessa forma, dará erro, pois para funcionar é necessário atribuir o texto a um let, e não const
//console.log(nome); 

let nome1 = "Artur";
let sobrenome1 = "Gomes";

nome1 = nome1 + sobrenome1;

console.log(nome1);