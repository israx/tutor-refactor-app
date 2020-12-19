import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "./Ham";

const NavStyle = styled.nav`
  background: var(--blue);
  position: fixed;
  z-index: 2222;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  --content: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    flex-grow: 1;
    max-width: 800px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: var(--content);
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--white);
    transition: 0.3s ease;
    font-weight: 200;
    &:hover {
      color: #fff;
    }
  }
  @media screen and (min-width: 1200px) {
    ul {
      --content: center;
    }
  }
`;
export default function Nav() {
  return (
    <NavStyle>
      <Link to="/tutor">LOGO</Link>
      <Hamburger />
    </NavStyle>
  );
}
