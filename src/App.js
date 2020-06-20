import React, { Fragment } from "react";
import "./config/reactotron";
import Global from "./styles/global";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Wrapper, Container, Content } from "./styles/components";
import store from "./store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Global />
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
