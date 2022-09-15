import React, { Component } from "react";
import Início from "./Components/Início";
import Filmes from "./Components/Filmes";
import Series from "./Components/Séries";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;


  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  font-size: 50px;
  font-weight: 400px;
  margin-top: 5vw;
  color: #46c5a4;
  text-shadow: 2px 2px #2a977b;
  font-family: "Bebas Neue", cursive;
  position: absolute;
`;

const Nav = styled.nav`
  height: 23vh;
  width: 100%;
  display: flex;
  margin-left: 60%;
  justify-content: space-around;
  align-items: flex-end;
`;

const List = styled.ul`
  display: flex;
  padding: 1vw;
  font-size: 2vw;
`;
const Item = styled.li`
  padding: 0.5vw;
  width: 100%;
  font-size: 1.5vw;
  color: #0c9561;
  a:visited {
    color: #19c785;
  }
  a:link {
    text-decoration: none;
  }
`;

const Content = styled.div`
  margin-top: 40px;
`;

const Box = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Box>
        <GlobalStyle />
        <Title>KellyFlix</Title>
        <Router>
          <Nav>
            <List>
              <Item>
                <Link to="/">Início</Link>
              </Item>
              <Item>
                <Link to="/Filmes">Filmes</Link>
              </Item>
              <Item>
                <Link to="/Series">Séries</Link>
              </Item>
            </List>
          </Nav>

          <Content>
            <Routes>
              <Route path="/" element={<Início />} />
              <Route path="Filmes" element={<Filmes />} />
              <Route path="Series" element={<Series />} />
            </Routes>
          </Content>
        </Router>
      </Box>
    );
  }
}

export default App;
