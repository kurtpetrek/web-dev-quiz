import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Index = props => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
