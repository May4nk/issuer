//reducers/index.js
import { combineReducers } from 'redux';

import issueReducers from './issues.js';
import authReducers from './users.js';

export default combineReducers({ issueReducers, authReducers });
