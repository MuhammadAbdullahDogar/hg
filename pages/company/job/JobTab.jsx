import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

const JobTab = (props) => {
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
                <Tab  label="CANDIDATES"  onClick={() => props.setUserInfo(0)} />
                <Tab  label="JOB DETAILS"  onClick={() => props.setUserInfo(1)} />
            </Tabs>
        </>
  )
}

export default JobTab