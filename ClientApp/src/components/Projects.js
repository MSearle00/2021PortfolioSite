import React, { Component, useState } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


function Projects(props) {

    const project = props.project;

    return (
        <div className="project">
            <Card className="project-card">
                <CardBody>
                    <Row>
                        <Col md={7} sm={12}>
                            <CardImg className="project-image center-mobile smaller-width" top width="100%" />
                        </Col>
                        <Col md={5} sm={12}>
                            <div className="center-project-info">
                                <CardTitle className="project-name">{project.name}</CardTitle>
                                <CardSubtitle className="project-description">{project.description}</CardSubtitle>
                                <CardText>{project.date}</CardText>
                                <CardText className="project-languages">{project.languages}</CardText>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}

export default Projects;