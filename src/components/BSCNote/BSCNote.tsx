import * as React from 'react';
import { INote } from '../../types/common.type';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './BSCNote.scss';
import { deleteBscNoteAction } from '../../actions/note.actions';
import { useDispatch } from 'react-redux';
import { Translate } from 'react-localize-redux';
import { InputBase, TextField } from '@material-ui/core';

interface IProps {
  note: INote;
  index: number;
}

const BSCNote: React.FC<IProps> = ({ note, index }) => {
  const dispatch = useDispatch();

  const deleteNote = () => {
    dispatch(deleteBscNoteAction(index));
  };

  return (
    <Card className="BSCNote">
      <CardContent>
        <TextField role="headline" className="headline-input" />
        <InputBase role="content" className="content-input" multiline rowsMax={6} rows={6} />
      </CardContent>
      <CardActions>
        <Button onClick={deleteNote} color="secondary" size="small">
          <Translate id="global.delete" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default BSCNote;
