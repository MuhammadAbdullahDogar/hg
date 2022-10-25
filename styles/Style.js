import { createTheme } from '@mui/material';
const customTheme = createTheme({
    palette: {
        primary: {
            main: "#32B126",
        },
        secondary: {
            main: "#24A2E9"
        },
    },
    typography: {
        fontFamily: 'Urbanist',
        color: "#19177E",
        home_top_text: {
            fontFamily: 'Comfortaa',
            fontSize: '3.75rem',
            fontWeight: 600,
            lineHeight: '4.1875rem',
            color: '#EBEFFF',
            animation: 'tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both'
        },
        home_text: {
            fontFamily: 'Urbanist',
            fontSize: '1.125rem',
            lineHeight: '1.625rem',
            fontWeight: 400,
            textAlign: 'center',
            letterSpacing: '0.04em',
            color: '#CBD4FF',
        },
        HomeH2: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '1.6rem',
            fontSize: '1.51rem',
            color: '#19177E'
        },
        HomeH3: {
            fontFamily: 'Urbanist',
            fontWeight: 500,
            lineHeight: '1.8125rem',
            fontSize: '1.375rem',
            letterSpacing: '0.01em',
            color: '#074D75'
        },
        HomeGlassText: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            lineHeight: '1.75rem',
            fontSize: '1.25rem',
            letterSpacing: '0.05em',
            color: '#19177E',
            '&:hover': {
                fontSize: '1.5625rem',
            }
        },
        hgTopHeading: {
            fontSize: "2.82rem",
            lineHeight: "3.13rem",
            textTransform: "capitalize",
            fontWeight: '600',
            fontFamily: 'Comfortaa',
            color: "#19177E"
        },
        profileLogoFont: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            fontSize: '3.5vmin',
            color: "#19177E"
        },
        profileH1: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '700',
            fontSize: '1.3rem',
            lineHeight: "1.875rem",
            color: "#19177E"
        },
        profileH2: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            fontSize: '1.1rem',
            lineHeight: "1.4375rem",
            color: "#19177E"
        },
        profileH3: {
            fontFamily: 'Urbanist',
            letterSpacing: '0.03em',
            fontWeight: '500',
            lineHeight: "1.125rem",
            fontSize: '.8375rem',
            color: '#0A5F8F'
        },
        profielH5: {
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            fontSize: '.9375rem',
            lineHeight: '1rem',
            color: '#32B126'
        },
        profielH6: {
            fontFamily: 'Comfortaa',
            fontWeight: '500',
            fontSize: '.625rem',
            lineHeight: '.6855',
            color: '#074D75'
        },

        hgLink: {
            fontFamily: 'Comfortaa',
            textTransform: "capitalize",
            color: "#19177E",
            fontWeight: '700',
            fontSize: "1rem",
            lineHeight: "1.2rem",
            letterSpacing: '0.01rem'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: false
            }
        },
    },
    shape: {
        // borderRadius: '2.3vmin',
    }
})
export default customTheme