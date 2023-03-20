console.log("Trabalhando com listas:");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 18;
const estaAcompanhada = true; // tipo booleano: true e false
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade.");
  console.log(listaDeDestinos.splice(2, 1));
} else if (estaAcompanhada == true) {
  console.log("Comprador está acompanhado(a).");
  console.log(listaDeDestinos.splice(2, 1));
} else {
  console.log("Comprador não é maior de idade, portanto, não é possível vender.");
}

//------------------------------------------------------------------------------------//

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Compra válida.");
    console.log(`${listaDeDestinos.splice(2, 1)}\n`);
  } else {
    console.log("Comprador não é maior de idade, portanto, não é possível vender.");
  }

  console.log("Embarque: \n\n")
  if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem!!");
  } else {
    console.log("Passagem não foi comprada, não será possível embarcar.");
  }