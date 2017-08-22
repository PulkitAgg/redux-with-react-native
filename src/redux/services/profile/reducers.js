
import { TOGGLE_PROFILE_STATE } from './constants';

const initialState = {
  profileTest: false
};

const headerReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
       case TOGGLE_PROFILE_STATE:
         return {
          ...state,
          profileTest: !state.profileTest
         };
    default:
      return state;
  }
};

export default headerReducer;
