import { NOTE_CREATE, NOTE_DELETE, NOTE_GET_NOTES, NOTE_UPDATE } from '../reducers/notes.reducer';
import { INote } from '../types/common.type';
import { createId } from '../helpers/helpers';

export interface INoteAction {
  type: string;
  payload: string | number | INote | INote[] | { note: INote; index: number };
}

export const createBscNoteAction = (): INoteAction => ({
  type: NOTE_CREATE,
  payload: {
    id: createId(),
    headline: '',
    content: '',
  },
});

export const deleteBscNoteAction = (note: INote, index: number): INoteAction => ({
  type: NOTE_DELETE,
  payload: {
    note,
    index,
  },
});

export const setBscNoteAction = (note: INote): INoteAction => ({
  type: NOTE_UPDATE,
  payload: note,
});

export const loadBscNotesAction = (notes: INote[]): INoteAction => ({
  type: NOTE_GET_NOTES,
  payload: notes,
});
