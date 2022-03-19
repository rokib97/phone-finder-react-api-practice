import React from "react";
import { Carousel } from "react-bootstrap";
import first from "../Images/one.png";
import third from "../Images/threee.png";
import second from "../Images/two.png";

const ReactCarousel = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={third} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ReactCarousel;
