import { GET_IMAGE, IMAGE_ERROR, ImageDispatchTypes } from "../actions/types";

const initialState = {
  image: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action: ImageDispatchTypes) {
  const { type, payload } = action;

  switch (type) {
    case GET_IMAGE:
      return {
        ...state,
        image: payload,
        loading: false,
      };
    case IMAGE_ERROR:
      return {
        ...state,
        error: { ...initialState.error, payload },
        loading: false,
      };
    default:
      return state;
  }
}
