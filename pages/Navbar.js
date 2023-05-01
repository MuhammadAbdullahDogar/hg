import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NextLink from "next/link";
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const Anchor = styled('a')({});
const NextLinkComposed = React.forwardRef(function NextLinkComposed(props, ref) {
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
},);
const Navbar = (props) => {
    const navbar_sign = {
        width: '5.5625rem',
        height: '2.5625rem',
        border: '.18rem solid',
        borderRadius: '0.75rem',
        borderTopColor: '#32B126',
        borderRightColor: '#32B126',
        borderBottomColor: '#24A2E9',
        borderLeftColor: '#24A2E9',
        fontFamily: 'Comfortaa',
        fontWeight: 500,
        fontSize: '.9375rem',
        lineHeight: '1.0625rem',
        backgroundColor: 'Transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        color: props.color
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <>
            <Grid container >
                <Grid item xs={1} sx={{ marginTop: '.4rem' }}><Image src="/logo.svg" alt='logo' width={1.8125} height={2.875} style={{ marginLeft: '3.75rem' }}></Image></Grid>
                <Grid item xs={9.8} >
                    <Tabs value={value} onChange={handleChange} centered sx={{
                        fontFamily: 'Comfortaa',
                        fontWeight: 500,
                        fontSize: '.9375rem',
                        lineHeight: '1.0625rem'
                    }}>
                        <Tab component={NextLinkComposed} to='/' style={{ color: props.color }} label="Home" />
                        <Tab component={NextLinkComposed} to='#HowItWork' style={{ color: props.color }} label="How it works?" />
                        <Tab component={NextLinkComposed} to='#FAQ' style={{ color: props.color }} label="FAQs" />
                    </Tabs>
                </Grid>
                <Grid item xs={1} sx={{ marginTop: '.4rem' }}><NextLink href={`/${props.btnName}`} ><button style={navbar_sign}>{props.btnName}</button></NextLink></Grid>
            </Grid>
        </>
    )
}
export default Navbar