import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {renderRoutes} from "react-router-config";
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
export const AppContent = ({route}) =>{
    const classes = useStyles()
    return (
        <main className={classes.content}>>
            <div className={classes.drawerHeader} />
            {renderRoutes(route.routes)}
        </main>
    )
}