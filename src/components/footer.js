import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <Wrapper>
      <FooterSection id="footer">
        <FooterLinks href="#" className="footer_logo">
          Ranjith Kumar Petlu
        </FooterLinks>
        <PermaLinks className="permaLinks">
          <li>
            <FooterLinks href="#">Home</FooterLinks>
          </li>
          <li>
            <FooterLinks href="#about">About</FooterLinks>
          </li>
          <li>
            <FooterLinks href="#experience">My Tech Knowledge</FooterLinks>
          </li>
          <li>
            <FooterLinks href="#contact">Contact</FooterLinks>
          </li>
        </PermaLinks>
        <FooterSocials className="footer_socials">
          <FooterLinks className="social"  target="_blank"  href="https://www.facebook.com/ranjithkumar.petlu?mibextid=ZbWKwL">
            <FaFacebookF />
          </FooterLinks>
          <FooterLinks className="social" target="_blank" href="https://www.instagram.com/ran_jith___kum_ar?igsh=MjhkeDl5Z2Rjc293">
            <FiInstagram />
          </FooterLinks>
          <FooterLinks className="social" href="https;//twitter.com" target="_blank">
            <IoLogoTwitter />
          </FooterLinks>
        </FooterSocials>
        <FooterCopy className="footer_copy">
          <small>&copy; Ranjith Kumar Petlu All Rights & Wrongs Reserved</small>
        </FooterCopy>
      </FooterSection>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.div`
  margin-top: 4rem;
`;
const FooterSection = styled.footer`
  background-color: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 1rem;
  margin-top: 6rem;

  .footer_logo {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
  }
`;

const FooterLinks = styled.a`
  color: var(--color-bg);
`;

const PermaLinks = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 auto 3rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const FooterSocials = styled.div`
  .social {
    background-color: var(--color-bg);
    color: var(--color-white);
    padding: 0.5rem 0.5rem 0.3rem;
    margin: 1rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
  }
  .social:hover {
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
  }
  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }
`;
const FooterCopy = styled.div`
  margin: 4rem auto;
  color: var(--color-bg);
`;
