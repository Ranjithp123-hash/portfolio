import React from "react";
import styled from "styled-components";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <Wrapper>
      <ExperienceSection id="experience">
        <h5>Skills I Have</h5>
        <h2>My Tech Knowledge</h2>
        <ExperienceContainer className="container experience_container">
          {/* Front - end Experience */}
          <FrontEndDiv className="front-end_experience">
            <ExpTitle>Front-end Development</ExpTitle>
            <ExpContent className="experience_content">
              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="small_text">Experienced</small>
                </div>
              </ExpDetails>
              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="small_text">Experienced</small>
                </div>
              </ExpDetails>
              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>
              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>
              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  {" "}
                  <h4>Tailwind CSS</h4>
                  <small className="small_text">Beginner</small>
                </div>
              </ExpDetails>
              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  {" "}
                  <h4>React JS</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>
              {/* <ExpDetails className="experience_details"> */}
                {/* <BsPatchCheckFill className="icon" />
                <div>
                  {" "}
                  <h4>Gatsby JS</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails> */}
            </ExpContent>
          </FrontEndDiv>
          {/* Backend Experience */}
          <BackEndDiv className="backend_experience">
            <ExpTitle>Backend Development</ExpTitle>
            <ExpContent className="experience_content">
              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>

              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  {" "}
                  <h4>Python</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>

              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  <h4>Mongo DB</h4>
                  <small className="small_text">Beginner</small>
                </div>
              </ExpDetails>

              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  <h4>My SQL</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>

              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  {" "}
                  <h4>MS SQL</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>

              <ExpDetails className="experience_details">
                <BsPatchCheckFill className="icon" />
                <div>
                  {" "}
                  <h4>Sqlite</h4>
                  <small className="small_text">Intermediate</small>
                </div>
              </ExpDetails>
            
            </ExpContent>
          </BackEndDiv>
        </ExperienceContainer>
      </ExperienceSection>
    </Wrapper>
  );
};

export default Experience;
const Wrapper = styled.div`
  margin-top: 4rem;
`;
const ExperienceSection = styled.section`
  /* height: 100vh; */
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

const FrontEndDiv = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  transition: var(--transition);
  &:hover {
    border-color: var(--color-primary-variant);
    cursor: pointer;
    background: transparent;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    /* width: 80%; */
    padding: 2rem 1rem;
  }
`;
const BackEndDiv = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  transition: var(--transition);
  &:hover {
    border-color: var(--color-primary-variant);
    cursor: pointer;
    background: transparent;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    /* width: 80%; */
    padding: 2rem 1rem;
  }
`;
const ExpTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

const ExpContent = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem;
    gap: 1rem;
  }
`;

const ExpDetails = styled.article`
  display: flex;
  gap: 1rem;

  .icon {
    margin-top: 5px;
    color: var(--color-primary);
  }
`;
