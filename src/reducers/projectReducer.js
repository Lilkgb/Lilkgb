import constants from '../constants';
const {types, initialState} = constants

const projectReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.GITHUB_PROJECTS:
      newState = state;
        console.log(action)
      return newState;
    default:
      return state;
  }
}

export default projectReducer;
