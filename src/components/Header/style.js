import styled from "styled-components";

import SerachIcon from "../../Assets/images/search.svg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SerachIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
    max-width: 100%;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  img {
    border-radius: 50%;
    width: 27px;
    height: 27px;
    margin-right: 5px;
  }
`;
