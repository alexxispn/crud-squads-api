const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const app = require('./app');

const DB = process.env.DATABASE
    .replace('<USERNAME>', process.env.USERNAME_DB)
    .replace('<PASSWORD>', process.env.PASSWORD_DB);

console.log(DB);
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! Shutting down...');
    server.close(() => {
        process.exit(1);
    });
});
