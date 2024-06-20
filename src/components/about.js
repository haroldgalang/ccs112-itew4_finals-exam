import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lina from "../images/lina.png";
import bloodseeker from "../images/bloodseeker.png";

import Heroes from "./heroes";

function About() {
  return (
    <section id="home" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Home</h2>
        </div>
        <Row>
          <Col sm={6}>
            <Heroes />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
              veritatis sint quidem asperiores magni eaque praesentium
              temporibus, magnam, eveniet consectetur adipisicing repudiandae
              soluta eaque
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
            </p>

            <h2>Hero of the Day</h2>
            <Row>
              <Col sm={6}>
                <img src={lina} alt="lina"></img>
                <h4>Lina</h4>
              </Col>

              <Col sm={6}>
                <img src={bloodseeker} alt="bloodseeker"></img>
                <h4>Bloodseeker</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
