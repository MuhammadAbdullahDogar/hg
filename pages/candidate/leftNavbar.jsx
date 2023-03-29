import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
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
                variant="permanent"
                anchor="left"
                open={value}

            >
                {/* <IconButton  ><MenuIcon /></IconButton> */}
                <List sx={{ mt: '5rem' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Image src="/overview.svg" alt="Overview icon" width={iconSize} height={iconSize} />
                            </ListItemIcon>
                            <ListItemText primary="Overview" />
                        </ListItemButton>
                    </ListItem>
                    <Link href={`/candidate/job/JobPost`}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                <Image src="/job.svg" alt="Job icon" width={iconSize} height={iconSize} />
                                </ListItemIcon>
                                <ListItemText primary="Job Post" />
                            </ListItemButton>
                        </ListItem>
                    </Link>

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
                                <Image src="/feedback.svg" alt="feedback icon" width={iconSize} height={iconSize} />
                            </ListItemIcon>
                            <ListItemText primary="Feedbacks" />
                        </ListItemButton>
                    </ListItem>

                    <Link href={`/${props.id}/Logout`}>

                        <ListItem disablePadding sx={{ mt: '5rem' }} >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Image src="/Logout.svg" alt="Logout icon" width={iconSize} height={iconSize} />
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


