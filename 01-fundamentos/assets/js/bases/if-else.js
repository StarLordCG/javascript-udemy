const hoy = new Date(); // {}
let dia = hoy.getDay();
console.log({dia}); // 0 => Dom, 1 => Lun, ...

if( dia === 0 ) {
    console.log('Domingo');
} 

else{
    console.log('No es domingo');
}

//  =   ->  regresa asignación  
//  ==  ->  Valores iguales
//  === ->  Valores y tipados iguales


//  EJERCICIO

dia = 3;

const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

const diaLetras2 = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

console.log(diaLetras[dia]);
console.log(diaLetras[dia]);