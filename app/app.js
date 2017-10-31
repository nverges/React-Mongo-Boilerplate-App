// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Browser,  Router } from 'react-router-dom';

import Main from './components/Main';

const App = () => {
    <BrowserRouter>
        <Main />
    </BrowserRouter>
}

ReactDOM.render(<App />, document.getElementById("app")
);

