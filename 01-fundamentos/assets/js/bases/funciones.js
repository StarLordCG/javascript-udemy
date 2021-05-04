const saludar = (nombre) => {
    console.log('Hola ' + nombre);
    return 1;
}

const retorno = saludar('Rafael');
console.log({retorno});


function sumar( a, b ) {
    return a + b;
}

console.log(sumar(1, 2));

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());