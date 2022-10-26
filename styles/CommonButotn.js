import React from 'react'
import Button from "@mui/material/Button"
const CommonButotn = (props) => {
        const ButtonStyle = {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: '600',
                borderRadius: '.8125rem',
              
                fontFamily: 'Comfortaa',
                fontSize: '1.25rem',
                padding: '.875rem 1.5625rem',
                lineHeight: '1.375rem',
                gap: '0.625rem',
                textDecoration: 'underline',
                '&.MuiButton-Gradient': {
                        textDecoration: 'none',
                        background: 'var(--hg-gradient)',
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
