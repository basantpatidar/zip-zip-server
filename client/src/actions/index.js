import axios from "axios";
import { FETCH_USER } from "./types";

//fetchUser is action creator
export const fetchUser = () => {
  return function(dispatch) {
    axios.get("/api/current_user").then(response => {
      dispatch({ type: FETCH_USER, payload: response });
    });
  };
};
