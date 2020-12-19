import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  @media screen and (max-width: 720px) {
    position: fixed;
    z-index: 111;
    width: 250px;
    top: 0;
    right: 0;
    min-height: 100vh;
    background: var(--blue);
    box-shadow: -2px 2px 2px var(--background);
    flex-direction: column;
    transition: 0.3s ease-in-out;
    opacity: ${({ open }) => (open ? "1" : "0")};
    pointer-events: ${({ open }) => (open ? "initial" : "none")};
  }
`;

export default function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li></li>
      <li>
        <Link to="/tutor"> Tutors</Link>
      </li>
      <li>
        <Link to="/tutor/add">Become a Tutor</Link>
      </li>
      <li>
        <Link to="/tutor/find">Look for a Tutor</Link>
      </li>
    </Ul>
  );
}
