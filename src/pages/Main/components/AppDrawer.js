import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from "react-redux";
import {AppDrawerMenuList} from "./AppDrawerMenuList";
import {toggleAppDrawer} from "../../../redux/slices/NavigationSlice";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const AppDrawer = () => {
    const drawerState = useSelector(state => state.navigation.drawer)
    const dispatch = useDispatch()
    const classes = useStyles();
    //
    const toggleDrawer = (open) => (event) => {
        dispatch(toggleAppDrawer({open:open, eventType : event.type, eventKey:event.key}))
    };
    //
    return (
        <Drawer
            anchor='left'
            variant='persistent'
            open={drawerState.open}
            onClose={toggleDrawer(false)}
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}/>
            <Divider />
            <AppDrawerMenuList/>
        </Drawer>
    )
}