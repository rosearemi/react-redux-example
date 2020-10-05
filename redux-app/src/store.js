//액션

const INCREMENT = "INCREMENT";
const DECREASE = "DECREASE";

export const increase = (size) => {
  return { type: INCREMENT, size: size };
};

export const decrease = (size) => {
  return { type: DECREASE, size: size };
};
const initstate = {
  number: 0,
};

// (state,action)
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    case DECREASE:
      return { number: state.number - action.size };
    default:
      return state;
  }
};

export default reducer;
