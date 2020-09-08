const functions = require('firebase-functions');

const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//For Cookie
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['f080ac7b-b838-4c5f-a1f4-b0a9fee10130', 'c3fb18be-448b-4f6e-a377-49373e9b7e1a']
}));

var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://circle-project-map.firebaseio.com/"
});

const db = admin.firestore();


const question = require('./routes/question');
const create = require('./routes/create');
const type = require('./routes/type');
const answer = require('./routes/answers');
const nextQuestion = require('./routes/nextQuestion');


app.use('/api/question', question(db));
app.use('/api/create', create(db));
app.use('/api/type', type(db));
app.use('/api/answer', answer(db));
app.use('/api/nextQuestion', nextQuestion(db));


exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
