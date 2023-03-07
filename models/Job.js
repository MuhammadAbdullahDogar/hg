const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  compensation: {
    type: String,
    required: true
  },
  matchPercentage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  responsibilites: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);