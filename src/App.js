import React, { useState } from "react";
import "fontsource-roboto";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
import  {ROUTES, RenderRoutes} from "./navigation/Routes";
// MUI Theme
// import theme from "styles/muiTheme";


function App() {
    return (
        <BrowserRouter>
            <RenderRoutes routes={ROUTES} />
        </BrowserRouter>
    );
}

export default App;
