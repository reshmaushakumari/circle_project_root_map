import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './materialize.css';
import './materialize.min.css';
import './body.css';
import RadioButtons from './RadioButtons'

function Question(props) {
    console.log("PROPS",props)
    const [question, setQuestion] = useState(null);
    const [type, setType] = useState(null);

    useEffect(() => {
        axios
            .get('/api/question')
            .then(result => {
                setQuestion(result.data.description)
                if (result.data.type === 'S')
                    setType("radio");
                else
                    setType("checkbox");
            })

            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <main>
            <div className="container">
                <div className="row"></div>
            </div>
            <div className="valign-wrapper" styles="width: 100%; position: absolute;">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12">
                            <form action="/nextQuestion" method="POST">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title green-text">Question #1</span>
                                        <div className="row">
                                            <div className="col s12">
                                                <p>{question}</p>
                                            </div>
                                        </div>
                                        {props.answer.map(ans => <RadioButtons key={ans} {...ans}/>)}
                                    </div>
                                </div>

                                {/* <div className="card">
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
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Question;