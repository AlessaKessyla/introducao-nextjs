// src/app/page.tsx
"use client";

import { useState } from "react";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";

type CommentType = {
    name: string;
    message: string;
    timestamp: string;
};

export default function Home() {
    const [comments, setComments] = useState<CommentType[]>([]);

    function handleAddComment(name: string, message: string) {
    const timestamp = new Date().toLocaleString();
    const newComment = { name, message, timestamp };
    setComments([newComment, ...comments]);
    }

    return (
        <div>
            <main className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Sistema de Comentários</h1>
            <CommentForm onAddComment={handleAddComment} />
            <CommentList comments={comments} />
            </main>
        </div>
    );
}