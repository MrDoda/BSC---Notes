import { createStore, Store } from 'redux';
import rootReducer from './reducers/root.reducer';
import { INotesState } from './reducers/notes.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { INoteAction } from './actions/note.actions';

export interface IGlobalState {
  notes: INotesState;
}

const store: Store<IGlobalState, INoteAction> = createStore(
  rootReducer,
  composeWithDevTools()
  //applyMiddleware(...middleware),
);

export default store;
