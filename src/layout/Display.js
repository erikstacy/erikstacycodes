import React, { Component } from 'react';
import '../css/Display.css';
import Fade from 'react-reveal/Fade';

class Display extends Component {
    render() {
        return(
            <div className="displaySection">
            <Fade clear delay="600" duration="2000" >
                <div className="displayContainer">
                    <h1>Erik Stacy</h1>
                    <p className="subheading">
                        Building websites and Android apps.
                    </p>
                    <p className="description">
                        I'm a software development student learning how
                        to build websites, Android apps, and any other
                        programming I can get my hands on. Currently enrolled
                        at Northern Illinois University.
                    </p>
                </div>
            </Fade>
            </div>
        )
    }
}

export default Display