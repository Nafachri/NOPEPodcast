import React from "react";
import SittingPerson from "../../Assets/SittingPerson.svg";
import {} from "@fortawesome/free-solid-svg-icons";
import CeweDuduk from "../../Assets/CeweDuduk.svg";
import { Button, Col, Row } from "antd";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <Row className="row1">
        <Col>
          <img src={SittingPerson} style={{ width: "200px" }} alt="image1" />
        </Col>
        <Col>
          <h2 className="h2-row1">IT'S NOPE PODCAST SHOW !</h2>
          <p className="text-row1">
            Adalah Podcast yang dibuat oleh Naufal Al-Fachri dan Muhammad Rezky
            Darmawan
            <br />
            yang merupakan deeptalk-nya "Mas-Mas Biasa" di Jakarta.Kita upload
            tergantung <br />
            mamang editing-nya lagi mager atau ngga wkwk &#128517;
          </p>
        </Col>
      </Row>
      <br />

      {/* Iframe List */}

      <div style={{ margin: "40px" }}>
        <Row gutter={30}>
          <Col span={8}>
            <iframe
              title="ep1"
              className="iframeCustom"
              src="https://open.spotify.com/embed/episode/2DuMSfvpMJP3zUJkUVk7na?utm_source=generator&amp;theme=0"
              width="100%"
              height="232"
              frameBorder=""
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Col>
          <Col span={8}>
            <iframe
              title="ep2"
              className="iframeCustom"
              src="https://open.spotify.com/embed/episode/0LQQoLrK0si4PVFotRdW2C?utm_source=generator&amp;theme=0"
              width="100%"
              height="232"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Col>
          <Col span={8}>
            <iframe
              title="ep3"
              className="iframeCustom"
              src="https://open.spotify.com/embed/episode/61eA73MGfSbaczW9UlaJca?utm_source=generator&amp;theme=0"
              width="100%"
              height="232"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </div>

      {/* Button */}
      <div style={{ textAlign: "center" }}>
        <Button
          className="buttonCustom"
          shape="round"
          style={{
            backgroundColor: "#2f3020",
            color: "white",
          }}
          ghost="true"
          href="https://open.spotify.com/show/7a8GlFzMC4veeSumNj1V1P"
        >
          <i class="fab fa-spotify"> ALL EPISODES </i>
        </Button>
      </div>
      <br />

      {/* Row 2 */}

      <Row className="row2">
        <Col>
          <h2 className="h2-row2">Follow Our Social Media</h2>
        </Col>
        <Col>
          <img src={CeweDuduk} style={{ width: "320px" }} alt="image2" />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
