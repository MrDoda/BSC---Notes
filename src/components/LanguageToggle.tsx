import React from 'react';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { Button } from '@material-ui/core';

interface IProps extends LocalizeContextProps {}

const LanguageToggle: React.FC<IProps> = ({ languages, activeLanguage, setActiveLanguage }) => (
  <ul className="selector">
    {languages.map(lang => (
      <li key={lang.code}>
        <Button color="secondary" onClick={() => setActiveLanguage(lang.code)}>
          {lang.name}
        </Button>
      </li>
    ))}
  </ul>
);

export default withLocalize(LanguageToggle);
