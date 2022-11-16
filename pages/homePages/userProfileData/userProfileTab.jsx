import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const UserProfileTab = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                sx={{ backgrondColor: 'red' }}
            >
                <Tab label="Personal Details" />
                <Tab label="Academic Information" />
                <Tab label="Experience and Skills" />
            </Tabs>
        </>
    )
}

export default UserProfileTab