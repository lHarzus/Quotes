import axios from "axios";
import { GET_IMAGE, IMAGE_ERROR } from "../actions/types";

//Load user
export const getImage =
  (category = "nature") =>
  async (dispatch: any) => {
    /*
        category (optional) - image category. If set, must be one of the following: nature, city, technology, food, still_life, abstract, wildlife.
        width (optional) - width of the image to generate. Must be between 1 and 5000. Default value is 640.
        height (optional) - height of the image to generate. Must be between 1 and 5000. Default value is 480.
    */
    try {
      const res = await axios.get(
        "https://api.api-ninjas.com/v1/randomimage?category=" + category,
        { headers: { "X-Api-Key": "Q95vezxbmQeijlCJhp8wvQ==lYsgc6jko65RsnzI" } }
      );

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
