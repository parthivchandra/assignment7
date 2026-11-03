# Dynamic Resume App

A dynamic resume website built with Node.js, Express, EJS, and MongoDB.

## Requirements

- Node.js and npm
- MongoDB running locally, or a MongoDB Atlas connection string

## Setup

1. Open this folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to a new file named `.env`.
4. Set `MONGO_URI` in `.env` to your MongoDB connection string.

   Local MongoDB example:

   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/resumeDB
   PORT=3000
   ```

5. Insert your resume data into MongoDB:

   ```bash
   npm run seed
   ```

6. Start the application:

   ```bash
   npm start
   ```

7. Open http://localhost:3000 in your browser.

## Project structure

```text
resume-app/
├── models/
│   └── Resume.js
├── views/
│   └── resume.ejs
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── seed.js
└── server.js
```

## GitHub

Do not upload your real `.env` file or `node_modules` folder. The `.gitignore` file excludes them.
