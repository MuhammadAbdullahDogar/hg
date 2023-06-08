import React from 'react'
import Button from "@mui/material/Button"
const CommonButotn = (props) => {
        const ButtonStyle = {
                color: '#fff',
               
                '&.MuiButton-Gradient': {
                       
                        fontStyle: 'normal',
                        fontWeight: '600',
                        borderRadius: '.8125rem',
                        fontFamily: 'Comfortaa',
                       
                        fontSize: '1.25rem',
                        padding: '.875rem 1.5625rem',
                        lineHeight: '1.375rem',
                        gap: '0.625rem',
                        textDecoration: 'underline',

                        textDecoration: 'none',
                        background: 'var(--hg-gradient)',
                },
                '&.MuiButton-JobPost': {
                        fontFamily: 'Urbanist',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '.75rem',
                        lineHeight: '.875rem',

                        backgroundColor: '#5748F5',
                        borderRadius: '.625rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '.75rem 1.0625rem',
                        gap: '.9375rem',
                }
                ,
                '&.MuiButton-JobPostNotFill': {
                        fontFamily: 'Urbanist',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '.75rem',
                        lineHeight: '.875rem',

                        color: '#5748F5',
                        border: '.125rem solid #5748F5',
                        borderRadius: '.625rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '.75rem 1.0625rem',
                        gap: '.9375rem',
                },
                '&.MuiButton-Hire': {
                        fontFamily: 'Urbanist',
                        textDecoration: 'none',
                        fontWeight: '400',
                        fontSize: '.9375rem',
                        lineHeight: '1.125rem',

                        color:props.color,
                        border: `.125rem solid ${props.color}`,
                        borderRadius: '.625rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '.75rem 1.0625rem',
                        gap: '.9375rem',
                        marginLeft:'1rem'
                }

        }
        return (
                <Button
                        {...props}
                        sx={ButtonStyle}
                >
                </Button>
        )
}

export default CommonButotn
