import React from 'react'
import Link from 'next/link'
import { Grid, Typography, Avatar, Badge, Container, Paper, InputAdornment, AppBar, Toolbar, } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import MyTextField from '../../styles/MyTextField'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((customTheme) => ({
    container: {
        height: '100vh',
        paddingTop: customTheme.spacing(15),
        backgroundColor: customTheme.palette.primary.main
    },
    item: {
        display: "flex",
        alignItems: "center",
        color: '#fff',
        marginBottom: customTheme.spacing(4),
        [customTheme.breakpoints.up("sm")]: {
            marginBottom: customTheme.spacing(3),
            cursor: 'pointer'
        }

    },
    text: {
        [customTheme.breakpoints.down("sm")]: {
            display: 'none'
        },
    }

}));
const CandidateProfileLeftBar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <EmailIcon className={classes.icon} />
                <Typography className={classes.text}>Email</Typography>
            </div>

            <div className={classes.item}>
                <EmailIcon className={classes.icon} />
                <Typography className={classes.text}>Email</Typography>
            </div>

            <div className={classes.item}>
                <EmailIcon className={classes.icon} />
                <Typography className={classes.text}>Email</Typography>
            </div>

            <div className={classes.item}>
                <EmailIcon className={classes.icon} />
                <Typography className={classes.text}>Email</Typography>
            </div>

            <div className={classes.item}>
                <EmailIcon className={classes.icon} />
                <Typography className={classes.text}>Email</Typography>
            </div>
        </Container>
    )
}

export default CandidateProfileLeftBar