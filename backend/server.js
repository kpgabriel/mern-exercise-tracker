const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ATLAS_URI
//connect to the Database on Atlas
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}!!!!!!!!!!!!!!`);
})