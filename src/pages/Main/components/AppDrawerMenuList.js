import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {toggleAppDrawer} from "../../../redux/slices/NavigationSlice";
import {useDispatch} from "react-redux";
const menuList = [
    {name:'Detected Issues', icon:<ErrorOutlineIcon/>}
]
export const AppDrawerMenuList = () => {
    const dispatch = useDispatch()
    const toggleDrawer = (open) => (event) => {
        dispatch(toggleAppDrawer({open:open, eventType : event.type, eventKey:event.key}))
    };
    return (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuList.map((menu, index) => (
                    <ListItem button key={menu.name}>
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.name}/>
                    </ListItem>
                ))}
            </List>
            {/*<Divider/>*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem button key={text}>*/}
            {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
            {/*            <ListItemText primary={text}/>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </div>
    )
}