import React, { Component, useState, useEffect  } from 'react';
//Update the name for this logo.
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

//export class component to use in other components
const AboutMe = () => {
    const displayName = AboutMe.name;

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        fetch('api/about')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    title: data.title,
                    location: data.location,
                    description: data.description
                })
            })
    };

    return (
        <h1> About Me </h1>
    );
}

export default AboutMe;