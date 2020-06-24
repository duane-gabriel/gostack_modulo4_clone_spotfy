import api from "../../services/api";
import { call, put } from "redux-saga/effects";

// put serve para chamar a action

// call para fazer chamadas assíncronas

import { Creators as PlaylistDetails } from "../ducks/playlistDetails";

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payLoad.id}?_embed=songs`
    );
    yield put(PlaylistDetails.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
