import * as React from 'react';
import { Button } from '@material-ui/core';
import './BSCCreateNote.scss';
import { createBscNoteAction } from '../../actions/note.actions';
import { useDispatch } from 'react-redux';


const BSCCreateNote: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(createBscNoteAction());
  };

  return (
    <Button onClick={onClick} className="BSCCreateNote" variant="contained">
      +
    </Button>
  );
};

export default BSCCreateNote;
