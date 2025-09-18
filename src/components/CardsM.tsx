'use client'
import React from 'react';


type CardProps = {
    valor: string;
    virada: boolean;
    onClick: ()=> void;

}
const CardsM = ({ valor, virada, onClick }: CardProps) => {

    return (
    <div className='w-15 h-20 bg-gray-300 flex justify-center items-center text-2xl m-2.5 rounded-lg cursor-pointer'
        onClick={onClick}> 
        
    
        {virada ? valor : '?'}
    </div>
    );
};

export default CardsM;