import { Dispatch, Middleware } from 'redux';
import { INoteAction } from '../actions/note.actions';
import { INote } from '../types/common.type';
import { NOTE_CREATE, NOTE_DELETE, NOTE_UPDATE } from '../reducers/notes.reducer';
import { deleteNote, postNote, putNote } from '../requests/notes.requests';
import { debounce } from 'lodash';

const debouncedUpdateNote = debounce((note: INote) => {
  putNote(note)
    .then()
    .catch((error: Error) => {
      console.error(error);
    });
}, 700);

// Ussually I would go with Saga or Thunk..
// but Why not to write our own middleware if we have a very simple use case?
const persistingMiddleware: Middleware<Dispatch<INoteAction>> = () => (next: Dispatch) => (
  action: INoteAction
) => {
  switch (action.type) {
    case NOTE_CREATE:
      postNote(action.payload as INote)
        .then()
        .catch((error: Error) => {
          console.error(error);
        });
      break;

    case NOTE_DELETE:
      deleteNote((action.payload as { note: INote; index: number }).note)
        .then()
        .catch((error: Error) => {
          console.error(error);
        });
      break;

    case NOTE_UPDATE: {
      debouncedUpdateNote(action.payload as INote);
      break;
    }
  }
  return next(action);
};
export default persistingMiddleware;
