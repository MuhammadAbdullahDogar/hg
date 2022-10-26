import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import React from 'react'


const CustomTextField = styled(TextField)(() => ({
    '& label.Mui-focused': {
        color: '#32B126'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '.15rem solid #A4BFA2',
            borderRadius: '2.3vmin',

        },
        '&:hover fieldset': {
            borderColor: '#32B126'

        },
        '&.Mui-focused fieldset': {
            border: '.15rem solid #32B126'
        },
    },
}));

const MyTextField = (props) => {
    return (
        <CustomTextField {...props}  fullWidth/>
    )
};

export default MyTextField