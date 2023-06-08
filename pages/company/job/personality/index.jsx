import React, {useState} from 'react'
import Router, { useRouter } from 'next/router';
import axios from 'axios'

const PersonalityType = () => {

    const router = useRouter();
    const jobId = router.query.id;

    const [group1, setGroup1] = useState('');
    const [group2, setGroup2] = useState('');
    const [group3, setGroup3] = useState('');
    const [group4, setGroup4] = useState('');
  
    const handleGroup1Click = (factor) => {
      setGroup1(factor);
    };
  
    const handleGroup2Click = (factor) => {
      setGroup2(factor);
    };
  
    const handleGroup3Click = (factor) => {
      setGroup3(factor);
    };
  
    const handleGroup4Click = (factor) => {
      setGroup4(factor);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!group1 || !group2 || !group3 || !group4) {
        alert('Please select one option from each group');
        return;
      }

      const jobPersonality = [group1, group2, group3, group4]

      const res = await axios.post(`/api/company/job/personalityType`, { jobId, jobPersonality }, { headers: { 'Content-Type': 'application/json' } });

      if(res.status == 200) {
        Router.push(`/company/job`);

      }

      // Perform further actions with the selected factors
      console.log('Selected Factors:', jobPersonality);
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Group 1:</h3>
        <div>
          <div
            className={`card ${group1 === 'Extraversion' ? 'selected' : ''}`}
            onClick={() => handleGroup1Click('Extraversion')}
          >
            Extraversion
          </div>
          <div
            className={`card ${group1 === 'Introversion' ? 'selected' : ''}`}
            onClick={() => handleGroup1Click('Introversion')}
          >
            Introversion
          </div>
        </div>
      </div>
      <div>
        <h3>Group 2:</h3>
        <div>
          <div
            className={`card ${group2 === 'Sensing' ? 'selected' : ''}`}
            onClick={() => handleGroup2Click('Sensing')}
          >
            Sensing
          </div>
          <div
            className={`card ${group2 === 'Intuition' ? 'selected' : ''}`}
            onClick={() => handleGroup2Click('Intuition')}
          >
            Intuition
          </div>
        </div>
      </div>
      <div>
        <h3>Group 3:</h3>
        <div>
          <div
            className={`card ${group3 === 'Thinking' ? 'selected' : ''}`}
            onClick={() => handleGroup3Click('Thinking')}
          >
            Thinking
          </div>
          <div
            className={`card ${group3 === 'Feeling' ? 'selected' : ''}`}
            onClick={() => handleGroup3Click('Feeling')}
          >
            Feeling
          </div>
        </div>
      </div>
      <div>
        <h3>Group 4:</h3>
        <div>
          <div
            className={`card ${group4 === 'Judging' ? 'selected' : ''}`}
            onClick={() => handleGroup4Click('Judging')}
          >
            Judging
          </div>
          <div
            className={`card ${group4 === 'Perceiving' ? 'selected' : ''}`}
            onClick={() => handleGroup4Click('Perceiving')}
          >
            Perceiving
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default PersonalityType