import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


const UserProfileTab = (props) => {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const { user } = props
    const generatePdf = () => {
        // Define document structure
        const documentDefinition = {
            content: [
                { text: `${user.fname} ${user.lname}`, style: 'header' },
                { text: user.email, style: 'subheader' },
                { text: user.phone, style: 'subheader' },
                { text: `${user.about.dob}, ${user.about.city}, ${user.about.country}`, style: 'subheader' },
                { text: user.about.description, style: 'paragraph' },
                { text: 'Academic', style: 'sectionHeader' },
                {
                    ul: user.academic.map((data, index) => {
                        return `${data.universityName}, ${data.major}, ${data.startingYear}-${data.endingYear}`;
                    })
                },
                { text: 'Experience', style: 'sectionHeader' },
                {
                    ul: user.experience.map((data, index) => {
                        return `${data.cName}, ${data.cDomain}, ${data.jobTitle}, ${data.startingDate}-${data.endingDate}`;
                    })
                },
                { text: `Years of Experience: ${user.yearsOfExperience}`, style: 'paragraph' },
                { text: 'Skills', style: 'sectionHeader' },
                {
                    table: {
                        widths: ['*', '*'],
                        body: user.skills.map((skill, index) => {
                            return [skill.skill, `${skill.percent}%`];
                        })
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 22,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                paragraph: {
                    fontSize: 14,
                    margin: [0, 0, 0, 10]
                },
                sectionHeader: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 10, 0, 5]
                }
            }
        };

        // Set the PDF name as "My CV.pdf"
        const pdfName = "My CV.pdf";

        // Create the PDF and download it
        pdfMake.createPdf(documentDefinition).download(pdfName);
    }


    const [value, setValue] = useState(props.value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const router = useRouter();

    const handleClickk = () => {
        router.push({
            pathname: '/candidate/profile_development/ProfileAbout',
            // query: { myProp: 'hello' },
        });
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                sx={{
                    fontFamily: 'Urbanist',
                    letterSpacing: '0.02em',
                    fontWeight: '600',
                    lineHeight: "1.375rem",
                    fontSize: '1.125rem',
                    color: '#363636',
                }}
            >

                <Tab label="Personal Details" onClick={() => props.setUserInfo(0)} />
                <Tab label="Academic Information" onClick={() => props.setUserInfo(1)} />
                <Tab label="Experience and Skills" onClick={() => props.setUserInfo(2)} />
                <Tab label="other" onClick={handleClick} />
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={() => { handleClickk(); handleClose(); }}>edit</MenuItem>
                    <MenuItem onClick={() => {
                        console.log("cv"); generatePdf(); handleClose();
                    }}>Generate CV
                    </MenuItem>
                </Menu>
            </Tabs>
        </>
    )
}

export default UserProfileTab