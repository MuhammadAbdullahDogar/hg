import React from 'react'
import { Grid } from '@mui/material';
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

const UserStatus = () => {
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
                <Grid item xs={6}><img src='/demo.jpg'></img></Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10}>Muhammad Abdullah</Grid>
                <Grid item xs={1}></Grid>
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
                    Open to work
                </Grid>


                <Grid item xs={12}>
                    Open to interview
                </Grid>


                <Grid item xs={12}>
                    Open to working as
                </Grid>


                <Grid item xs={12}>
                    Box1
                </Grid>

                <Grid item xs={12}>
                    Box2
                </Grid>

                <Grid item xs={12}>
                    Box2
                </Grid>


                <Grid item xs={12}>
                    Box3
                </Grid>

                <Grid item xs={12}>
                    Box4
                </Grid>
            </Grid>

            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>{"Portfolio/Social Links"}</DialogTitle>
                <DialogContent>
                    <Grid item container spacing={3}>
                        <Grid item xs={2}>
                            <Avatar>
                                <LanguageSharpIcon />
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            www.adammiller.com
                        </Grid>
                        <Grid item xs={2}>
                            <Avatar>
                                <LanguageSharpIcon />
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            www.behance.net/adammiller
                        </Grid>
                        <Grid item xs={2}>
                            <Avatar>
                                <LanguageSharpIcon />
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            www.dribble.com/adammiller05
                        </Grid>
                        <Grid item xs={2}>
                            <Avatar>
                                <LanguageSharpIcon />
                            </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            www.linkendin/in/adammiller9287
                        </Grid>
                    </Grid>
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