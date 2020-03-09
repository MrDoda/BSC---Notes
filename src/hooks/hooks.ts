import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadNotes } from '../requests/notes.requests';
import { loadBscNotesAction } from '../actions/note.actions';
import { INote } from '../types/common.type';
import globalTranslations from '../translations/global.json';
import { renderToStaticMarkup } from 'react-dom/server';
import { InitializePayload } from 'react-localize-redux';

export const useInitializeBscNotes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeNotes = async () => {
      await loadNotes()
        .then(response => {
          dispatch(loadBscNotesAction(response.data as INote[]));
        })
        .catch((err: Error) => {
          console.error(err);
        });
    };
    initializeNotes();
  }, [dispatch]);
};

export const useTranslationInit = (initialize: (payload: InitializePayload) => void) => {

  const translationInitCallBack = useCallback(() => {
    initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' },
        { name: 'Russian', code: 'ru' },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup },
    });
    // there is a dependency warning.. I would need to investigate, but the time is up for this demo
  }, []);

  useEffect(() => {
    translationInitCallBack();
  }, [translationInitCallBack]);
};
