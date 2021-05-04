let games = ['God of War', 'Mortal Kombat 11', 'FIFA 21', 'Control'];
console.log('Largo: ', games.length); // Array's length

let last = games[games.length - 1];
console.log({last});

games.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice, arr} );       
});

let newLength = games.push( 'Battlefront II' );
console.log( {newLength, games} );

newLength = games.unshift('Tekken 7');
console.log( {newLength, games} );

let gameDeleted = games.pop();
console.log({gameDeleted, games});

let position = 1;
let gamesDeleted = games.splice(position, 2);
console.log({gamesDeleted, games});

let findFifa = games.indexOf('FIFA 21');
console.log(findFifa);