import { Grid, Typography, Box, Stack, FormControl } from '@mui/material'
import Image from 'next/image'
const CompanyDahboardLeftNavbar = () => {
    return (
        <>
            <Box sx={{ background: "linear-gradient(266.95deg, #EDEDED 4.69%, #E0E0E0 101.7%)", height: '100vh' }}>

                <Stack
                spacing={10}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    
                >
                    <Image
                        src="/Vector.svg"
                        alt="logo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/BriefcaseFill.svg"
                        alt="logo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/Vector-1.svg"
                        alt="logo"
                        width={30}
                        height={30}
                    />
                </Stack>
            </Box>
        </>
    )
}

export default CompanyDahboardLeftNavbar