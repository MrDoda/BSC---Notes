import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { getNotes } from '../reducers/notes.reducer';
import { INote } from '../types/common.type';
import BSCNote from '../components/BSCNote/BSCNote';
import BSCCreateNote from '../components/BSCCreateNote/BSCCreateNote';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import globalTranslations from '../translations/global.json';
import { renderToStaticMarkup } from 'react-dom/server';
import LanguageToggle from '../components/LanguageToggle/LanguageToggle';
import { Paper } from '@material-ui/core';

export interface IProps extends LocalizeContextProps {}

const App = (props: IProps) => {
  const notes = useSelector(getNotes);

  useEffect(() => {
    props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' },
        { name: 'Russian', code: 'ru' },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup },
    });
  }, []);

  return (

      <div className="BSC-content">
          <Paper className="BSC-header">
              <LanguageToggle />
          </Paper>
        {notes.map((note: INote, index: number) => {
          return <BSCNote note={note} index={index} />;
        })}
        <BSCCreateNote />
      </div>
  );
};

export default withLocalize(App);
