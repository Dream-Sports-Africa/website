import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import causeImage from "../assets/images/resources/featured-program.jpg";

const FeaturedCause = () => {
  return (
    <section className="featured-program">
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4}>
              <img src={causeImage} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="my-auto">
                <h3>Urgent help needed now </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="program-card__top">
                  <div className="program-card__progress">
                    <span style={{ width: `85%` }} className=" cardProgress">
                      <b>
                        <i>85</i>%
                      </b>
                    </span>
                  </div>
                  <div className="program-card__goals">
                    <p>
                      <strong>Raised:</strong> $25,270
                    </p>
                    <p>
                      <strong>Goal:</strong> $30,000
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
