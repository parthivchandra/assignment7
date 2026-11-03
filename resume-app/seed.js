require('dotenv').config();
const mongoose = require('mongoose');
const Resume = require('./models/Resume');

async function insertResume() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const resumeData = {
            name: 'Revathi C',
            contact: {
                address: 'Nandanam House Nochad Po Kozhikode Kerala 673614',
                phone: '+91 9072273282',
                email: 'iamparthivchandra@gmail.com'
            },
            objective: 'Motivated and detail-oriented computer science graduate seeking a software developer role where I can apply my programming skills, problem-solving abilities and passion for technology to develop efficient and user-focused applications.',
            education: {
                degree: 'Bvoc in software development',
                college: 'Farook College, Kozhikode',
                cgpa: 6.0
            },
            skills: ['Python', 'Java', 'HTML'],
            internship: 'Completed a Python internship gaining practical experience in Python programming and software development fundamentals.'
        };

        // Update the existing resume if one exists; otherwise create it.
        await Resume.findOneAndUpdate({}, resumeData, {
            upsert: true,
            new: true,
            runValidators: true,
            setDefaultsOnInsert: true
        });

        console.log('Resume data inserted/updated successfully!');
    } catch (error) {
        console.error('Error inserting resume data:', error);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

insertResume();
