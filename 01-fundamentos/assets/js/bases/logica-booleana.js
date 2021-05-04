const regresaTrue = () => {
    console.log('Regrasa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regrasa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

// ...

console.warn('ASIGNACIONES');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo';

console.log({a1});