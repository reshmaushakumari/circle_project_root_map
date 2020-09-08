const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', function (req, res) {
    (async () => {
      try {
        let query = db.collection('answers');
        const snapshot = await query.where('question_id', '==', 1 ).get();
        if (snapshot.empty) {
          res.json('No matching documents.');
        }  
        let newArray = [];
        //res.json(snapshot)
        snapshot.forEach(doc => {
           let newObj = {
            id: doc.data().id,
            answer: doc.data().answer,
            option: doc.data().option
          }
          newArray.push(newObj)
        });
        res.json(newArray);
      } catch (error) {
          console.log(error);
          return res.status(500).json(error);
      }
      })();
    });

  return router;

}