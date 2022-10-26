import React, { useState } from 'react'
import Link from 'next/link'
import { Grid, Typography, Avatar, Badge, IconButton, Paper, InputAdornment, AppBar, Toolbar, } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import MyTextField from '../../styles/MyTextField'
import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
const useStyles = makeStyles((customTheme) => ({
    Toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        background: 'white',
        paddingTop:'1rem'
    },
    search: {
        display: "flex",
        alignItems: "center",
        marginRight: "10rem",
        width: '60%',
        [customTheme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: '100%'
        }
    },
    searchButton: {
        marginRight: customTheme.spacing(3),
        [customTheme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    Icons: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: "center",
        marginRight: customTheme.spacing(1),
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: customTheme.spacing(3),
    }

}));
const CandidateProfileTopNavbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <AppBar  position='static'>
            <Toolbar className={classes.Toolbar}>
                <div className={classes.search}>
                    <MyTextField label="Type here to search..."
                        
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="start" >
                                    <CancelIcon onClick={() => setOpen(false)} />
                                </InputAdornment>
                            ),
                        }}
                    ></MyTextField>
                </div>


                <div className={classes.Icons}>
                    <SearchIcon className={classes.searchButton} onClick={() => setOpen(true)} />
                    <Badge color="secondary"  className={classes.badge} >
                        <EmailIcon fontSize='medium' color='primary' />
                    </Badge>
                    <Badge color="secondary" badgeContent={99} className={classes.badge}>
                        <NotificationsIcon fontSize='medium' color='primary' />
                    </Badge>
                    <Avatar alt="Image" src="/demo.jpg" sx={{ width: 56, height: 56 }} />
                </div>
            </Toolbar>
        </AppBar >
    )
}









// import React from 'react'
// import { Grid, Typography, Avatar, Badge, IconButton, Paper, InputAdornment } from '@mui/material'
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SearchIcon from '@mui/icons-material/Search';
// import MyTextField from '../../styles/MyTextField'
// const CandidateProfileTopNavbar = () => {
//     return (
//         <Grid container sx={{ marginTop: '1.5rem' }}>
//             <Grid xs={.5}></Grid>
//             <Grid item xs={6}>
//                 <MyTextField label="Type here to search..."
//                     InputProps={{
//                         endAdornment: (
//                             <InputAdornment position="start">
//                                 <IconButton type="button" sx={{ p: '10px' }}>
//                                     <SearchIcon />
//                                 </IconButton>
//                             </InputAdornment>
//                         ),
//                     }}
//                 ></MyTextField>

//             </Grid>
//             <Grid item xs={.5}></Grid>
//             <Grid item xs={.5} sx={{ marginTop: '.6rem' }}>
//                 <Badge color="secondary" badgeContent={99}>
//                     <NotificationsIcon fontSize='large' color='primary' />
//                 </Badge>

//             </Grid>
//             <Grid item container xs={4.5} >
//                 <Grid item xs={12}></Grid>
//                 <Grid item xs={2}></Grid>
//                 <Grid item xs={2}><Avatar alt="Image" src="/demo.jpg" sx={{ width: 56, height: 56 }} /></Grid>
//                 <Grid container direction="column" xs={8}>
//                     <Grid item xs={2}></Grid>
//                     <Grid item><Typography variant='profielH6'>Welcome,</Typography></Grid>
//                     <Grid item><Typography variant='profielH5'>James Smith</Typography> </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//     )
// }

// export default CandidateProfileTopNavbar

export default CandidateProfileTopNavbar