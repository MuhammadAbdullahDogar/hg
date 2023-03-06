import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material'
const stepper = (props) => {
    return (
        <>
            <Stepper activeStep={props.step} >
                <Step ><StepLabel ><Typography variant="profileH2">About you</Typography></StepLabel></Step>
                <Step><StepLabel><Typography variant="profileH2">Academic Information</Typography></StepLabel></Step>
                <Step><StepLabel><Typography variant="profileH2">Experience and_Skills</Typography></StepLabel></Step>
            </Stepper>
        </>
    )
}

export default stepper