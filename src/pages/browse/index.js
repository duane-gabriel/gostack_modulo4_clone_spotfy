import React, { Component } from "react";
import { Container, Title, List, PlayList } from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

class Browse extends Component {
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <Title>Navegar</Title>
        <List>
          {this.props.playlists.data.map((play) => {
            return (
              <PlayList to={`/playlists/${play.id}`} key={play.id}>
                <img src={play.thumbnail} />
                <strong>{play.title}</strong>
                <p>{play.description}</p>
              </PlayList>
            );
          })}
        </List>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlaylistsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Browse);
