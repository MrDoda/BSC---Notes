import { NOTE_CREATE, NOTE_DELETE, NOTE_UPDATE } from '../reducers/notes.reducer';
import { INote } from '../types/common.type';

export interface INoteAction {
  type: string;
  value?: string | number | INote;
}

export const createBscNoteAction: INoteAction = {
  type: NOTE_CREATE,
};

export const deleteBscNoteAction = (index: number): INoteAction => ({
  type: NOTE_DELETE,
  value: index,
});

export const setBscNoteAction = (note: INote): INoteAction => ({
  type: NOTE_UPDATE,
  value: note,
});
