console.log("\nTrabalhando com loops:");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

while(contador < 3) {
    if (listaDeDestinos[contador] == destino){
        console.log("destino existe");
    } else {
        console.log("destino não existe.");
    }

    contador += 1;
}


