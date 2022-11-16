import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

const leftNavbar = () => {
    return (
        <>
            <Drawer
                variant="persistent"
                anchor="left"
                open='true'

            >
                <IconButton  ><MenuIcon onClick={handleChange} /></IconButton>
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

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/applications.svg" alt=''></img>
                            </ListItemIcon>
                            <ListItemText primary="Job Application" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/profile.png" alt=''></img>
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>

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
                            <ListItemText primary="Logout"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default leftNavbar