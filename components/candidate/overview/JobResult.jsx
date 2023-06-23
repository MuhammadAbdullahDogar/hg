import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import CommonButton from '../../../styles/CommonButotn'
import Avatar from '@mui/material/Avatar';
import { Typography, Box } from '@mui/material';

function createData(Rank, CandidateImg,Candidates, InitialScreening, BehavioralAnalysis, SkillEvaluation) {
    return { Rank, CandidateImg,Candidates, InitialScreening, BehavioralAnalysis, SkillEvaluation };
}

const JobResult = ({ jobs, user }) => {

    console.log(user);
    const filteredCandidates = jobs.flatMap(job => job.candidates.filter(candidate => candidate.candidate == user._id && candidate.status !== 'applied' && candidate.status !== 'invited'));
    const filteredJobs = jobs.filter(job => job.candidates.some(candidate => candidate.candidate.toString() === user._id && candidate.status !== 'applied' && candidate.status !== 'invited'));

      console.log(filteredJobs);
      
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


    const rows = [];

    filteredCandidates.forEach((candidate, index) => {
        // console.log(candidate);
        rows.push(createData(
            index + 1,
            filteredJobs[index].img,
            filteredJobs[index].title,
            candidate.matchPercent,
            (checkPersonality(candidate.personality, filteredJobs[index].jobPersonality) / 4) * 100,
            (candidate.obtainScore / candidate.totalScore) * 100
        ));
    });


    return (
        <>
            <TableContainer >

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell align="center" >Jobs</TableCell>
                            <TableCell align="center">Initial Screening</TableCell>
                            <TableCell align="center">Behavioral Analysis</TableCell>
                            <TableCell align="center">Skill Evaluation</TableCell>

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
                                <TableCell align="center" ><Box><Avatar alt="img" src={row.CandidateImg} /><Typography variant='body'>{row.Candidates}</Typography></Box></TableCell>

                                <TableCell align="center"><CircularProgress variant="determinate" value={row.InitialScreening} /></TableCell>
                                <TableCell align="center"><CircularProgress variant="determinate" value={row.BehavioralAnalysis} /></TableCell>
                                <TableCell align="center"><CircularProgress variant="determinate" value={row.SkillEvaluation} /></TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default JobResult