import { NOTE_CREATE, NOTE_DELETE } from '../reducers/notes.reducer';
import {INote} from "../types/common.type";

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
