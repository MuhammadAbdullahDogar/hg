import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material'
const CompanyStepper = (props) => {
    return (
        <>
            <Stepper activeStep={props.step} >
                <Step ><StepLabel ><Typography variant="profileH2">{props.step1_Name}</Typography></StepLabel></Step>
                <Step><StepLabel><Typography variant="profileH2">{props.step2_Name}</Typography></StepLabel></Step>
                <Step><StepLabel><Typography variant="profileH2">{props.step3_Name}</Typography></StepLabel></Step>
            </Stepper>
        </>
    )
}

export default CompanyStepper