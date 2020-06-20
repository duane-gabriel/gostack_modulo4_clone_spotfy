import React from "react";

import { Container, Header, SongList } from "./style";

import ClockIcon from "../../Assets/images/clock.svg";
import PlusIcon from "../../Assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://i.ytimg.com/vi/NJQnzmH6jgc/sddefault.jpg#404_is_fine" />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button>Play</button>
      </div>
    </Header>

    <SongList cellPading={0} cellSpacing={0}>
      <thead>
        <th></th>
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
