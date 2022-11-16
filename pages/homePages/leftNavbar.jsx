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
                <IconButton color="inherit" edge="start"><MenuIcon /></IconButton>
                <List sx={{mt:'5rem'}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon></MenuIcon>
                            </ListItemIcon>
                            <ListItemText primary="Overview"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon></MenuIcon>
                            </ListItemIcon>
                            <ListItemText primary="Job Posts"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon></MenuIcon>
                            </ListItemIcon>
                            <ListItemText primary="Job Application"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon></MenuIcon>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon></MenuIcon>
                            </ListItemIcon>
                            <ListItemText primary="Feedbacks"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{mt:'5rem'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon></MenuIcon>
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