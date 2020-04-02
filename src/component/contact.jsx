import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact';
import fb from '../image/facebook.png';
import github from '../image/github.png';
import "../image/image.css";

export default class contact extends Component {
    render() {
        return (
            <div className="container">

            <div className="white">
                <p className="font">Contact me on</p>
                <br></br>
                {/* <a href="http://www.facebook.com/profile.php">
                    <img className="photo" src={fb} />
                </a> */}
                <a href="https://github.com/jinggatra">
                    <img className="photo" src={github} />
                </a>


            </div>
        </div>
        )
    }
}