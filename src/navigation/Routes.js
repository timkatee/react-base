import Main from 'pages/Main'
import {Route, Switch} from "react-router-dom";
//
export const HOME = "/"
export const ROUTES = [
    {
        path:"/",
        key : "HOME",
        exact:true,
        component: Main,
        routes:[
            {
                path:"/detected-issues",
                key:"DETECTED_ISSUES",
                component: <h1>Tim is King</h1>
            }
        ]
    }
]

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}