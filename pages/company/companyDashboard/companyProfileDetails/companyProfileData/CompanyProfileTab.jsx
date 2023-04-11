import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NextLink from "next/link";
import { styled } from '@mui/material/styles';
import { useState } from 'react';
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
                <Tab  component={NextLinkComposed} to='/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails' label="Company Details" />
                <Tab  component={NextLinkComposed} to='/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyNotableWork' label="Notable Work"   />
            </Tabs>
        </>
    )
}

export default CompanyProfileTab