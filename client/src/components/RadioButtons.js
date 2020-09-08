import React from 'react';
import './materialize.css';
import './materialize.min.css';
import './body.css';

function RadioButtons(props) {
  console.log("id",props);
  return (
    <div className="row">
      <div className="col s12">
        <p>
          <label>
            <input className="with-gap" name={props.option} type="radio" />
              <span>{props.answer}</span>
          </label>
        </p>
      </div>
    </div>
  )
}

export default RadioButtons
