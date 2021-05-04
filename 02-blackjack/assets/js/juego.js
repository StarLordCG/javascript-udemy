//  Función anónima autoinvocada => Patrón módulo
const miModulo = (() => {

    'use strict'

    let deck = [];
    const tipos = [ 'C', 'D', 'H', 'S' ],
          especiales = [ 'A', 'J', 'Q', 'K' ];

    let puntosJugadores = [];

    //  REFERENCIAS DE HTML

    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
         score = document.querySelectorAll('small');


    // INICIALIZACIÓN DEL JUEGO
    const inicializarJuego = ( numJugadores = 2 ) => {
        
        deck = crearDeck();
        puntosJugadores = [];

        for ( let i = 0; i < numJugadores; i++ ) {
            puntosJugadores.push(0);

        }

        score.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled = false;
        btnDetener.disabled = false;


    }

    // Función que crea una baraja
    const crearDeck = () => {

        deck = [];

        for( let i = 2; i <= 10; i++ ) {
            for(let tipo of tipos) {
                deck.push( i + tipo );    
            }
        }

        for( let tipo of tipos ) {
            for( let especial of especiales ) {
                deck.push( especial + tipo );
            }
        }

        return _.shuffle(deck);

    }



    // Función que permite tomar una carta

    const pedirCarta = () => {

        if ( deck.length === 0 ) {
            throw 'No hay cartas en el mazo';
        }

        return deck.pop();;

    }

    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        // let puntos = 0;

        return ( isNaN(valor) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;

    }


    // TURNO: 0 = Primer Jugador y el útlimo será la PC

    const acumularPuntos = ( carta, turno ) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        score[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];

    }

    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; // Introduce el valor de la carta
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }


    const determinarGanador = () => {

        const [ puntosMinimos, puntosPC  ] = puntosJugadores;

        setTimeout(() => {

            if (puntosPC === puntosMinimos){
                alert('Empate!');
            } else if ( puntosMinimos > 21 ) {
                alert('Perdiste!');
            } else if ( puntosPC > 21 ) {
                alert('Ganaste!');
            } else {
                alert('Perdiste!');
            }
            

        }, 100);

    }

    // TURNO DE LA PC

    const turnoPC = (puntosMinimos) => {

        let puntosPC = 0;

        do {
            
            const carta = pedirCarta();
            puntosPC = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ( (puntosPC < puntosMinimos) && (puntosMinimos <= 21) );    

        determinarGanador();        
    }

    //  EVENTOS

    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();

        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21 ) {
            console.warn('Has perdido');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoPC(puntosJugador);
        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoPC(puntosJugador);
        }

    });

    btnDetener.addEventListener( 'click', () => {

        
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPC(puntosJugadores[0]);

    } );

    btnNuevo.addEventListener( 'click', () => {

        inicializarJuego();

    } );

    return {
        
        nuevoJuego: inicializarJuego

    };

})(); 


