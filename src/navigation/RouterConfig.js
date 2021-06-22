import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from 'pages/Main'

import {HOME} from "navigation/Routes"
import {NotFound} from "navigation/NotFound"

export const RouterConfig = () => {
    return (
        <>
            <Switch>
                <Route exact path={HOME} component={Main} />
                {/*<Route exact path={DASHBOARD} component={Dashboard} />*/}

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </>
    )
}

