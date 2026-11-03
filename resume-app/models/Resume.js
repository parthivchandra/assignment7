const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: String,
    contact: {
        address: String,
        phone: String,
        email: String
    },
    objective: String,
    education: {
        degree: String,
        college: String,
        cgpa: Number
    },
    skills: [String],
    internship: String
});

module.exports = mongoose.model('Resume', resumeSchema);
