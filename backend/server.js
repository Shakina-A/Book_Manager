const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const booksRoute = require('./routes/books');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bookdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/books', booksRoute);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
