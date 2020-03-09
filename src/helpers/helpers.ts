//This would normally be done on the backend...
import { INote } from '../types/common.type';
import * as R from 'ramda';

export const createId = (notes: INote[]) => {
  const sortedNotes = R.sortBy(R.prop('id'), notes);
  return sortedNotes[notes.length - 1].id + 1;
};