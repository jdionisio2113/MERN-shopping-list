const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connnect to Mongo
mongoose
	.connect(db, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

// Use routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
