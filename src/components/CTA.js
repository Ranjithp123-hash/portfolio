import React from "react";
import styled from "styled-components";
import Ranjith from "../Assets/Ranjith_CV.pdf";

const CTA = () => {
  return (
    <Wrapper>
      <div className="cta">
        <a href={Ranjith} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn_primary">
          Let's Talk
        </a>
      </div>
    </Wrapper>
  );
};

export default CTA;
const Wrapper = styled.div`
  .cta {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2.6rem;
    gap: 1.5rem;
  }
`;
