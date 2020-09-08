import React, { useContext } from 'react';
import './materialize.css';
import './materialize.min.css';
import './body.css';


function Footer() {
  return (
    <footer className="page-footer">
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s6">
              <button className="btn waves-effect waves-light green" type="submit"
                name="prev_button">Previous
                                                <i className="material-icons left">navigate_before</i>
              </button>
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light green right" type="submit"
                name="next_button">Next
                                                <i className="material-icons right">navigate_next</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>);
}
export default Footer;