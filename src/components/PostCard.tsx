'use client'

import { useState } from "react"

export default function FeedPage (){
    //criando a lista de post
    const [post, setPost] = useState ([
    {id: 1, usuario: 'Alessa', conteudo: 'Meu primeiro post', like: 0},
    {id: 2, usuario: 'Ian', conteudo: 'Estudando React hoje!', lile: 2},
    {id: 3, usuario: 'Nilson', conteudo: 'Gazeando aula', like: 7},
    ])

    const handleLikes = (id : number) => {
        setPost (
            post.map((post ) => 
                post.id === id ? {...post, likes : post.likes + 1 }
                : post)
        );
    };



    };