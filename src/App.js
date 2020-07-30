import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import HomePage from './home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#484DDB',
      light: '#8E91E1',
      dark: '#3A3B5C',
    },
    secondary: {
      light: '#DFCA53',
      main: '#DACF92',
      dark: '#A69E6F',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
