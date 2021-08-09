import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Badge, Box, Divider, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import AppsIcon from '@material-ui/icons/Apps';
import {useDispatch, useSelector} from "react-redux";
import {toggleAppDrawer} from "../../../redux/slices/UiSlice";
import {AppTopBarMenus} from "./AppTopBarMenus";
import clsx from "clsx";
import SvgIcon from '@material-ui/core/SvgIcon';

function AppsIcon(props) {
    return (
        <SvgIcon {...props}>
            <>
                <path
                    d="M1.26916 0C0.569004 0 0 0.569539 0 1.26953V6.50583C0 7.20591 0.569476 7.77535 1.26953 7.77535H6.50583C7.20591 7.77535 7.77535 7.20588 7.77535 6.50583V1.26953C7.77538 0.569466 7.2059 0 6.50583 0H1.26916ZM10.9942 0C10.2941 0 9.72465 0.569476 9.72465 1.26953V6.50583C9.72465 7.20591 10.2941 7.77535 10.9942 7.77535H16.2305C16.9306 7.77535 17.5 7.20587 17.5 6.50583V1.26953C17.5 0.569473 16.9305 0 16.2305 0H10.9942ZM1.04299 1.26953C1.04299 1.14469 1.1447 1.04299 1.26916 1.04299H6.50583C6.63046 1.04299 6.73236 1.14491 6.73236 1.26953V6.50975C6.73025 6.63259 6.62917 6.73236 6.50586 6.73236H1.26953C1.14489 6.73236 1.04299 6.63044 1.04299 6.50583V1.26953ZM10.7676 1.26953C10.7676 1.14479 10.8693 1.04299 10.9942 1.04299H16.2305C16.3554 1.04299 16.457 1.14481 16.457 1.26953V6.50583C16.457 6.63056 16.3554 6.73236 16.2305 6.73236H10.9942C10.8693 6.73236 10.7676 6.63054 10.7676 6.50583V1.26953ZM1.26916 9.72461C0.569001 9.72461 0 10.2942 0 10.9942V16.2305C0 16.9305 0.569473 17.5 1.26953 17.5H6.50583C7.20591 17.5 7.77535 16.9305 7.77535 16.2305V10.9942C7.77539 10.2941 7.20591 9.72461 6.50583 9.72461H1.26916ZM10.9942 9.72461C10.2941 9.72461 9.72465 10.2941 9.72465 10.9941V16.2304C9.72465 16.9305 10.2941 17.5 10.9942 17.5H16.2305C16.9306 17.5 17.5 16.9305 17.5 16.2304V10.9942C17.5 10.2941 16.9305 9.72461 16.2305 9.72461H10.9942ZM6.73236 10.9942V16.2344C6.73025 16.3575 6.62926 16.457 6.50586 16.457H1.26953C1.14479 16.457 1.04299 16.3554 1.04299 16.2305V10.9942C1.04299 10.8691 1.14461 10.7676 1.26916 10.7676H6.50583C6.63056 10.7676 6.73236 10.8693 6.73236 10.9942ZM10.7676 10.9942C10.7676 10.8692 10.8692 10.7676 10.9942 10.7676H16.2305C16.3555 10.7676 16.457 10.8692 16.457 10.9942V16.2305C16.457 16.3555 16.3555 16.457 16.2305 16.457H10.9942C10.8692 16.457 10.7676 16.3555 10.7676 16.2305V10.9942Z"
                />

            </>
        </SvgIcon>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 2,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        backgroundColor: '#fff',
        color: 'black',
        display: 'flex',
        flexDirection: 'row'
    },
    appsIcon: {
        backgroundColor: 'red',
        borderRadius: 0
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        paddingLeft: 0,
        flexGrow: 1,
        marginLeft: '5px'
    },
    toolbarAppMenu: {
        width: '5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        // flexGrow:1,
    },
    toolBarDrawerToggleIcon:{
        marginLeft:1
    },
    divider: {
        marginLeft: -1,
        marginTop: theme.spacing(1.75),
        marginBottom: theme.spacing(1.75),
        color: theme.palette.grey[200],
        opacity: 0.3,
    },
    appName: {
        marginLeft: theme.spacing(2),
        fontSize: "1.125rem",
        color: theme.palette.common.black,
        fontWeight: "bold",
        alignSelf: "center",
    },


}));

export const AppTopBar = () => {
    const currentMenu = useSelector(state => state.ui.navigation.navigatedToPageName)
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <AppBar
            elevation={0}
            position="fixed"
            className={classes.appBar}
        >
            <Box className={classes.toolbarAppMenu}>
                <AppsIcon/>
            </Box>
            <Toolbar
                // variant="dense"
                className={classes.toolbar}
            >
                <IconButton className={classes.toolBarDrawerToggleIcon} edge="start" color="inherit" aria-label="menu" onClick={() => {
                    dispatch(toggleAppDrawer({}))
                }}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h2" className={classes.appName}>
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