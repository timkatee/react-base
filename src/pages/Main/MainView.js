import React from 'react'
import {AppTopBar} from './components/AppTopBar'
import {AppDrawer} from './components/AppDrawer'
import {makeStyles} from "@material-ui/core/styles";
import { Switch, Route } from 'react-router-dom'
//
const drawerWidth = 240;
//
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: -drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
}))
//
const MainView = (routes) => {
    console.log(routes)
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppTopBar />
            <AppDrawer/>
            <main className={classes.content}>>
                <div className={classes.drawerHeader} />
                {/*<Switch>*/}
                {/*    <Route></Route>*/}
                {/*</Switch>*/}
            </main>
        </div>
    )
}

export default MainView