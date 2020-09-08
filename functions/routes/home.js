const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', function (req, res, next) {
    //res.send("Entering Home")
    (async () => {
      try {
          let query = db.collection('questions');
          let response = [];
          await query.get().then(querySnapshot => {
          let docs = querySnapshot.docs;
          for (let doc of docs) {
              //console.log(doc.data().status)
              if(doc.data().id === '1'){
                
              }
              const selectedItem = {
                description: doc.data().description,
              } 
              response.push(selectedItem);
          }
          });
          return res.status(200).send(response);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
  });

  return router;

}