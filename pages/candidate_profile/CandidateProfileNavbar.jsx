import React from 'react'
import { Grid, Typography, Container } from '@mui/material'
import Link from 'next/link'
import MyTab from '../../styles/MyTab'
import EmailIcon from '@mui/icons-material/Email';
import RestoreIcon from '@mui/icons-material/Restore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import FeedIcon from '@mui/icons-material/Feed';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((customTheme) => ({
    container: {
        display:'flex',
        flexDirection:'column',
        height: '100vh',
        backgroundColor:"#f0f5ef",
    },
    logoText:{
        paddingLeft:'1rem',
        [customTheme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    logo:{
        display:'flex',
        alignItems:'center',
        padding :'2rem'
    },
    item: {
        display: "flex",
        alignItems: "center",
        color:"green",
        margin:'1rem 0 0 0',
        [customTheme.breakpoints.up("sm")]: {
            marginBottom: customTheme.spacing(3),
            cursor: 'pointer',
        }

    },
    text: {
        paddingLeft: '1rem',
        minHeight: '1rem',
        textTransform: 'none',
        fontFamily: 'Urbanist',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        justifyContent: 'left',
        color: '#a2b8a0',
        [customTheme.breakpoints.down("sm")]: {
            display: 'none'
        },
    }

}));
const CandidateProfileNavbar = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.logo}>
                <Link href="/"><img src='/logo.svg'></img></Link>
                <Typography variant="profileLogoFont" className={classes.logoText}>Hiring Genie</Typography>
            </div>
            <div className={classes.item}>
                <FeedIcon className={classes.icon} />
                <Typography className={classes.text}>Job Feed</Typography>
            </div>

            <div className={classes.item}>
                <RestoreIcon className={classes.icon} />
                <Typography className={classes.text}>Applications Status</Typography>
            </div>

            <div className={classes.item}>
                <AccountCircleIcon className={classes.icon} />
                <Typography className={classes.text}>Interview Feedback</Typography>
            </div>

            <div className={classes.item}>
                <EmailIcon className={classes.icon} />
                <Typography className={classes.text}>Messages</Typography>
            </div>
        </Container>
    )
}

export default CandidateProfileNavbar   