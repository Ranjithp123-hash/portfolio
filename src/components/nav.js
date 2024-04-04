import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Wrapper>
      <Navigation>

        <a
          href="#home"
          onClick={() => {
            setActiveNav("#");
          }}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => {
            setActiveNav("#about");
          }}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => {
            setActiveNav("#experience");
          }}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => {
            setActiveNav("#services");
          }}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActiveNav("#contact");
          }}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </Navigation>
    </Wrapper>
  );
};

export default Nav;
const Wrapper = styled.div``;
const Navigation = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-width;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  border-radius: 3rem;
  -moz-backdrop-filter: blur(10px);
  backdrop-filter: blur(15px);
  font-size: 1.3rem;

  a {
    background: transparent;
    padding: 0.4rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
  }

  a:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  a.active {
    color: var(--color-bg);
    background: var(--color-primary);
  }
`;
