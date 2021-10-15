import { BUY_CANDY } from "./candyTypes";

const initialState = {
  numOfCandies: 50,
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CANDY:
      return {
        ...state,
        numOfCandies: state.numOfCandies - 1,
      };

    default:
      return state;
  }
};

export default candyReducer;
