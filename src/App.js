import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
const App = () => {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default App;
const Wrapper = styled.div``;
