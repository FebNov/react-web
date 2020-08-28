import React from "react";
import Styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => (
  <section id="home">
    <div className={Styles.CarouselContainer}>
      <Carousel>
        <Carousel.Item>
          <div className={Styles.SlideOne}></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.SlideTwo}></div>
        </Carousel.Item>
        <Carousel.Item>
          {/* {" "}
        <div className={Styles.SlideThree}>
          <ul className={Styles.List}>
            <li><h3>Core rule</h3></li>
            <li className={Styles.Item}>Readable</li>
            <li className={Styles.Item}> Maintainable</li>
            <li className={Styles.Item}>Reuseable</li>
          </ul>
        </div> */}
          <div className={Styles.SlideThree}></div>
        </Carousel.Item>
      </Carousel>
    </div>
  </section>
);
export default Home;
