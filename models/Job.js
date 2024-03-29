const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  img: { type: String },
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
      enum: ['applied', 'invited', 'interviewed', 'reject', 'hired']
    },
    matchPercent: {
      type: String
    },
    obtainScore: {
      type: String
    },
    totalScore: {
      type: String
    },
    statusUpdatedAt: {
      type: Date
    },
    hiringStatus: {
      type: String
    },
    img: { type: String },
    personality: [{ type: String }],
    name: { type: String },


  }],
  status: {
    type: String,
    enum: ['open', 'closed', 'hired'],
    default: 'open'
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  screeningQuestion: [{ type: String }],
  jobPersonality: [{ type: String }],
  quiz: [{
    question: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['single', 'multiple'],
      required: true
    },
    options: [{
      option: {
        type: String,
        required: true
      },
      isCorrect: {
        type: Boolean,
        default: false
      }
    }]
  }]
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);