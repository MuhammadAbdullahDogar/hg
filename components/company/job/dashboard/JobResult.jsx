import React from 'react'

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
            {filteredCandidates.slice(0, 4).map((candidate) => (
                <div key={candidate.candidate}>
                    {/* add image in avatar of mui  */}
                    <img src={candidate.img} alt="" /> 
                    <li >name {candidate.name}</li>
                    <li >personality: {(checkPersonality(candidate.personality,job.jobPersonality)/4)*100}%</li>
                    <li >match %: {candidate.matchPercent}%</li>
                    <li >skill %: {(candidate.obtainScore/candidate.totalScore)*100}%</li>

                </div>

            ))}
        </>
    )
}

export default JobResult