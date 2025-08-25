'use client'

import { useState } from "react"

export default function MiniDisplay() {
    const [display, setDisplay] = useState('')

    const calcular = () => {
//tente
try {
const resultado = new Function(`return ${display}`)()
    
    if (isNaN(resultado)) {
        setDisplay('Erro')
    } else {
        setDisplay(String(resultado))
    }
    } catch {
        setDisplay('Erro')
    }
    }

    const adicionarAoDisplay = (valor: string) => {
    setDisplay(display + valor)
    }

    return (
    <div className="flex flex-col items-center mt-10">
      {/* display */}
    <div className="flex justify-center items-center rounded
    p-4 w-60 h-15 mb-5 text-center text-xl border
    border-gray-400 overflow-x-scroll overflow-y-hidden">
        {display}
    </div>

      {/* teclado numerico */}
    <div className="grid grid-cols-3 gap-2 w-60 h-80">
    {['0','1','2','3','4','5','6','7','8','9'].map((num) => (
        <button
        key={num}
        onClick={() => adicionarAoDisplay(num)}
        className="bg-gray-300 rounded p-2">
        {num}
        </button>
    ))}

        {/* APAGAR */}
        <button 
        onClick={() => setDisplay(display.slice(0, -1))}
        className="bg-red-300 rounded p-2 col-span-2">
        C
        </button>

        {/* Operadores */}
        <button onClick={() => adicionarAoDisplay('+')} className="bg-green-500 rounded p-2">+</button>
        <button onClick={() => adicionarAoDisplay('-')} className="bg-green-500 rounded p-2">-</button>
        <button onClick={() => adicionarAoDisplay('*')} className="bg-green-500 rounded p-2">*</button>
        <button onClick={() => adicionarAoDisplay('/')} className="bg-green-500 rounded p-2">/</button>

        {/* Igual */}
        <button onClick={calcular} className="bg-gray-500 rounded p-2 col-span-3">=</button>
        </div>
    </div>
    )
}