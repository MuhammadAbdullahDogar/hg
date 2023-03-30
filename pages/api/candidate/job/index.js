import Job from "../../../../models/Job";
import connectDb from "../../../../middleware/mongoose";

function countMatchingSkills(arr1, arr2) {
  return arr1.filter((val, i) => arr2[i] === val).reduce(count => count + 1, 0);
}


const handler = async (req, res) => {
  if (req.method == 'POST') {
    const user = req.body;
    let jobLevel = '';
    if (parseInt(user.yearsOfExperience) === 1)
      // jobLevel = "check"
      jobLevel = "Beginner"
    else if (parseInt(user.yearsOfExperience) > 1 && parseInt(user.yearsOfExperience) <= 3)
      jobLevel = "Intermediate"
    else
      jobLevel = "Expert"

    const candidateSkills = user.skills;
    const domain = user.openToWorkingAs; // user domains
    const skills = candidateSkills.map(skill => skill.skill); // extract the skill names from the user's skills array
    // console.log(candidateSkills);
    try {
      // get all jobs which have atleast one candidate skill 
      // const jobs = await Job.find({ skills: { $in: skills } });
      const jobs = await Job.find({
        $and: [
          { level: jobLevel },
          { domain: { $in: domain } },
          { skills: { $in: skills } }
        ]
      })


      const Jobs = [];


      jobs.forEach(job => {
        let matchPercent = 0, jobModePercent = 0, jobCategoryPercent = 0, jobLocationPercent = 0;
        const joblocation = user.preferences.selectedCountries.map(location => location.country); // extract the country names from the user's country array

        const matchSkill = countMatchingSkills(job.skills, skills)
        const totalSkills = job.skills.length;
        const skillMatchPercent = (matchSkill / totalSkills) * 50;

        matchPercent += skillMatchPercent;

        if (user.preferences.jobMode.includes(job.type))
          jobModePercent = 15;

        matchPercent += jobModePercent;

        if (user.preferences.jobCategory.includes(job.category))
          jobCategoryPercent = 20;

        matchPercent += jobCategoryPercent;

        if (joblocation.includes(job.location))
          jobLocationPercent = 15;

        matchPercent += jobCategoryPercent;

        console.log("///////////////////////////////////////////////");
        console.log("skill: " + skillMatchPercent);
        console.log("Match percent " + matchPercent);
        console.log("job location: " + jobLocationPercent);
        console.log("job mode: " + jobModePercent);
        console.log("job category: " + jobCategoryPercent);

        if(matchPercent >= parseInt(job.matchPercentage)){
          const jobWithMpercent = {
            ...job.toObject(),
            mpercent: matchPercent
          };
          Jobs.push(jobWithMpercent);
        }
      });


      res.status(200).json({ Jobs });
    } catch (error) {
      console.error(error);
      throw error;
    }
    // res.status(422).json({ error: "fail request " });
    // const job = await j.save();
  }
  else
    res.status(422).json({ error: "fail request " });
}

export default connectDb(handler);




// const domainsToMatch = ['technology', 'finance', 'healthcare'];
// const skillsToMatch = ['JavaScript', 'Node.js', 'React'];

// Job.find({
//   $and: [
//     { domain: { $in: domainsToMatch } },
//     { skills: { $all: skillsToMatch } }
//   ]
// }, (err, jobs) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(jobs);
//   }
// });
