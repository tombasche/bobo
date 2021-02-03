interface BookCommentsProps {
  comments: string;
}

export default function BookComments({ comments }: BookCommentsProps) {
  return <p>Comments: {comments} </p>;
}
