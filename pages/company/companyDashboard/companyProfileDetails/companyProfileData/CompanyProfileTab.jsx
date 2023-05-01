import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NextLink from "next/link";
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';

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

const CompanyProfileTab = (props) => {
    const [value, setValue] = useState(props.value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const router = useRouter();

    const handleClickk = () => {
        router.push({
            pathname: '/company/profile_development/ProfileAbout',
            // query: { myProp: 'hello' },
        });
    };




    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                sx={{
                    fontFamily: 'Urbanist',
                    letterSpacing: '0.02em',
                    fontWeight: '600',
                    lineHeight: "1.375rem",
                    fontSize: '1.125rem',
                    color: '#363636',
                }}
            >
                <Tab component={NextLinkComposed} to='/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails' label="Company Details" />
                <Tab component={NextLinkComposed} to='/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyNotableWork' label="Notable Work" />

                <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleClick}
                >
                    <MoreIcon />
                    <Menu

                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={() => { handleClickk(); handleClose(); }}>edit</MenuItem>
                        <MenuItem onClick={() => { console.log("cv"); handleClose(); }}>generate cv</MenuItem>
                    </Menu>
                </IconButton>
            </Tabs>
        </>
    )
}

export default CompanyProfileTab