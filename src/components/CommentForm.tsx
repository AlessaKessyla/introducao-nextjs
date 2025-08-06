"use client"
// src/components/CommentForm.tsx
import { useState } from "react";

    type CommentFormProps = {
    onAddComment: (name: string, message: string) => void;
};

    export default function CommentForm({ onAddComment }: CommentFormProps) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !message) return;

    onAddComment(name, message);
    setName("");
    setMessage("");
    }

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        />
        <textarea
        placeholder="Sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
        />
        <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
        Enviar
        </button>
    </form>
    );
}