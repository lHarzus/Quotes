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
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];
};
