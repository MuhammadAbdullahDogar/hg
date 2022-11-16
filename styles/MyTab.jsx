import React from 'react'
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RestoreIcon from '@mui/icons-material/Restore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import FeedIcon from '@mui/icons-material/Feed';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NextLink from "next/link";

import { Grid, Typography, Container } from '@mui/material'
import Link from 'next/link'
import { makeStyles } from '@mui/styles';

const Anchor = styled('a')({});
function NextLinkComposed(props) {
    const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } = props;

    return (
        <NextLink
            href={to}
            prefetch={prefetch}
            as={linkAs}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref
            locale={locale}
        >
            <Anchor {...other} />
        </NextLink>
    );
}

const AntTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        width: '.5rem',
        height: '4rem',
        borderRadius: '.625rem 0 0 .625rem',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    () => ({
        padding: '1rem',
        minHeight: '1rem',
        textTransform: 'none',
        fontFamily: 'Urbanist',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        justifyContent: 'left',
        color: '#a2b8a0',
        '&.Mui-selected': {
            fontWeight: 600,
            color: '#32B126',
            background: 'linear-gradient(269.77deg, #F7FFF6 -3.11%, rgba(255, 255, 255, 0) 106.91%)',

        }
    }),
);

const useStyles = makeStyles((customTheme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: "#f6f6f9",
    },
    logoText: {
        paddingLeft: '1rem',
        [customTheme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        [customTheme.breakpoints.up("sm")]: {
            padding: '2rem',
        }
    },
    item: {
        display: "flex",
        alignItems: "center",
        color: '#f6f6f9',
        margin: '1rem 0 0 0',
        [customTheme.breakpoints.up("sm")]: {
            marginBottom: customTheme.spacing(3),
            cursor: 'pointer',
        }

    },
    desktop: {
        paddingLeft: '1rem',
        minHeight: '1rem',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        [customTheme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    mobile: {
        paddingLeft: '1rem',
        minHeight: '1rem',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        [customTheme.breakpoints.up("sm")]: {
            display: 'none'
        },
    }

}));

const MyTab = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(props.value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Grid container className={classes.desktop}>
                <Grid item className={classes.logo}>
                    <Link href="/"><img src='/logo.svg'></img></Link>
                    <Typography variant="profileLogoFont" className={classes.logoText}>Hiring Genie</Typography>
                </Grid>
                <Grid item >
                    <AntTabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                    >
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateJobFeed' icon={<FeedIcon />} iconPosition="start" label="Job Feed" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateApplicationsstatus' icon={<RestoreIcon />} iconPosition="start" label="Applications Status" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateProfile' icon={<AccountCircleIcon />} iconPosition="start" label="Profile" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateInterviewFeedback' icon={<FeedbackIcon />} iconPosition="start" label="Interview Feedback" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateMessages' icon={<AccountCircleIcon />} iconPosition="start" label="Messages" />
                    </AntTabs></Grid>
                <Grid item></Grid>
            </Grid>

            <Grid container className={classes.mobile}>
                <Grid item className={classes.logo}>
                    <Link href="/"><img src='/logo.svg'></img></Link>
                </Grid>
                <Grid item >
                    <AntTabs
                        orientation="vertical"
                        value={props.value}
                    >
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateJobFeed' icon={<FeedIcon />} iconPosition="start" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateApplicationsstatus' icon={<RestoreIcon />} iconPosition="start" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateProfile' icon={<AccountCircleIcon />} iconPosition="start" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateInterviewFeedback' icon={<FeedbackIcon />} iconPosition="start" />
                        <StyledTab component={NextLinkComposed} to='/candidate_profile/CandidateMessages' icon={<AccountCircleIcon />} iconPosition="start" />
                    </AntTabs></Grid>
                <Grid item></Grid>
            </Grid>
        </>
    )
}

export default MyTab