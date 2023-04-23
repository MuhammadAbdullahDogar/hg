import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

const UserProfileTab = (props) => {
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
        pathname: '/candidate/profile_development/ProfileAbout',
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

                <Tab label="Personal Details" onClick={() => props.setUserInfo(0)} />
                <Tab label="Academic Information" onClick={() => props.setUserInfo(1)} />
                <Tab label="Experience and Skills" onClick={() => props.setUserInfo(2)} />
                <Tab label="other" onClick={handleClick} />
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
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
                    <MenuItem onClick={() => {handleClickk(); handleClose(); }}>edit</MenuItem>
                    <MenuItem onClick={() => { console.log("cv"); handleClose(); }}>generate cv</MenuItem>
                </Menu>
            </Tabs>
        </>
    )
}

export default UserProfileTab