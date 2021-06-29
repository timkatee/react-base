import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from '@material-ui/icons/Apps';
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {toggleAppDrawer} from "../../../redux/slices/NavigationSlice";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    }
}));

export  const AppTopBar = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>{dispatch(toggleAppDrawer({}))}}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
                Meerkat
            </Typography>
            {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
    </AppBar>
}