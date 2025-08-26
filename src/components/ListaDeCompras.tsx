'use client'

import { useState } from "react";

export default function ListaDeCompras() {


    const items = [
    { objeto: "computador", comprado: false },//0
    { objeto: "microfone", comprado: false },//1
    { objeto: "iphone 13 Pro", comprado: false },///2
    { objeto: "fone Go", comprado: false },
    ];


    const [lista, setLista] = useState(items);

    const handleCheck = (index: number) => {
        // nao modificar a lista no estado atual
        const novaLista = [...lista];

        // usando forEach p percorrer
        novaLista.forEach((item, i)=>{
            if (i === index){
                item.comprado = !item.comprado; // inverte o valor
                
            }
        });
        
        setLista(novaLista);
    };


        
    return (
    <div>
    
        <h1>Lista de Compras</h1>
        <ul>
            {lista.map((item, index) => (
                <li key={index}>
                    <input 
                    type="checkbox"
                    checked={item.comprado}
                    onClick={() => handleCheck(index)}
                    ></input>
                    <span className={item.comprado ? "line-through" : ""}>
                        {item.objeto}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);
}