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
    status: {
      type: String,
      enum: ['applied', 'invited', 'interviewed', 'feedback']
    },
    matchPercent: {
      type: String
    },
    statusUpdatedAt: {
      type: Date
    },
    hiringStatus: {
      type: String
    },
    screeningQuestion: [{
      question: {type: String},
      answer: {type: String}
    }]
  }],
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  questions : [{type: String}]
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);