// 'use client'

import { Heart } from "lucide-react";
import { useState } from "react";

export default function LikeAccount() {

    const [likes, setLikes] = useState (0);

    const handleLikes = () => {
        setLikes (likes + 1 )
    };

    return (

        <button onClick={handleLikes}
        className=" flex items-center gap-2  mx-2 my-1 p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-300 transition-all">
        
        <Heart 
        color="red"
        className="transition-all mx-2"/>
        {likes}

        </button>
    )


}
