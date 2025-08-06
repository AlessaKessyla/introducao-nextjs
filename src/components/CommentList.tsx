// src/components/CommentList.tsx
import Comment from "./Comment";

    type CommentType = {
        name: string;
        message: string;
        timestamp: string;
    };

    type CommentListProps = {
        comments: CommentType[];
};

    export default function CommentList({ comments }: CommentListProps) {
        return (
        <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Comentários</h3>
        {comments.map((comment, index) => (
        <Comment
            key={index}
            name={comment.name}
            message={comment.message}
            timestamp={comment.timestamp}
        />
    ))}
    </div>
    );
}