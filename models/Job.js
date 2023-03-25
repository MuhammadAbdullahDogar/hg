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
  domain: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
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
  skills: [{
    type: String
  }],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  candidates: [{
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidate'
    },
    matchPercent: {
      type: String
    }
  }],
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  }
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);