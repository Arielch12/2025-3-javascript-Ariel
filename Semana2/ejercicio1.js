const { ask } = require('../helpers/input.js');

async function saludar(nombre) {
    console.log(`Hola estimado: ${nombre}), espero tengass un buen dia...`);

}

async function main() {
    const personas =  ["Ana", "Juan", "Karla", "Maria", "Pedro"];
    console.log("---------------Ascendente---------------------");
    for (let i = 0; i < personas.length; i++) {
        saludar(personas[i]);
    }

    console.log("--------------Descendente------------------------");
    for (let j = personas.length - 1; j >= 0; j--){
        saludar(personas[j]);
    }

    let limite = Number(await ask("hasta que numero quieres contar: "));
    let x = 1;
    while(x <= limite){
        console.log("Contador actual; ", x);
        x++;
    }

}


main();