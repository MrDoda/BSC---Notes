import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';
import './index.scss';
import { LocalizeProvider } from 'react-localize-redux';
import { pink } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: pink,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <LocalizeProvider>
        <App />
      </LocalizeProvider>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
