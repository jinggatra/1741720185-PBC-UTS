import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';

export default class homepage extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                    <h2>Welcome to my Personal Page</h2>
                    <p>Ini untuk UTS Pemograman Berbasis FrameWork</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Container>
        )
    }
    
}