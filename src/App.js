import React from "react";
import "fontsource-roboto";
// ROUTER
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {ROUTES} from 'navigation/Routes'
import {ThemeProvider} from '@material-ui/styles';
import {rcpTheme} from "./styles/Themes";

function App() {
    return (
        <ThemeProvider theme={rcpTheme}>
            <BrowserRouter>
                {renderRoutes(ROUTES)}
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
