import React, { Fragment } from "react";
import Slider from "rc-slider";
import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from "./style";
import { connect } from "react-redux";
import Sound from "react-sound";
import PropTypes from "prop-types";
import VolumeIcon from "../../Assets/images/volume.svg";
import ShuffleIcon from "../../Assets/images/shuffle.svg";
import BackwardIcon from "../../Assets/images/backward.svg";
import PlayIcon from "../../Assets/images/play.svg";
import PauseIcon from "../../Assets/images/pause.svg";
import ForwardIcon from "../../Assets/images/forward.svg";
import RepeatIcon from "../../Assets/images/repeat.svg";
import { Creators as PlayersActions } from "../../store/ducks/player";
import { bindActionCreators } from "redux";
const Player = (props) => (
  <Container>
    <Current>
      {!!props.player.currentSong && (
        <Sound
          url={props.player.currentSong.file}
          playStatus={props.player.status}
          onFinishedPlaying={props.next}
          onPlaying={props.playing}
          position={props.player.position}
        />
      )}
      {!!props.player.currentSong && (
        <Fragment>
          {" "}
          <img src={props.player.currentSong.thumbnail} alt="" />
          <div>
            <span>{props.player.currentSong.title}</span>
            <small>{props.player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} />
        </button>
        <button onClick={props.prev}>
          <img src={BackwardIcon} />
        </button>
        {!!props.player.currentSong &&
        props.player.status === Sound.status.PLAYING ? (
          <button onClick={props.pause}>
            <img src={PauseIcon} />
          </button>
        ) : (
          <button onClick={props.play}>
            <img src={PlayIcon} />
          </button>
        )}
        <button onClick={props.next}>
          <img src={ForwardIcon} />
        </button>
        <button>
          <img src={RepeatIcon} />
        </button>
      </Controls>
      <Time>
        <span>{props.positionShown || props.position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
            max={1000}
            onChange={(value) => props.handlePosition(value / 1000)}
            onAfterChange={(value) => props.setPosition(value / 1000)}
            value={props.progress}
          ></Slider>
        </ProgressSlider>
        <span>{props.duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        // value={100}
      ></Slider>
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  handlePosition: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  progress: PropTypes.number,
};

function msToTime(duration) {
  if (!duration) return null;
  let seconds = parseInt((duration / 1000) % 60, 10);
  let minuts = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minuts}:${seconds}`;
}

const mapStateToProps = (state) => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress:
    (state.player.positionShown || state.player.position) *
    (1000 / state.player.duration),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlayersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
