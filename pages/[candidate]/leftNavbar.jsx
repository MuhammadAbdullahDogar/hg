import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from "next/link";
import React from 'react'
import Image from 'next/image';
import { signOut } from 'next-auth/react'


const leftNavbar = (props) => {
    const value = true;
    const iconSize = 20;
    return (
        <>
            <Drawer
                variant="persistent"
                anchor="left"
                open={value}

            >
                {/* <IconButton  ><MenuIcon /></IconButton> */}
                <List sx={{ mt: '5rem' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/overview.svg" alt=''></img>
                            </ListItemIcon>
                            <ListItemText primary="Overview" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/job.svg" alt=''></img>
                            </ListItemIcon>
                            <ListItemText primary="Job Postss" />
                        </ListItemButton>
                    </ListItem>

                    <Link href={`/candidate/jobApplication`}>
                        <ListItem disablePadding>
                            <ListItemButton>
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
                            <ListItemButton>
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
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/feedback.svg" alt=''></img>
                            </ListItemIcon>
                            <ListItemText primary="Feedbacks" />
                        </ListItemButton>
                    </ListItem>

                    <Link href={`/${props.id}/Logout`}>

                        <ListItem disablePadding sx={{ mt: '5rem' }} >
                            <ListItemButton>
                                <ListItemIcon>
                                    <img src="/Logout.svg" alt=''></img>
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </>
    )
}

export default leftNavbar


