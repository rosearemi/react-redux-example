import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    handleAdd: (size) => {
      dispatch({ type: "addNumber/INCREMENT", size: size });
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
