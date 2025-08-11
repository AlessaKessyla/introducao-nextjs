import LikeAccount from "./like";

type CommentProps = {
    name: string;
    message: string;
    timestamp: string;
}

export default function Coment ({ name, message, timestamp}: CommentProps) {
    return ( 
        <div className=" border p-3 mb-2 rounded bg-gray-100">
            <h4 className=" font-bold">{name}</h4>
            <p>{message}</p>
            <span className="text-sm text-gray-500">{timestamp}</span>
            <LikeAccount/>
        </div>
    );

}