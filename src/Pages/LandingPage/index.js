import React from "react";
import SittingPerson from "../../assets/SittingPerson.svg";
import FooterComponent from "../../Components/Footer";
import CeweDuduk from "../../assets/CeweDuduk.svg";
import { Button, Col, Row } from "antd";
import "./index.css";

const LandingPage = () => {
  return (
    <div>
      {/* Header */}

      <Row className="row1">
        <Col xs={32} lg={4}>
          <img src={SittingPerson} style={{ width: "200px" }} alt="image1" />
        </Col>
        <Col xs={32} lg={8}>
          <h2 className="h2-row1">IT'S NOPE PODCAST SHOW !</h2>
          <p className="text-row1">
            Adalah Podcast yang dibuat oleh Naufal Al-Fachri dan Muhammad Rezky
            Darmawan
            <br />
            yang merupakan deeptalk-nya "Mas-Mas Biasa" di Jakarta. Kita upload
            tergantung <br />
            mamang editing-nya lagi mager atau ngga wkwk &#128517;
          </p>
        </Col>
      </Row>
      <br />

      {/* Iframe List */}

      <div style={{ margin: "40px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} lg={8} span={8}>
            <iframe
              title="ep1"
              className="hover-custom"
              src="https://open.spotify.com/embed/episode/2DuMSfvpMJP3zUJkUVk7na?utm_source=generator&amp;theme=0"
              width="100%"
              height="232"
              frameBorder=""
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Col>
          <Col xs={24} lg={8} span={8}>
            <iframe
              title="ep2"
              className="hover-custom"
              src="https://open.spotify.com/embed/episode/0LQQoLrK0si4PVFotRdW2C?utm_source=generator&amp;theme=0"
              width="100%"
              height="232"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Col>
          <Col xs={24} lg={8} span={8}>
            <iframe
              title="ep3"
              className="hover-custom"
              src="https://open.spotify.com/embed/episode/61eA73MGfSbaczW9UlaJca?utm_source=generator&amp;theme=0"
              width="100%"
              height="232"
              frameBorder="0"
              allowFullScreen=""
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
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            ALL EPISODES
            <i
              style={{ marginLeft: "10px", color: "#7fd6c2" }}
              className="fab fa-spotify"
            ></i>
          </p>
        </Button>
      </div>
      <br />

      {/* Row 2 */}

      <Row className="row2">
        <Col>
          <h2 className="h2-row2">Follow Our Social Media</h2>
          <Row className="logo-brand">
            <Col span={8}>
              <a
                style={{ color: "white" }}
                href="https://open.spotify.com/show/7a8GlFzMC4veeSumNj1V1P"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="hover-custom fab fa-spotify fa-5x"></i>
              </a>
            </Col>
            <Col span={8}>
              <a
                href="https://www.instagram.com/podcast_nope/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="hover-custom fab fa-instagram fa-5x"></i>
              </a>
            </Col>
          </Row>
        </Col>
        <Col>
          <img
            src={CeweDuduk}
            style={{ width: "320px", marginTop: "30px" }}
            alt="image2"
          />
        </Col>
      </Row>
      <FooterComponent />
    </div>
  );
};

export default LandingPage;
