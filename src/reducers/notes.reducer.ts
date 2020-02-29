import { INote, INoteAction } from '../types/common.type';

export const NOTE_CREATE: string = 'NOTE_CREATE';
export const NOTE_DELETE: string = 'NOTE_DELETE';
export const NOTE_UPDATE: string = 'NOTE_UPDATE';
export const NOTE_GET_NOTES: string = 'NOTE_GET_NOTES';

export type INotesState = INote[];

const initialState: INote[] = [];

const notes = (state: INotesState = initialState, action: INoteAction) => {
  switch (action.type) {
    case NOTE_CREATE:
      return state;

    case NOTE_DELETE:
      return state;

    case NOTE_UPDATE:
      return state;

    case NOTE_GET_NOTES:
      return state;

    default:
      return state;
  }
};

export default notes;
