import React from 'react'
import { Tabs, Tab } from '@mui/material';

const userProfileTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                sx={{backgrondColor:'red'}}
            >
                <Tab  label="Personal Details" />
                <Tab  label="Academic Information" />
                <Tab  label="Experience and Skills" />
            </Tabs>
        </>
    )
}

export default userProfileTab