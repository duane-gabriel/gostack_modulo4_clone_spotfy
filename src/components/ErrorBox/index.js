import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Creators as ErrorsActions } from "../../store/ducks/error";
import { Container } from "./style";

const ErrorBox = ({ error: { message, visible }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
      <button onClick={hideError}>
        <span>X</span>
      </button>
    </Container>
  );

ErrorBox.propTypes = {
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }),
  hideError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ErrorsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
