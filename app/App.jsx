// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

// Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main.jsx';

const App = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <Main />
        </MuiThemeProvider>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));

