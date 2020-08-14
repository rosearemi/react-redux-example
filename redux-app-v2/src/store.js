const INCREMENT = "INCREMENT";
export const increase = () => ({ type: INCREMENT });

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    default:
      return state;
  }
};

export default reducer;
