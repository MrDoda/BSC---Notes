import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { getNotes } from '../reducers/notes.reducer';
import { INote } from '../types/common.type';
import BSCNote from '../components/BSCNote/BSCNote';
import BSCCreateNote from '../components/BSCCreateNote/BSCCreateNote';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import LanguageToggle from '../components/LanguageToggle/LanguageToggle';
import { Paper } from '@material-ui/core';
import { useInitializeBscNotes, useTranslationInit } from '../hooks/hooks';

export interface IProps extends LocalizeContextProps {}

const App = (props: IProps) => {
  const notes = useSelector(getNotes);

  useInitializeBscNotes();
  useTranslationInit(props.initialize);

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
