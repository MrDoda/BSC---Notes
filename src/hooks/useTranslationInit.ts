import { InitializePayload } from 'react-localize-redux'
import { useCallback, useEffect } from 'react'
import globalTranslations from '../translations/global.json'
import { renderToStaticMarkup } from 'react-dom/server'

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
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    translationInitCallBack()
  }, [translationInitCallBack])
}
