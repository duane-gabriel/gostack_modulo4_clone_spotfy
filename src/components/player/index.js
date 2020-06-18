import React from "react";
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

import VolumeIcon from "../../Assets/images/volume.svg";
import ShuffleIcon from "../../Assets/images/shuffle.svg";
import BackwardIcon from "../../Assets/images/backward.svg";
import PlayIcon from "../../Assets/images/play.svg";
import PauseIcon from "../../Assets/images/pause.svg";
import ForwardIcon from "../../Assets/images/forward.svg";
import RepeatIcon from "../../Assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://i.ytimg.com/vi/NJQnzmH6jgc/sddefault.jpg#404_is_fine"
        alt=""
      />
      <div>
        <span>Times like these</span>
        <small>Foo fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} />
        </button>
        <button>
          <img src={BackwardIcon} />
        </button>
        <button>
          <img src={PlayIcon} />
        </button>
        <button>
          <img src={ForwardIcon} />
        </button>
        <button>
          <img src={RepeatIcon} />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
          ></Slider>
        </ProgressSlider>
        <span>4:29</span>
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

export default Player;
