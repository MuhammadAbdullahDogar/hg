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

const UserStatus = (props) => {
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
            <Grid container sx={{ backgroundColor: '#f8f8f8', borderRadius: '1.5rem' }} mt={.001} spacing={1}>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}><img className="ProfileImage" src={props.user?.img} width={150} height={150}/></Grid>
                <Grid item xs={3.5}></Grid>

                <Grid item xs={12}><Typography variant="userStatush1" sx={{ ml: '.7rem' }}>{props.user?.fname} {props.user?.lname} </Typography></Grid>
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

                <Grid item xs={12}>
                    <Button><Typography variant='userStatush4'> Open to work</Typography></Button>
                </Grid>


                <Grid item xs={12}>
                    <Button><Typography variant='userStatush4'> Open to interview</Typography></Button>
                </Grid>


                <Grid item xs={12}>
                    <Typography variant='userStatush2'> Open to working as</Typography>
                </Grid>

                {props.user?.openToWorkingAs?.map(workAs => {
                    return (
                            <Grid item xs={12} key={workAs}>
                                <Button sx={{ backgroundColor: '#BFDDEE', borderRadius: '10px', padding: '.6rem' }}>
                                    <Typography variant='userStatush3'>{workAs}</Typography>
                                </Button>
                            </Grid>
                    );
                })}

            </Grid >

            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>{"Portfolio/Social Links"}</DialogTitle>
                <DialogContent>


                    {props?.user?.about?.portfolios?.map((portfolio, index) => {
                        return (
                            <div key={index}>
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
                            </div>
                        );
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

export default UserStatus