import React from "react";

import { Container, Search, User } from "./style";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="search" />
    </Search>
    <User>
      <img
        src="https://avatars1.githubusercontent.com/u/37960030?v=4"
        alt="avatar"
      />
      Duane Gabriel
    </User>
  </Container>
);

export default Header;
