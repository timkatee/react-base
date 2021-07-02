import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from '@material-ui/icons/Apps';
import {useDispatch, useSelector} from "react-redux";
import {toggleAppDrawer} from "../../../redux/slices/UiSlice";
import {AppTopBarMenus} from "./AppTopBarMenus";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        backgroundColor: '#fff',
        color: 'black'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        float: 'left'
    },
    appsIcon:{
        backgroundColor: 'red',
        borderRadius: 0
    }
}));

export const AppTopBar = () => {
    const currentMenu = useSelector(state => state.ui.navigation.navigatedToPageName)
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" className={classes.appsIcon}>
                    <AppsIcon/>
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {
                    dispatch(toggleAppDrawer({}))
                }}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    Meerkat
                    <Typography color="secondary">
                        {currentMenu}
                    </Typography>
                </Typography>
                <div className={classes.grow}/>
                <AppTopBarMenus/>
            </Toolbar>
        </AppBar>
    )
}