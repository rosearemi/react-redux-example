import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

// redux의 리듀서에 접근할 수 있는 dispatch를 함수에 담아서 AddNumber에 전달해 준다.
const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    handleAdd: (size) => {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
};

export default connect(
  (state) => ({ number: state.number }),
  mapReduxDispatchToReactProps,
)(AddNumber);
