import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {toggleAppDrawer} from "../../../redux/slices/NavigationSlice";
import {useDispatch} from "react-redux";
const menuList = [
    {name:'Detected Issues', icon:''}
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
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}