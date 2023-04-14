import { Grid, Typography } from '@mui/material'

const UserProfileData = ({ user }) => {

    return (
        <>
            <Grid container sx={{ borderRadius: '0 0 1rem 1rem', backgroundColor: '#F8F8F8', minHeight: '70vh' }} >
                <Grid item xs={12}></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}><Typography variant="displayh1"> About Information</Typography></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">Title</Typography><br /><Typography variant="displayh5">{user?.about?.title}</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">FirstName</Typography> <br /><Typography variant="displayh5">{user?.fname}</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">LastName</Typography><br /><Typography variant="displayh5">{user?.lname}</Typography></Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={2}><Typography variant="displayh4">Gender</Typography><br /><Typography variant="displayh5">Male</Typography></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Date of Birth</Typography><br /><Typography variant="displayh5">{user?.about?.dob}</Typography></Grid>
                <Grid item xs={1}><Typography variant="displayh4">City/State</Typography><br /><Typography variant="displayh5">{user?.about?.city}</Typography></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}><Typography variant="displayh4">Country</Typography><br /><Typography variant="displayh5">{user?.about?.country}</Typography></Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={3}><Typography variant="displayh4">Phone Number</Typography><br /><Typography variant="displayh5">{user?.phone}</Typography></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11.5}><Typography variant="displayh4">About Tech:</Typography></Grid>
                <Grid item xs={.5}></Grid>
                <Grid item xs={11}><Typography variant="displayh5">{user?.about?.description}</Typography></Grid>
                <Grid item xs={.5}></Grid>
            </Grid>
        </>
    )
}

export default UserProfileData