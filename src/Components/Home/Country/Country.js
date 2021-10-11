import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Country/Country.css';


//  <FontAwesomeIcon icon={faPlus} />

const Country = (props) => {
    const { data } = props;
    const { name, flags,region, capital, subregion, population, maps} = data;
    return (
        <Col lg={4} md={4}>
            <Card>
            <Card.Body> 
                <Card.Img variant="top" src={flags.png} />
                <Card.Title>{name.common}</Card.Title>
                <Card.Text >Region : <span>{region} </span></Card.Text>
                <Card.Text > Capital : <span>{capital}</span> </Card.Text>
                <Card.Text > Sub Region :<span> {subregion} </span> </Card.Text>
                <Card.Text > Maps :<span> <a href={maps.googleMaps}>See on Google Map</a> </span> </Card.Text>
                
                <Card.Text > Population :<span> {population} </span> </Card.Text>

                
                
                
            </Card.Body> 
            </Card>
        </Col>
    );
};

export default Country;