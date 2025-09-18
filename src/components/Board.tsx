'use client'

import React, { useState } from 'react';
import CardsM from './CardsM';

const cartasArray = [
{ id: 1, valor: "😒", virada: false },
{ id: 2, valor: "🎶", virada: false },
{ id: 3, valor: "❤️", virada: false },
{ id: 4, valor: "🤣", virada: false },
{ id: 5, valor: "🍕", virada: false },
{ id: 6, valor: "🎏", virada: false },
{ id: 7, valor: "🌟", virada: false },
{ id: 8, valor: "🍄", virada: false },
{ id: 9, valor: "😒", virada: false },
{ id: 10, valor: "🎶", virada: false },
{ id: 11, valor: "❤️", virada: false },
{ id: 12, valor: "🤣", virada: false },
{ id: 13, valor: "🍕", virada: false },
{ id: 14, valor: "🎏", virada: false },
{ id: 15, valor: "🌟", virada: false },
{ id: 16, valor: "🍄", virada: false },
];

//handleClick(index)

export default function Board() {

    const [cartas, setCartas] = useState(cartasArray)

    function handleClick (id: number){
        const novasCartas = cartas.map(cartas => {
            if(cartas.id === id ) {

                return{
                    id: cartas.id,
                    valor: cartas.valor,
                    virada: !cartas.virada
                };
            } else {

                return cartas;
            }
        });
            setCartas(novasCartas);
        
    }

return (
    <div className='grid grid-cols-4 gap-2 justify-items-center'>

        {cartas.map(carta => (
        <CardsM 
            key={carta.id} 
            valor={carta.valor} 
            virada={carta.virada}
            onClick= {() => handleClick(carta.id)}
            />
        ))}
    </div>
);
}