import styled from 'styled-components';

type MessageType = 'warning' | 'success';

interface MessageProps {
  message: string;
  type: MessageType;
}

interface MessageColourScheme {
  background: string;
  border: string;
  leftBorder: string;
  text: string;
}

const success: MessageColourScheme = {
  background: '#1AFF1A',
  border: '#00FF00',
  leftBorder: '#00C400',
  text: '#004800',
};

const warning: MessageColourScheme = {
  background: '#f8fa7d',
  border: '#e2e600',
  leftBorder: '#c6c900',
  text: 'black',
};

const MessageDiv = styled.div`
  padding: 0.5em;
  background: ${(props: { type: MessageType }) =>
    props.type === 'warning' ? warning.background : success.background};
  margin-bottom: 1em;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid
    ${(props: { type: MessageType }) =>
      props.type === 'warning' ? warning.border : success.border};
  border-left: 5px solid
    ${(props: { type: MessageType }) =>
      props.type === 'warning' ? warning.leftBorder : success.leftBorder};
  color: ${(props: { type: MessageType }) =>
    props.type === 'warning' ? warning.text : success.text};
`;

const Message = ({ message, type }: MessageProps) => {
  return (
    <MessageDiv type={type}>
      <em>{message}</em>
    </MessageDiv>
  );
};

export default Message;
