"use client"
import { useState } from "react";
import Image from "next/image";

export default function Lampada(){
    const [ligada, setLigada] = useState(false);

    function LigarOuDesligar() {
        setLigada(!ligada);
    }

    return (
        <div className="text-center p-10 items-center">
            <Image
            src={ligada ? "/lampadaoff.png" : "/lampada.png"}
            alt="Lâmpada"
            width={160}
            height={160} />
            

            <Image
            src={ligada ? "/interruptor.png" : "/interruptor.png"}
            alt="Interruptor"
            width={80}
            height={80} 
            onClick={LigarOuDesligar}
            className="cursor-pointer"
            />

        </div>

    );
}
