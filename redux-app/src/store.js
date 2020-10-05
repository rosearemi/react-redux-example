//액션

const INCREMENT = "INCREMENT";

export const increase = (size) => {
  return { type: INCREMENT, size: size };
};

const initstate = {
  number: 0,
};

// (state,action)
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    default:
      return state;
  }
};

export default reducer;
