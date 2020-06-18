import React, { Fragment } from "react";
import Global from "./styles/global";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import { Wrapper, Container } from "./styles/components";

function App() {
  return (
    <Wrapper>
      <Global />
      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
