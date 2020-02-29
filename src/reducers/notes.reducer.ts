import { INote } from '../types/common.type';
import { IGlobalState } from '../store';
import { INoteAction } from '../actions/note.actions';
import * as R from 'ramda';

export const NOTE_CREATE: string = 'NOTE_CREATE';
export const NOTE_DELETE: string = 'NOTE_DELETE';
export const NOTE_UPDATE: string = 'NOTE_UPDATE';
export const NOTE_GET_NOTES: string = 'NOTE_GET_NOTES';

export type INotesState = INote[];

const initialState: INote[] = [
  {
    headline: 'Note headline example',
    content:
      'Lorem Ipsum is simply dummy text of the ' +
      "printing and typesetting industry. Lorem Ipsum has been the industry's ",
  },
  {
    headline: 'Lorem',
    content: 'ce the 1500s, when an unknown printer took a galley of type and scrambled it to ',
  },
  {
    headline: 'My and ony',
    content:
      "m is that it has a more-or-less normal distribution of letters, as opposed to using 'Co",
  },
  {
    headline: 'passage',
    content: "u are going to use a passage of Lorem Ipsum, you need to be sure there isn't",
  },
];

const notes = (state: INotesState = initialState, action: INoteAction) => {
  switch (action.type) {
    case NOTE_CREATE:
      return [
        ...state,
        {
          headline: '',
          content: '',
        },
      ];

    case NOTE_DELETE:
      return R.remove(action.value as number, 1, state);

    case NOTE_UPDATE:
      return state;

    case NOTE_GET_NOTES:
      return state;

    default:
      return state;
  }
};

export const getNotes = (store: IGlobalState) => {
  return store.notes;
};

export default notes;
