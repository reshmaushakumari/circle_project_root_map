import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import './materialize.css';
import './materialize.min.css';
import './body.css';
import { Button } from 'reactstrap';


function LandingPage(){
    const history = useHistory();

    const submit = (event) => {
        event.preventDefault();
        history.push('/question');
    }
  return (
    <>
    <br></br>
    <br></br>
    <br></br>

    <main>
      <div styles="width: 100%; height: 100%; position: absolute;">
            <div className="valign" styles="width: 100%;">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title green-text center">Project Map</span>
                                    <div className="row">
                                        <span className="black-text">
                                            <p>The survey measures the environmental
                                                practices and behaviours of Canadian companies that relate to the
                                                condition
                                                of our air, water and soils. The survey is also designed to collect data
                                                to
                                                develop and improve three key environmental indicators: air quality,
                                                water
                                                quality and greenhouse gas emissions.</p><br></br>
                                            <p>The objective of the survey is to provide context to scientific measures
                                                of
                                                air and water quality, and greenhouse gas emissions, by gaining a better
                                                understanding of household behaviour and practices with respect to the
                                                environment.</p>
                                        </span>
                                    </div>
                                    <div className="row center">
                                        <Button className="waves-effect waves-light btn green" onClick={submit}>Start Survey
                                            <i className="material-icons right">send</i></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </>
  );
}
export default LandingPage;

