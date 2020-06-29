import api from "../../services/api";
import { call, put } from "redux-saga/effects";

// put serve para chamar a action

// call para fazer chamadas assíncronas

import { Creators as Playlists } from "../ducks/playlists";
import { Creators as Errors } from "../ducks/error";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");
    yield put(Playlists.getPlaylistsSuccess(response.data));
  } catch (err) {
    yield put(Errors.setError("Não foi possível obter as playlist"));
  }
}
