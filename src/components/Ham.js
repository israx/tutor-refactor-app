import RightNav from "./RightNav";
import styled from "styled-components";
import { useState } from "react";

const Ham = styled.div`
  position: absolute;
  right: 90px;
  display: grid;
  gap: 3px;
  z-index: 4444;
  cursor: pointer;
  div {
    height: 4.5px;
    border-radius: 4px;
    width: 30px;
    background: #000;
    transition: 0.3s ease;
    transform-origin: 4.5px;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(300px)" : "translateX(0))"};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export default function Hamburguer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Ham onClick={() => setOpen(!open)} open={open}>
        <div />
        <div />
        <div />
      </Ham>
      <RightNav open={open} />
    </>
  );
}
