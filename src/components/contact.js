import React from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(
        "service_drxs4vn",
        "template_4v96ome",
        form.current,
        "Z-6ZuitF2J-9xEg7K"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result)
          // form = ''
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent")
        }
      );
  };
  return (
    <Wrapper>
      <ContactSection id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <ContactContainer className="container contact_container">
          <ContactOptions className="contact_options">
            <ContactOption className="contact_option">
              <MdOutlineEmail className="contact_option_icon" />
              <h4>Email</h4>
              <h5>ranjithkumarp908@gmail.com</h5>
              <a rel="noreferrer" href = "mailto:ranjithkumarp908@gmail.com" target="_blank">
                Send Message
              </a>
            </ContactOption>
            <ContactOption className="contact_option">
              <FaWhatsapp className="contact_option_icon" />
              <h4>Whatsapp</h4>
              <h5>+91 8897353839</h5>
              <a rel="noreferrer" href="https://wa.me/8897353839" target="_blank">
                Send Message
              </a>
            </ContactOption>
            <ContactOption className="contact_option">
              <RiMessengerLine className="contact_option_icon" />
              <h4>Messenger</h4>
              <h5>Ranjith Kumar</h5>
              <a rel="noreferrer" href="https://m.me/ranjithkumar.petlu" target="_blank">
                Send Message
              </a>
            </ContactOption>
          </ContactOptions>
          <Form ref={form} onSubmit={sendEmail}>
            <StyledInput
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <StyledInput
              type="email"
              name="email"
              placeholder="Enter Your Mail"
              required
            />
            <StyledTextarea
              type="text"
              name="message"
              rows="7"
              placeholder="Enter Message"
              required
            />
            <button  value="Send" type="submit" className="btn btn-primary">
              Send Message
            </button>
          </Form>
        </ContactContainer>
      </ContactSection>
    </Wrapper>
  );
};

export default Contact;
const Wrapper = styled.div``;
const ContactSection = styled.section`
  margin: 3rem auto;
`;
const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;
const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const ContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  text-align: center;
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
  .contact_option_icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  a {
    font-size: 0.8em;
    margin-top: 0.7rem;
    display: inline-block;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.5rem;
  background: transparent;
  border-color: var(--color-primary-variant);
  color: var(--color-white);
  font-size: 1rem;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.5rem;
  background: transparent;
  border-color: var(--color-primary-variant);
  color: var(--color-white);
  font-size: 1rem;
  resize: none;
`;
