
import { TOGGLE_UI_STATE } from './constants';

type StateType = {
  uiTest: boolean,
};

const initialState = {
  uiTest: false
};

const uiReducer = (state: StateType = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_UI_STATE:
      return {
        ...state,
        uiTest: !state.uiTest
      };
    default:
      return state;
  }
};

export default uiReducer;
