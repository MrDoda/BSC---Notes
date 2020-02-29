import { createStore, Store } from 'redux';
import rootReducer from './reducers/root.reducer';
import { INotesState } from './reducers/notes.reducer';
import { INoteAction } from './types/common.type';

export interface IGlobalState {
  notes: INotesState;
}

const store: Store<IGlobalState, INoteAction> = createStore(rootReducer);

export default store;
