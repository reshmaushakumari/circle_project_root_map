const express = require('express');
const router = express.Router();

module.exports = db => {
  router.post('/', function (req, res) {
    (async () => {
      try {
        let newValue={};
        await db.collection('questions').doc('/' + req.body.id + '/')
            .create(
               newValue = {
                description: req.body.description,
                index: req.body.index
              }
              );
        return res.json(newValue);
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
  });

  return router;

}