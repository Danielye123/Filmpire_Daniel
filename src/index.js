import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, HashRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';
import './index.css';

//const theme = createTheme({});

ReactDOM.render(
    <Provider store={store}>
    <ToggleColorModeProvider>
    <HashRouter>
        <App />
    </HashRouter>
    {/* <BrowserRouter>
        <App />
    </BrowserRouter> */}
    </ToggleColorModeProvider>
    </Provider>,
    document.getElementById('root'),
);
