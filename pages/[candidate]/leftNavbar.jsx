import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import React from 'react'
import Image from 'next/image';

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

                    <Link href={`/${props.id}/jobApplication`}>
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
                <Link href={`/${props.id}/UserDashboard`}>
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

                <ListItem disablePadding sx={{ mt: '5rem' }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src="/Logout.svg" alt=''></img>
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        </>
    )
}

export default leftNavbar