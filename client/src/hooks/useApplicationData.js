import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = () =>{

  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    axios
    .get('/api/answer')
    .then(res => {
      setAnswer(res.data);
    })
  }, [])
   return {
     answer,
     setAnswer
    }

}

export default useApplicationData;