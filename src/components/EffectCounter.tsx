import { useState } from "react";

export default function EffectCounter() {
    const [count, setCount] = useState(0);

        return (
            <div className="text-center p-10">
            <h1>Contagem: {count}</h1>
            <button
            className="bg-amber-100 rounded p-2 m-2 hover:bg-amber-200"
            onClick={() => setCount(count + 1)}
            >
                Incrementar
            </button>
            
            <button
            className="bg-blue-100 roundwd p-2 m-2
            hover:bg-blue-200"
            onClick={()=>{setCount(0)}}>
                Resetar
            </button>
            </div>
        );
}