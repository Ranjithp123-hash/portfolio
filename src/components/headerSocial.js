import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <Wrapper>
      <div className="header_socials">
        <a href="https://github.com/Ranjithp123-hash" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/ranjith-kumar-a0217822a/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/ran_jith___kum_ar?igsh=MjhkeDl5Z2Rjc293" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </Wrapper>
  );
};

export default HeaderSocial;
const Wrapper = styled.div`
  .header_socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;
    /* Media Queries for Small sized devices*/
    @media (max-width: 600px) {
      display: none;
    }
  }

  .header_socials::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }
`;
