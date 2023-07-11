import axios from "axios";
import { GET_QUOTES, QUOTES_ERROR } from "../actions/types";

//Load user
export const getQuote = (category: String) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      "https://api.api-ninjas.com/v1/quotes?category=" + category,
      { headers: { "X-Api-Key": "Q95vezxbmQeijlCJhp8wvQ==lYsgc6jko65RsnzI" } }
    );

    dispatch({
      type: GET_QUOTES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUOTES_ERROR,
      payload: "Error getting quote",
    });
  }
};
