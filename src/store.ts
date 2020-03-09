import { createStore, Store } from 'redux';
import rootReducer from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { INoteAction } from './actions/note.actions';
import { INote } from './types/common.type';

export interface IGlobalState {
  notes: INote[];
}

const store: Store<IGlobalState, INoteAction> = createStore(
  rootReducer,
  composeWithDevTools()
  //applyMiddleware(...middleware),
);

export default store;
