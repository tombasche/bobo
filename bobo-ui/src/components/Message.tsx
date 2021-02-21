interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => {
  return <p>{message}</p>;
};

export default Message;
