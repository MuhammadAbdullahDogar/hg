import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generatePdf = ({ user }) => {
    // Initialize jspdf document
    const doc = new jsPDF();

    // Add content to the document
    doc.text(`${user.fname} ${user.lname}`, 10, 10);
    doc.text(user.email, 10, 20);
    doc.text(user.phone.toString(), 10, 30);
    doc.text(`${user.about.dob}, ${user.about.city}, ${user.about.country}`, 10, 40);
    doc.text(user.about.description, 10, 50);
    doc.text('Academic', 10, 70);
    doc.autoTable({
        startY: 80,
        head: [['University Name', 'Major', 'Years']],
        body: user.academic.map((data, index) => {
            return [data.universityName, data.major, `${data.startingYear}-${data.endingYear}`];
        })
    });
    doc.text('Experience', 10, doc.autoTable.previous.finalY + 10);
    doc.autoTable({
        startY: doc.autoTable.previous.finalY + 20,
        head: [['Company Name', 'Domain', 'Job Title', 'Years']],
        body: user.experience.map((data, index) => {
            return [data.cName, data.cDomain, data.jobTitle, `${data.startingDate}-${data.endingDate}`];
        })
    });
    doc.text(`Years of Experience: ${user.yearsOfExperience}`, 10, doc.autoTable.previous.finalY + 10);
    doc.text('Skills', 10, doc.autoTable.previous.finalY + 20);
    doc.autoTable({
        startY: doc.autoTable.previous.finalY + 30,
        head: [['Skill', 'Percent']],
        body: user.skills.map((skill, index) => {
            return [skill.skill, `${skill.percent}%`];
        })
    });

    // Set the PDF name as "My CV.pdf"
    const pdfName = `${user.fname} CV.pdf`;

    // Save the PDF
    doc.save(pdfName);
};



const UserProfileTab = (props) => {

    const { user } = props
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
                    <MenuItem onClick={() => { generatePdf({ user }); handleClose(); }}>Generate CV</MenuItem>
                </Menu>
            </Tabs>
        </>
    )
}

export default UserProfileTab