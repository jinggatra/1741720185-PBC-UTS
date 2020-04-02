import React, { Component } from 'react';
import './about.css'
import Saya from '../image/saya.png';
import "../image/image.css";
import "./homepage.css"

export default class about extends Component {
    render() {
        return (
            <div className="container">

                <div className="white">
                    <p className="font">About Me</p>
                    <img className="photo" src={Saya} />
                    <br></br>
                    <h3 className="white">Taufik</h3>
                    <h3 className="white">1741720185</h3>
                    <h3 className="white">TI-3A</h3>
                </div>
            </div>
        )
    }
}