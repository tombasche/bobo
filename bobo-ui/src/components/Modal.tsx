import styled from 'styled-components';

interface ModalProps {
  title: string;
  isOpen: boolean;
}

const ModalDiv = styled.div`
  z-index: auto;
  display: 'flex';
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  position: fixed;
  width: 60%;
  height: 50%;
  padding: 2em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: #001e32;
`;

export default function Modal({ title, isOpen }: ModalProps) {
  return isOpen ? (
    <ModalDiv>
      <Container>
        <h2>{title}</h2>
      </Container>
    </ModalDiv>
  ) : null;
}
