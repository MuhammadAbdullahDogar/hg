import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import NextLink from "next/link";
import { Box } from '@mui/material';

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
const UserProfileTab = (props) => {
    const [value, setValue] = useState(props.value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                onChIange={handleChange}
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
                <Tab component={NextLinkComposed} label="Personal Details" to="/homePages/userDashboard" />
                <Tab component={NextLinkComposed} label="Academic Information" to="/homePages/userAcademicInformation" />
                <Tab component={NextLinkComposed} label="Experience and Skills" to="/homePages/userExperience" />
            </Tabs>
        </>
    )
}

export default UserProfileTab