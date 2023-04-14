import Link from "next/link";
import Image from 'next/image';
import { signOut } from 'next-auth/react'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});




const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const LeftNavbar = () => {
  
    const iconSize = 25;
 

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (


        <>
            <Box sx={{ display: 'flex', }}>
                <Drawer variant="permanent" open={open}>
                   
                    <List sx={{ mt: '5rem' }}>
                        <ListItem disablePadding>
                            <ListItemButton
                                onMouseEnter={handleDrawerOpen}
                                onMouseLeave={handleDrawerClose}
                            >
                                <ListItemIcon>
                                    <Image src="/overview.svg" alt="Overview icon" width={iconSize} height={iconSize} />
                                </ListItemIcon>
                                <ListItemText primary="Overview" />
                            </ListItemButton>
                        </ListItem>
                        <Link href={`/candidate/job/JobPost`}>
                            <ListItem disablePadding>
                                <ListItemButton
                                 onMouseEnter={handleDrawerOpen}
                                 onMouseLeave={handleDrawerClose}
                                >
                                    <ListItemIcon>
                                        <Image src="/job.svg" alt="Job icon" width={iconSize} height={iconSize} />
                                    </ListItemIcon>
                                    <ListItemText primary="Job Post" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href={`/candidate/JobApplication/jobApplication`}>
                            <ListItem disablePadding>
                                <ListItemButton
                                 onMouseEnter={handleDrawerOpen}
                                 onMouseLeave={handleDrawerClose}
                                >
                                    <ListItemIcon>
                                        <Image
                                            src="/applications.svg"
                                            alt="clickable image"
                                            width={iconSize}
                                            height={iconSize}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Job Application" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href={`/candidate/UserDashboard`}>
                            <ListItem disablePadding>
                                <ListItemButton
                                 onMouseEnter={handleDrawerOpen}
                                 onMouseLeave={handleDrawerClose}
                                >
                                    <ListItemIcon>
                                        <Image
                                            src="/profile.png"
                                            alt="clickable image"
                                            width={iconSize}
                                            height={iconSize}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <ListItem disablePadding>
                            <ListItemButton
                             onMouseEnter={handleDrawerOpen}
                             onMouseLeave={handleDrawerClose}
                            >
                                <ListItemIcon>
                                    <Image src="/feedback.svg" alt="feedback icon" width={iconSize} height={iconSize} />
                                </ListItemIcon>
                                <ListItemText primary="Feedbacks" />
                            </ListItemButton>
                        </ListItem>
                       
                            <ListItem disablePadding sx={{ mt: '5rem' }} >
                                <ListItemButton
                                onClick={signOut}
                                >
                                    <ListItemIcon>
                                        <Image src="/Logout.svg" alt="Logout icon" width={iconSize} height={iconSize} />
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" />
                                </ListItemButton>
                            </ListItem>
                       
                    </List>
                </Drawer>

            </Box>
        </>

    )
}

export default LeftNavbar


