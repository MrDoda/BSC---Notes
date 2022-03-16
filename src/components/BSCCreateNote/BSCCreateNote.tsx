import * as React from 'react'
import { Button } from '@material-ui/core'
import './BSCCreateNote.scss'
import { createBscNoteAction } from '../../actions/note.actions'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

export const BSCCreateNote: React.FC = () => {
  const dispatch = useDispatch()

  const onClick = useCallback(() => {
    dispatch(createBscNoteAction())
  }, [dispatch])

  return (
    <Button onClick={onClick} className="BSCCreateNote" variant="contained">
      +
    </Button>
  )
}
