import axios from 'axios';
import { INote } from '../types/common.type';

export const SERVER_URL = 'http://localhost:3000';

export const loadNotes = () => axios.get(SERVER_URL + '/notes');

export const putNote = (note: INote) => axios.put(SERVER_URL + '/notes/' + note.id, note);

export const postNote = (note: INote) => axios.post(SERVER_URL + '/notes', note);

export const deleteNote = (note: INote) => axios.delete(SERVER_URL + '/notes/' + note.id);
