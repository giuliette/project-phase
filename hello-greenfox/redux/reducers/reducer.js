const initialState = {
  clicks: 0,
}

const acorn = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_AMOUNT':
      return {
        clicks: state.clicks + 1,
      }
    case 'DECREASE_AMOUNT':
      if (state.clicks > 0) {
        return {
          clicks: state.clicks - 1,
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default acorn;