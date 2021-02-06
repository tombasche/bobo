import { RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';

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

interface ModalProps {
  title: string;
  isOpen: boolean;
  close: () => void;
}

const Modal = ({ title, isOpen, close }: ModalProps) => {
  const useCloseOnOutsideClick = (ref: RefObject<HTMLDivElement>) => {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          close();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(wrapperRef);

  return isOpen ? (
    <ModalDiv>
      <Container ref={wrapperRef}>
        <h2>{title}</h2>
      </Container>
    </ModalDiv>
  ) : null;
};

export default Modal;
