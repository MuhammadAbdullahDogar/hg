import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import CommonButton from '../../../../styles/CommonButotn'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { Typography,Box } from '@mui/material';

function createData(Rank, Candidates,InitialScreening, BehavioralAnalysis, SkillEvaluation) {
    return { Rank, Candidates, InitialScreening, BehavioralAnalysis, SkillEvaluation };
}

const rows = [
    createData(1, 'Muhammad Sajjad',85 , 85, 85),
    createData(2, 'Muhammad Sajjad',85 , 85, 85),
    createData(3, 'Muhammad Sajjad',85 , 85, 85),
    createData(4, 'Muhammad Sajjad',85 , 85, 85),
    createData(5, 'Muhammad Sajjad',85 , 85, 85),
];

const JobResult = ({ job }) => {

    function checkPersonality(array1, array2) {
        if (array1.length !== array2.length) {
            throw new Error('Arrays must have the same length');
        }

        const matchCount = array1.reduce((count, _, index) => {
            if (array1[index] === array2[index]) {
                return count + 1;
            }
            return count;
        }, 0);

        return matchCount;
    }

    const filteredCandidates = job.candidates.filter(candidate => candidate.status !== 'applied' && candidate.status !== 'invited');


    return (
        <>
            <TableContainer >

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell align="center" >Candidates</TableCell>
                            <TableCell align="center">Initial Screening</TableCell>
                            <TableCell align="center">Behavioral Analysis</TableCell>
                            <TableCell align="center">Skill Evaluation</TableCell>
                            <TableCell align="center">Actions</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Rank}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Rank}
                                </TableCell>
                                <TableCell align="center" ><Box><Avatar alt="img" src="/demo.jpg" /><Typography variant='body'>{row.Candidates}</Typography></Box></TableCell>

                                <TableCell align="center"><CircularProgress variant="determinate" value={row.InitialScreening} /></TableCell>
                                <TableCell align="center"><CircularProgress variant="determinate" value={row.BehavioralAnalysis} /></TableCell>
                                <TableCell align="center"><CircularProgress variant="determinate" value={row.SkillEvaluation} /></TableCell>
                                <TableCell align="center"><CommonButton variant="JobPostNotFill">Hire</CommonButton>
                                    <CommonButton variant="JobPostNotFill">Reject</CommonButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {filteredCandidates.slice(0, 4).map((candidate) => (
                <div key={candidate.candidate}>
                    {/* add image in avatar of mui  */}
                    <img src={candidate.img} alt="" />
                    <li >name {candidate.name}</li>
                    <li >personality: {(checkPersonality(candidate.personality, job.jobPersonality) / 4) * 100}%</li>
                    <li >match %: {candidate.matchPercent}%</li>
                    <li >skill %: {(candidate.obtainScore / candidate.totalScore) * 100}%</li>

                </div>

            ))}
        </>
    )
}

export default JobResult