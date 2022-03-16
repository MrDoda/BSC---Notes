import * as React from 'react'
import { INote } from '../../types/common.type'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import './BSCNote.scss'
import { deleteBscNoteAction, setBscNoteAction } from '../../actions/note.actions'
import { useDispatch } from 'react-redux'
import { Translate } from 'react-localize-redux'
import { InputBase, TextField } from '@material-ui/core'
import { useCallback } from 'react'

interface IProps {
  note: INote
  index: number
}

export const BSCNote: React.FC<IProps> = ({ note, index }) => {
  const dispatch = useDispatch()

  const deleteNote = useCallback(() => {
    dispatch(deleteBscNoteAction(note, index))
  }, [dispatch, note, index])

  const onNoteChange = useCallback(
    (propertyName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setBscNoteAction({
          ...note,
          [propertyName]: e.target.value,
        })
      )
    },
    [dispatch, note]
  )

  return (
    <Card className="BSCNote">
      <CardContent>
        <TextField
          value={note.headline}
          onChange={onNoteChange('headline')}
          role="headline"
          className="headline-input"
        />
        <InputBase
          value={note.content}
          onChange={onNoteChange('content')}
          role="content"
          className="content-input"
          multiline
          rowsMax={6}
          rows={6}
        />
      </CardContent>
      <CardActions>
        <Button onClick={deleteNote} color="secondary" size="small">
          <Translate id="global.delete" />
        </Button>
      </CardActions>
    </Card>
  )
}
