// import { Box, Stack, Paper, Tooltip } from '@mui/material'
// import { styled } from '@mui/material/styles';
// import Image from 'next/image';
// import Link from 'next/link';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';


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
    background: "linear-gradient(266.95deg, #EDEDED 4.69%, #E0E0E0 101.7%)",
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
// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     cursor: 'pointer',
//     marginTop: '8.5rem',
// }));
const size = 30;
const CompanyDahboardLeftNavbar = () => {
    const iconSize = 20;


    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box >
                <Drawer variant="permanent" open={open}>

                    <List sx={{ mt: '5rem' }}>
                        <Link href="/company/companyDashboard/company_dashboard/CompanyDashboard">
                            <ListItem disablePadding>
                                <ListItemButton
                                    onMouseEnter={handleDrawerOpen}
                                    onMouseLeave={handleDrawerClose}
                                >
                                    <ListItemIcon>
                                        <Image
                                            src="/Vector.svg"
                                            alt="logo"
                                            width={size}
                                            height={size}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Overview" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails">

                            <ListItem disablePadding>
                                <ListItemButton
                                    onMouseEnter={handleDrawerOpen}
                                    onMouseLeave={handleDrawerClose}
                                >
                                    <ListItemIcon>
                                        <Image
                                            src="/profile.png"
                                            alt="logo"
                                            width={size}
                                            height={size}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Company Profile" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/company/job">

                            <ListItem disablePadding>
                                <ListItemButton
                                    onMouseEnter={handleDrawerOpen}
                                    onMouseLeave={handleDrawerClose}
                                >
                                    <ListItemIcon>
                                        <Image
                                            src="/BriefcaseFill.svg"
                                            alt="logo"
                                            width={size}
                                            height={size}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Job Post" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/company/job/jobResult/JobResult">

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
                        <Link href="/company/job/jobResult/JobResult">
                            <ListItem disablePadding>
                                <ListItemButton
                                    onMouseEnter={handleDrawerOpen}
                                    onMouseLeave={handleDrawerClose}
                                >
                                    <ListItemIcon>
                                        <AutoGraphIcon />

                                    </ListItemIcon>
                                    <ListItemText primary="Feedbacks" />
                                </ListItemButton>
                            </ListItem>
                        </Link>

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

export default CompanyDahboardLeftNavbar