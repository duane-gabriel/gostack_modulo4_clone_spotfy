import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { Container, Header, SongList, SongItem } from "./style";
import Loading from "../../components/loading";
import ClockIcon from "../../Assets/images/clock.svg";
import PlusIcon from "../../Assets/images/plus.svg";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import { Creators as PlayerActions } from "../../store/ducks/player";

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          })
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails() {
    const { id } = this.props.match.params; // pegar parâmetros da url

    this.props.getPlaylistDetailsRequest(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  renderDetails() {
    const playList = this.props.playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playList.thumbnail} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playList.title}</h1>
            {!!playList.songs && <p>{playList.songs.length} músicas</p>}
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
            {!playList.songs ? (
              <tr>
                <td colSpan={5}>
                  <center>Nenhuma música cadastrada</center>
                </td>
              </tr>
            ) : (
              playList.songs.map((song) => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() =>
                    this.props.loadSong(song, playList.songs)
                  }
                  selected={this.state.selectedSong === song.id}
                  playing={
                    this.props.currentSong &&
                    this.props.currentSong.id == song.id
                  }
                >
                  <td>
                    <img src={PlusIcon} />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}
const mapStateToProps = (state) => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
