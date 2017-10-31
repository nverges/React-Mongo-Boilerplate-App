// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main.jsx';

const App = () => (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));

