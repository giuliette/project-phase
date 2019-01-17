import { connect } from 'react-redux';
import { increaseAcornAmount } from '../actions/actions';
import Button from '../../src/Button';

const mapStateToProps = () => {
  return {
    name: 'buy one',
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(increaseAcornAmount());
    }
  }
}

const BuyAcorn = connect(
  mapStateToProps,
  dispatchToProps,
)(Button);

export default BuyAcorn;
