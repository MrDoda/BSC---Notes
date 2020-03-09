import { INote } from '../types/common.type';
import { IGlobalState } from '../store';
import { INoteAction } from '../actions/note.actions';
import * as R from 'ramda';

export const NOTE_CREATE: string = 'NOTE_CREATE';
export const NOTE_DELETE: string = 'NOTE_DELETE';
export const NOTE_UPDATE: string = 'NOTE_UPDATE';
export const NOTE_GET_NOTES: string = 'NOTE_GET_NOTES';

const initialState: INote[] = [];

// Notice: I do not usually use Lodash or Ramda (unless its wanted)...
// I am fully aware that this is not readable for all other programmers not familiar with Ramda...
// This is just me playing around with Ramda to make the most out of this project and my time.
const notes = (state: INote[] = initialState, action: INoteAction) => {
  switch (action.type) {
    case NOTE_CREATE:
      return R.append(action.payload as INote, state);

    case NOTE_DELETE:
      return R.remove((action.payload as { note: INote; index: number }).index, 1, state);

    case NOTE_UPDATE: {
      const noteToBeUpdated: INote = action.payload as INote;
      return R.map(R.when(R.propEq('id', noteToBeUpdated.id), () => noteToBeUpdated))(state);
    }

    case NOTE_GET_NOTES:
      return Array.isArray(action.payload) ? action.payload : state;

    default:
      return state;
  }
};

export const getNotes = (store: IGlobalState) => {
  return store.notes;
};

export default notes;
