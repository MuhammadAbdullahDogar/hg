import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

const Anchor = styled('a')({});
const UserProfileTab = (props) => {
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
                <Tab  label="Personal Details"  onClick={() => props.setUserInfo(0)} />
                <Tab  label="Academic Information"  onClick={() => props.setUserInfo(1)} />
                <Tab  label="Experience and Skills"  onClick={() => props.setUserInfo(2)} />
            </Tabs>
        </>
    )
}

export default UserProfileTab