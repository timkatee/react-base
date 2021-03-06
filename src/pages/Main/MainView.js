import React from 'react'
import {AppTopBar} from './components/AppTopBar'
import {AppDrawer} from './components/AppDrawer'
import {makeStyles} from "@material-ui/core/styles"
import {renderRoutes} from "react-router-config"
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
const MainView = ({route}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppTopBar />
            <AppDrawer/>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default MainView