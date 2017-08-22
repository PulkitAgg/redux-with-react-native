import { combineReducers } from 'redux';

import uiReducer from './ui/reducers';
import profileReducer from './profile/reducers';

export default combineReducers({
  ui: uiReducer,
  profile: profileReducer
});
