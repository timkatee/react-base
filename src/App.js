import React, { useState } from "react";
import "fontsource-roboto";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// MUI Theme
// import theme from "styles/muiTheme";


function App() {
    return (
        <BrowserRouter>
            <RouterConfig />
        </BrowserRouter>
    );
}

export default App;
