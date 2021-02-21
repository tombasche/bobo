import styled from 'styled-components';

interface MessageProps {
  message: string;
}

const MessageDiv = styled.div`
  padding: 0.5em;
  background: #f8fa7d;
  margin-bottom: 1em;
  border: 1px solid #e2e600;
  border-left: 5px solid #c6c900;
`;

const Message = ({ message }: MessageProps) => {
  return <MessageDiv>{message}</MessageDiv>;
};

export default Message;
