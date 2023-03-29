import { Grid,Button} from '@mui/material'
import React from 'react'
import LeftNavbar from '../leftNavbar'
import TopNavbar from '../topNavbar'
import { useRouter } from 'next/router'

const ViewJob = () => {
    return (
        <Grid container>
            <Grid item xs={12}><TopNavbar></TopNavbar></Grid>
            <Grid item xs={2}><LeftNavbar></LeftNavbar></Grid>

            <Grid container item xs={9.8} sx={{  minHeight: '80vh' }}>
                <Grid item xs={12} >Back to All Jobs  <Button color='primary'>Apply to Job</Button></Grid>
                <Grid item xs={12} >POSTED A WEEK AGO</Grid>
                <Grid item xs={12} >Senior Software Engineer</Grid>
                <Grid item xs={12} >PKR 80,000 - 100,8000</Grid>
                <Grid item xs={12} >We are looking for a passionate Software Engineer to design, develop and install software solutions.
                    Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment.
                    Ultimately, the role of the Software Engineer is to build high-quality, innovative and fully performing software that complies with coding standards and technical design.
                </Grid>


            </Grid>
        </Grid>
    )
}

export default ViewJob