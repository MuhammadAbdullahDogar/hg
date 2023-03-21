import { Grid, Typography, Box, Stack, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    marginTop: '8.5rem',
}));

const CompanyDahboardLeftNavbar = () => {
    return (
        <>
            <Box sx={{ background: "linear-gradient(266.95deg, #EDEDED 4.69%, #E0E0E0 101.7%)", height: '100vh' }}>

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Item>
                        <Link href="/company/companyDashboard/ActiveJobs">
                            <Image
                                src="/Vector.svg"
                                alt="logo"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/company/companyDashboard/ActiveJobs">
                            <Image
                                src="/BriefcaseFill.svg"
                                alt="logo"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/company/companyDashboard/ActiveJobs">
                            <Image
                                src="/Vector-1.svg"
                                alt="logo"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/company/companyDashboard/ActiveJobs">
                            <Image
                                src="/Vector-1.svg"
                                alt="logo"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </Item>
                </Stack>
            </Box>
        </>
    )
}

export default CompanyDahboardLeftNavbar