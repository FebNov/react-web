import React from "react";
import Card from "react-bootstrap/Card";

const Cards = (props) => (
  <Card className="bg-dark text-white">
    <Card.Img src={props.src} alt={props.alt} />
    <Card.ImgOverlay>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.children}</Card.Text>
    </Card.ImgOverlay>
  </Card>
);
export default Cards;
