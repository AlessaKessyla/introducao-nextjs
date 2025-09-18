"use client";

import { useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    return (
        <button
        onClick={() => setDark(!dark)}
        style={{
        marginTop: 20,
        padding: "8px 12px",
        borderRadius: 6,
        background: dark ? "#333" : "#eee",
        color: dark ? "#fff" : "#000",
        }}
        >
        {dark ? "Modo Claro" : "Modo Escuro"}
        </button>
    );
}
