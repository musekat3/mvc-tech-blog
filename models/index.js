const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and handle sessions)
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

let blogPosts = [];
let users = [];
let comments = [];

app.get('/', (req, res) => {
  // Check if the user is logged in
  if (req.session.loggedIn) {
    // Display homepage with existing blog posts
    res.render('homepage', { blogPosts });
  } else {
    // Display login or signup options
    res.render('loginOrSignup');
  }
});

app.get('/otherLinks', (req, res) => {
  // Check if the user is logged in
  if (req.session.loggedIn) {
    // Display dashboard or other options
    res.render('dashboard');
  } else {
    // Prompt to sign up or sign in
    res.render('loginOrSignup');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});