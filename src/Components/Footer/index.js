import React from "react";
import { Layout } from "antd";
import "./index.css";

const FooterComponent = () => {
  const { Footer } = Layout;

  return (
    <div>
      <Footer className="footer-styling">
        ©2021 Created by NOPE Media Network
      </Footer>
    </div>
  );
};

export default FooterComponent;
