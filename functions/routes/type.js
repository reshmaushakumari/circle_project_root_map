const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', function (req, res) {
      (async () => {
        try {
            let query = db.collection('questions');
            const snapshot = await query.get();
            if (snapshot.empty) {
              res.json('No matching documents.');
            }  
            snapshot.forEach(doc => {
              res.json(doc.data().type);
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        })();
  });

  return router;

}