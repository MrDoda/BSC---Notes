import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadNotes } from '../api/notes.requests'
import { loadBscNotesAction } from '../actions/note.actions'

export const useInitializeBscNotes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const initializeNotes = async () => {
      await loadNotes()
        .then(response => {
          dispatch(loadBscNotesAction(response.data))
        })
        .catch((err: Error) => {
          console.error(err)
        })
    }
    initializeNotes()
  }, [dispatch])
}
