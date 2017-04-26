import { combineReducers } from 'redux';
import { navigationReducer } from "./navigation"
import { draftPostReducer } from "./draftPost"
import { postsReducer } from "./posts"

export const reducer = combineReducers(Object.assign(
  navigationReducer,
	draftPostReducer,
	postsReducer,
));

