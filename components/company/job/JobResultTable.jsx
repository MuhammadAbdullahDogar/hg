import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import CommonButton from '../../../styles/CommonButotn'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import axios from 'axios'

function createData(Rank, CandidateImg, Candidates, InitialScreening, BehavioralAnalysis, SkillEvaluation, id) {
    return { Rank, CandidateImg, Candidates, InitialScreening, BehavioralAnalysis, SkillEvaluation, id };
}

const JobResultTable = ({ job, upJob }) => {

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

    const filteredCandidates = job.candidates.filter(candidate => candidate.status == 'interviewed');

    const rows = [];

    filteredCandidates.forEach((candidate, index) => {
        rows.push(createData(
            index + 1,
            candidate.img,
            candidate.name,
            candidate.matchPercent,
            (checkPersonality(candidate.personality, job.jobPersonality) / 4) * 100,
            (candidate.obtainScore / candidate.totalScore) * 100,
            candidate.candidate
        ));
    });

    const hire = async (status, candidateId) => {
        try {
            const response = await axios.post('/api/company/job/hire', { status, jobId: job._id, candidateId });
            // Handle the response

            if(response.status==200){
                window.location.reload();
            }

        } catch (error) {
            // Handle the error
            console.error(error);
        }
    }



    return (
        <TableContainer >

            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><Typography variant='JobCardH5'>Rank</Typography></TableCell>
                        <TableCell align="center"><Typography variant='JobCardH5'> Candidates </Typography></TableCell>
                        <TableCell align="center"><Typography variant='JobCardH5'> Initial Screening </Typography></TableCell>
                        <TableCell align="center"><Typography variant='JobCardH5'> Behavioral Analysis </Typography></TableCell>
                        <TableCell align="center"><Typography variant='JobCardH5'> Skill Evaluation </Typography></TableCell>
                        <TableCell align="center"><Typography variant='JobCardH5'> Actions </Typography></TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.Rank}
                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Typography variant='tableH2'>   {row.Rank}</Typography>
                            </TableCell>
                            <TableCell align="center" >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar alt="img" src={row.CandidateImg} />
                                    <span ><Typography variant='tableH3'>{row.Candidates}</Typography></span>
                                </div>
                            </TableCell>

                            <TableCell align="center">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <CircularProgress sx={{ background: '#F5F7FA', boxShadow: '0px 4px 10px 2px rgba(207, 221, 241, 0.8)', borderRadius: '100%' }} variant="determinate" value={row.InitialScreening} />
                                    <span ><Typography variant='tableH3'>{row.InitialScreening + '%'}</Typography></span>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <CircularProgress sx={{ background: '#F5F7FA', boxShadow: '0px 4px 10px 2px rgba(207, 221, 241, 0.8)', borderRadius: '100%' }} variant="determinate" value={row.BehavioralAnalysis} />
                                    <span ><Typography variant='tableH3'>{row.BehavioralAnalysis + '%'}</Typography></span>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <CircularProgress sx={{ background: '#F5F7FA', boxShadow: '0px 4px 10px 2px rgba(207, 221, 241, 0.8)', borderRadius: '100%' }} variant="determinate" value={row.SkillEvaluation} />
                                    <span ><Typography variant='tableH3'>{row.SkillEvaluation + '%'}</Typography></span>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <CommonButton variant="Hire" color='green' onClick={() => { hire('hired', row.id) }} >Hire</CommonButton>
                                <CommonButton variant="Hire" color='red' onClick={() => { hire('reject', row.id) }} >Reject</CommonButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default JobResultTable