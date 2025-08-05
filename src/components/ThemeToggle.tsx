// ATIVIDADE 03
// components/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [modoEscuro, setModoEscuro] = useState(false);

    useEffect(() => {
    document.body.style.backgroundColor = modoEscuro ? '#222' : '#fff';
    document.body.style.color = modoEscuro ? '#fff' : '#000';
    }, [modoEscuro]);

    return (
    <button onClick={() => setModoEscuro(!modoEscuro)}>
    Alternar para modo {modoEscuro ? 'claro' : 'escuro'}
    </button>
    );
}
