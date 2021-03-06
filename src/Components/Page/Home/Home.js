import React from "react";
import Styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => (
  <div className={Styles.CarouselContainer}>
    <Carousel>
      <Carousel.Item>
        <div className={Styles.SlideOne}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={Styles.SlideTwo}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={Styles.SlideThree}></div>
      </Carousel.Item>
    </Carousel>
  </div>
);
export default Home;
