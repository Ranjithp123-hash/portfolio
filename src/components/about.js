import React from "react";
import styled from "styled-components";
import Me from "../Assets/me-abouts.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <Wrapper>
      <AboutSection id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <AboutContainer className="container about_container">
          <AboutMe className="about_me">
            <div className="about_me-img">
              <AboutMeImg   src={Me} alt="my_image" />
            </div>
          </AboutMe>
          <div className="about_content">
            <AboutCards className="about_cards">
              <AboutCard className="about_card">
                <FaAward className="award_icon" />
                <Desc>Experience</Desc>
                <Small>6 Months Internship</Small>
              </AboutCard>
              <AboutCard className="about_card">
                <FiUsers className="award_icon" />
                <Desc>Designation</Desc>
                <Small>Back End Developer</Small>
              </AboutCard>
              <AboutCard className="about_card">
                <VscFolderLibrary className="award_icon" />
                <Desc>Projects</Desc>
                <Small>2 Completed</Small>
                <h1>Hello Git</h1>
              </AboutCard>
            </AboutCards>
            <Content>
              Developed and maintained RESTful APIs for various web applications using NODE.JS and Express.js.
              Created and optimized database queries and stored procedures to interact with MS SQL Server databases.
              Implemented authentication and authorization mechanisms to secure API endpoints and user data ! 
            </Content>
            <a href="#contact" className="btn btn_primary">
              Let's Talk
            </a>
          </div>
        </AboutContainer>
      </AboutSection>
    </Wrapper>
  );
};

export default About;
const Wrapper = styled.div`
  margin-top: 4rem;
`;
// Stylings for About Section
const AboutSection = styled.section`
  /* height: 100vh; */
`;
// Stylings for Container Class
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  /* Media Queries for large sized devices*/
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media (max-width: 600px) {
    margin: auto 1rem;
  }
`;
// Styling for Image Side
const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  /* Media Queries for large sized devices*/
  @media (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  /* Media Queries for Small sized devices*/
  @media (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

// Stylings for Image
const AboutMeImg = styled.img`
  height: 360px;
  // weight : 100%;
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    height: 100%;
    width: 80%;
  }
`;
// Styling for Cards
const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  /* Media Queries for Small sized devices*/
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
// Styling for About Card
const AboutCard = styled.article`
  background-color: var(--color-bg-variant);
  padding: 2rem;
  border: 1px solid transparent;
  border-radius: 1rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: pointer;
  }
  /* Icon Styling */
  .award_icon {
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;
// Styling for Card Title
const Desc = styled.h5`
  font-size: 0.95rem;
`;
// Styling for Small Tag
const Small = styled.small`
  color: var(--color-light);
  font-size: 0.9rem;
`;
// Styling for Paragraph Text
const Content = styled.p`
  color: var(--color-light);
  margin: 2rem 0 2.6rem;

  /* Media Queries for large sized devices*/
  @media (max-width: 1024px) {
    margin: 1rem 0 1.5rem;
  } /* Media Queries for Small sized devices*/
  @media (max-width: 600px) {
    margin: 1.5rem 0;
    text-align: center;
  }
`;
