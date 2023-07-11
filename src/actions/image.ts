import axios from "axios";
import { GET_IMAGE, IMAGE_ERROR } from "../actions/types";

//Load user
export const getImage =
  (length = 300, height = 300) =>
  async (dispatch: any) => {
    console.log("entrei");

    try {
      const res = await axios.get(
        "https://picsum.photos/" + length + "/" + height
      );

      console.log(res);

      dispatch({
        type: GET_IMAGE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: IMAGE_ERROR,
        payload: "Error getting image",
      });
    }
  };
