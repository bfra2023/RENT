import React from "react";
import "../../styles/become-rent.css";
import { Container, Row, Col } from "reactstrap";

// import driverImg from "../../assets/all-images/rent-img/interiori.jpg";

const RentSection = () => {
  return (
    <section className="become__rent">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__rent-img">
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__rent-title">
              Do You Want Live on your dream place? So Don't Be Late
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RentSection;
