import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CompanyStatus = (props) => {
    // const Transition = forwardRef(function Transition(props, ref) {
    //     return <Slide direction="up" ref={ref} {...props} />;
    // });
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Grid container sx={{ backgroundColor: '#f8f8f8', borderRadius: '1.5rem' }} spacing={1}>
                <Grid item xs={3}></Grid>
                <Grid item xs={5}><img className="ProfileImage" src={props?.user?.img} width={150} height={150}></img></Grid>
                <Grid item xs={3.5}></Grid>

                <Grid item xs={12}><Typography variant="userStatush1" sx={{ ml: '3.5rem',Align:'center' }}>{props?.user?.cname}</Typography></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                    <Button>
                        <Avatar>
                            <EmailOutlinedIcon />
                        </Avatar>
                    </Button>
                    <Button>
                        <Avatar>
                            <LocalPhoneSharpIcon />
                        </Avatar>
                    </Button>
                    <Button>
                        <Avatar>
                            <LanguageSharpIcon onClick={handleClickOpen} />
                        </Avatar>
                    </Button>

                </Grid>

                {/* <Grid item xs={12}>
                    <Button><Typography variant='userStatush4'> Open to work</Typography></Button>
                </Grid>


                <Grid item xs={12}>
                    <Button><Typography variant='userStatush4'> Open to interview</Typography></Button>
                </Grid> */}


                {/* <Grid item xs={12}>
                    <Typography variant='userStatush2'> Profile Completion</Typography>
                </Grid>

                <Grid item xs={12}>
                <CircularProgress variant="determinate" value={80} size={130} thickness={3.5}/>
                </Grid>
                <Grid item xs={12}>
                    <Button sx={{ backgroundColor: '#BFDDEE', borderRadius: '10px', padding: '.6rem' }}><Typography variant='userStatush3'>Complete your profile</Typography></Button>
                </Grid> */}

              
            </Grid >

            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>{"Portfolio/Social Links"}</DialogTitle>
                <DialogContent>

                    {props?.user?.about?.portfolios?.map((portfolio) => {
                        return (
                            <>


                                <Grid item container spacing={3}>
                                    <Grid item xs={2}>
                                        <Avatar>
                                            <LanguageSharpIcon />
                                        </Avatar>
                                    </Grid>
                                    <Grid item xs={10}>
                                    {portfolio.portfolioLink}
                                    </Grid>

                                </Grid>

                            </>
                        )
                    })}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CompanyStatus