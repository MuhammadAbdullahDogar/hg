import { Grid, Typography, Box, Button, Chip,TextField } from '@mui/material'
import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image'
import vector17 from '../../../public/Ellipse120.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const JobCard = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);
    const [Questions, setQuestions] = React.useState([
        { key: 0, label: 'How many years of experience do you have working with Figma?' },
        { key: 1, label: 'How many years of experience do you have working with Adobe Photoshop?' },
        { key: 2, label: 'How many years of experience do you have working with Figma?' },
        { key: 3, label: 'How many years of experience do you have working with Adobe Photoshop?' },
        { key: 4, label: 'How many years of experience do you have working with Figma?' },
    ]);
    const handleClickOpen = () => {
        setOpen1(true);
    };
    const handleOpen1 = () => {
        setOpen1(false);
        setOpen2(true);
    }
    const handleOpen2 = () => {
        setOpen1(false);
        setOpen2(false);
    }
    const handleClose = () => {
        setOpen1(false);
        setOpen2(false);
    }
    return (
        <>
            <Box sx={{ background: 'rgba(36, 162, 233, 0.1)', height: '13.75rem', borderRadius: '0.625rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={7}><Typography variant='JobCardH1'>Senior Software Engineer</Typography><br></br><Typography variant='JobCardH2'> Remote Possible - Lahore, Pakistan</Typography></Grid>
                    <Grid item xs={2}><Link href="/candidate/job/ViewJob"><Button>View Job Posting </Button></Link></Grid>
                    <Grid item xs={1.4}><Button onClick={handleClickOpen}>Apply to Job </Button></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={11}><Typography variant='JobCardH2'>We are looking for a passionate Software Engineer to design, develop and install software solutions. Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages. Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment.</Typography></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={.5}></Grid>
                    <Grid item xs={9.5}>
                        {
                            chipData.map(data => (
                                <Chip label={data.label} color="primary" size="small" key={data.id} />

                            ))
                        }
                    </Grid>
                    <Grid item xs={1.5}><Typography variant='caption'>POSTED A WEEK AGO</Typography></Grid>
                    <Grid item xs={.5}></Grid>
                </Grid>
            </Box>
            <Dialog
                open={open1}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle><Image src={vector17} alt="IMG"/></DialogTitle>
                <DialogContent>
                    <FormControl >
                        <FormLabel >
                            Senior Product Designer
                        </FormLabel>
                        <FormGroup>


                        </FormGroup>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleOpen1}>Next</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open2}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>Screening Questions</DialogTitle>
                <DialogContent>
                    {
                        Questions.map(data => (
                            <TextField label={data.label} variant="outlined" fullWidth key={data.id} name="endingDate" />

                        ))
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleOpen2}>Next</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default JobCard