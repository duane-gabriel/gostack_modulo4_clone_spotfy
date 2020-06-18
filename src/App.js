import React, { Fragment } from "react";
import Global from "./styles/global";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

function App() {
  return (
    <Wrapper>
      <Global />
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
