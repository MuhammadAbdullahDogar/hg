import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
const CustomMySelect = styled(Select)(() => ({
    '& .MuiInputBase-input': {
        border: '.15rem solid #A4BFA2',
        borderRadius: '2.3vmin',
    },
}));

const MySelect = (props) => {
    return (
        <CustomMySelect {...props} fullWidth />
    )
}

export default MySelect

// MuiOutlinedInput-input -MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input"