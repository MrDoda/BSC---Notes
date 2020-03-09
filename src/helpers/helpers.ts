import * as R from 'ramda';
import store from '../store';

//This would normally be done on the backend...
export const createId = () => {
  const notes = store.getState().notes;
  const sortedNotes = R.sortBy(R.prop('id'), notes);
  if (notes.length < 1) {
    return 1;
  }
  return sortedNotes[notes.length - 1].id + 1;
};
