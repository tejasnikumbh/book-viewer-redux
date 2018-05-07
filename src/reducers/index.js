import { combineReducers } from 'redux';

import BooksReducer from './books_reducer';
import ActiveBookReducer from './activebook_reducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
