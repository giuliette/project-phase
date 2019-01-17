import { connect } from 'react-redux';
import { decreaseAcornAmount } from '../actions/actions';
import Button from '../../src/Button';

const mapStateToProps = () => {
  return {
    name: 'eat one',
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(decreaseAcornAmount());
    }
  }
}

const EatAcorn = connect(
  mapStateToProps,
  dispatchToProps,
)(Button);

export default EatAcorn;
