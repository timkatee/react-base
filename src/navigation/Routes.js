import Main from 'pages/Main'
import {AppContent} from "../pages/Main/components/AppContent";
import {Redirect} from 'react-router-dom'
//
export const ROUTES = [
    {
        path: "/",
        exact:true,
        component: () => <Redirect to={"/app"}/>,
    },
    {
        path: "/app",
        component:  Main,
        routes: [
            {
                component:AppContent,
                routes: [
                    {
                        path: "/app/detected-issues",
                        component: () => <h1>Detected issues</h1>,
                    }
                ]
            },

        ]
    },
    {
        path: '*',
        component: ()=> <h1>Route not found!</h1>
    }
];
