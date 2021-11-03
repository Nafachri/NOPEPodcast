import React from "react";
import SittingPerson from "../../assets/SittingPerson.svg";
import StandupPerson from "../../assets/StandupPerson.svg";
import { Col, Row } from "antd";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      <Row className="row1">
        <Col>
          <img src={SittingPerson} style={{ width: "200px" }} />
        </Col>
        <Col>
          <h3 className="h3-row1">IT'S NOPE PODCAST SHOW</h3>
          <p className="text-row1">
            Adalah Podcast yang diciptakan oleh Naufal Al-Fachri dan Muhammad
            <br />
            Rezky Darmawan, yang merupakan "Mas-Mas Biasa" di Jakarta
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
