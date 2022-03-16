import React from 'react'
import { LocalizeContextProps, withLocalize } from 'react-localize-redux'
import { Button } from '@material-ui/core'

interface IProps extends LocalizeContextProps {}

const LanguageToggle: React.FC<IProps> = ({ languages, activeLanguage, setActiveLanguage }) => (
  <>
    {languages.map(lang => {
      const isActiveLanguage: boolean = activeLanguage.code === lang.code

      const color = isActiveLanguage ? 'primary' : 'secondary'
      const variant = isActiveLanguage ? 'contained' : undefined

      return (
        <Button color={color} variant={variant} onClick={() => setActiveLanguage(lang.code)}>
          {lang.name}
        </Button>
      )
    })}
  </>
)

export default withLocalize(LanguageToggle)
