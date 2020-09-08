const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', function (req, res) {
      (async () => {
        try {
            let query = db.collection('questions');
            const snapshot = await query.where('index', '==', 'F').get();
            if (snapshot.empty) {
              res.json('No matching documents.');
            }  
            snapshot.forEach(doc => {
              res.json({
                id: doc.id,
                description: doc.data().description,
                type: doc.data().type
              }
              );
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
        })();
    });

  return router;

}