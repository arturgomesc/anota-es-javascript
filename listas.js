console.log("Trabalhando com listas:");

//const salvador = "Salvador";
//const saoPaulo = "São Paulo";
//const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array( //"new" é uma palavra reservada da linguagem, portanto, não é possível criar const, var, let com "new"
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

console.log('Destinos possíveis:');
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], " ", listaDeDestinos[2]);

listaDeDestinos.push('Belém') // "empurrando" um elemento para a lista
listaDeDestinos.splice(1, 2) // remove elemento conforme a posição dele 



 

