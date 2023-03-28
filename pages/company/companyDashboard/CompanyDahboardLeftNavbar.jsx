import { Box, Stack, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    marginTop: '8.5rem',
}));
const size = 30;
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
                        <Link href="/company/companyDashboard/company_dashboard/CompanyDashboard">
                            <a>
                                <Image
                                    src="/Vector.svg"
                                    alt="logo"
                                    width={size}
                                    height={size}
                                />
                            </a>
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/company/job/ActiveJobs">
                            <a>
                                <Image
                                    src="/BriefcaseFill.svg"
                                    alt="logo"
                                    width={size}
                                    height={size}
                                />
                            </a>
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/company/companyDashboard/companyProfileDetails/companyProfileData/CompanyDetails">
                            <a>
                                <Image
                                    src="/Vector-1.svg"
                                    alt="logo"
                                    width={size}
                                    height={size}
                                />
                            </a>
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/company/job/jobResult/JobResult">
                            <AutoGraphIcon />

                        </Link>
                    </Item>
                </Stack>
            </Box>
        </>
    )
}

export default CompanyDahboardLeftNavbar