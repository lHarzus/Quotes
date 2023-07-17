import axios from "axios";
import { GET_QUOTES, QUOTES_ERROR } from "../actions/types";

//get quotes
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

//get categories
export const getCategory = () => {
  return [
    "Age",
    "Alone",
    "Amazing",
    "Anger",
    "Architecture",
    "Art",
    "Attitude",
    "Beauty",
    "Best",
    "Birthday",
    "Business",
    "Car",
    "Change",
    "Communications",
    "Computers",
    "Cool",
    "Courage",
    "Dad",
    "Dating",
    "Death",
    "Design",
    "Dreams",
    "Education",
    "Environmental",
    "Equality",
    "Experience",
    "Failure",
    "Faith",
    "Family",
    "Famous",
    "Fear",
    "Fitness",
    "Food",
    "Forgiveness",
    "Freedom",
    "Friendship",
    "Funny",
    "Future",
    "God",
    "Good",
    "Government",
    "Graduation",
    "Great",
    "Happiness",
    "Health",
    "History",
    "Home",
    "Hope",
    "Humor",
    "Imagination",
    "Inspirational",
    "Intelligence",
    "Jealousy",
    "Knowledge",
    "Leadership",
    "Learning",
    "Legal",
    "LiFe",
    "Love",
    "Marriage",
    "Medical",
    "Men",
    "Mom",
    "Money",
    "Morning",
    "Movies",
    "Success",
  ];
};
