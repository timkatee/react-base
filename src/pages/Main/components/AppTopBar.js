import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Badge, Box, Divider, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from '@material-ui/icons/Apps';
import {useDispatch, useSelector} from "react-redux";
import {toggleAppDrawer} from "../../../redux/slices/UiSlice";
import {AppTopBarMenus} from "./AppTopBarMenus";
import clsx from "clsx";
import SvgIcon from '@material-ui/core/SvgIcon';

// function AppsIcon(props) {
//     return (
//         <SvgIcon {...props}>
//
//         </SvgIcon>
//     );
// }



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
        display:'flex',
        flexDirection:'row'
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
        flexGrow:1,
        marginLeft:'5px'
    },
    toolbarAppMenu : {
        width:'5em',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:theme.palette.primary.main,
        color: theme.palette.common.white,
        // flexGrow:1,
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
        fontWeight: "normal",
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
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {
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