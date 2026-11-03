const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const Resume = require('./models/Resume');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');

        app.get('/', async (req, res) => {
            try {
                const resume = await Resume.findOne();

                if (!resume) {
                    return res.status(404).send(
                        'Resume not found. Run "npm run seed" to add resume data.'
                    );
                }

                res.render('resume', { resume });
            } catch (error) {
                console.error('Error fetching resume:', error);
                res.status(500).send('Error fetching resume data');
            }
        });

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Could not connect to MongoDB:', error.message);
        process.exit(1);
    }
}

startServer();
