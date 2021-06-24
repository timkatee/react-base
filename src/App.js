import React, { useState } from "react";
import "fontsource-roboto";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import {ROUTES} from 'navigation/Routes'
// MUI Theme
// import theme from "styles/muiTheme";


function App() {
    return (
        <BrowserRouter>
            {renderRoutes(ROUTES)}
        </BrowserRouter>
    );
}

export default App;
