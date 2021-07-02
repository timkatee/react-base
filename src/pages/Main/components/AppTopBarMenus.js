import {Badge, IconButton} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        float:'left'
    },
}));

export const AppTopBarMenus = () => {
    const classes = useStyles();
    return (
        <div className={classes.sectionDesktop}>
            {/*<IconButton aria-label="show 4 new mails" color="inherit">*/}
            {/*    <Badge badgeContent={4} color="secondary">*/}
            {/*        <MailIcon />*/}
            {/*    </Badge>*/}
            {/*</IconButton>*/}
            <IconButton aria-label="" color="inherit">
                <Badge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
        </div>
    )
}