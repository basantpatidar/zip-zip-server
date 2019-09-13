import axios from "axios";
import { FETCH_USER } from "./types";

//fetchUser is action creator
const fetchUser = async => {
 const response =  await axios.get("/api/current_user");
 return{
     types: FETCH_USER,
     payload: response
 };
};
