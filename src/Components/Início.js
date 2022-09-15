import React from "react";
import styled from "styled-components";

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Main = styled.main`
  margin: 5vw;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -56vw;
    margin-top: 35vh;
    height: 50vh;
    width: 20vw;
  }
`;

const Tag = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 33vh;
  margin-left: -135vh;
  height: 10vh;
  width: 30vw;
  position: absolute;
`;

function Home() {
  return (
    <Container>
      <Main>
        <Tag>What's your flick?</Tag>
        <img src="https://imagizer.imageshack.com/img923/7258/VCz4r7.png" />
      </Main>
    </Container>
  );
}
