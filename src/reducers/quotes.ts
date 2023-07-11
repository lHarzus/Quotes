import {
  GET_QUOTES,
  QUOTES_ERROR,
  QuotesDispatchTypes,
} from "../actions/types";

const initialState = {
  quotes: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action: QuotesDispatchTypes) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: payload,
        loading: false,
      };
    case QUOTES_ERROR:
      return {
        ...state,
        error: { ...initialState.error, payload },
        loading: false,
      };
    default:
      return state;
  }
}
