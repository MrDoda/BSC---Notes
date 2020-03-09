import { createStore, Store, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { INoteAction } from './actions/note.actions';
import { INote } from './types/common.type';
import persistingMiddleware from './middleware/persist.middleware';

export interface IGlobalState {
  notes: INote[];
}

const store: Store<IGlobalState, INoteAction> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(persistingMiddleware))
);

export default store;
