import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";

import {
  FaAtlassian
} from "react-icons/fa"

import {
  SiMysql
} from "react-icons/si"

import {
  AiFillGithub
} from "react-icons/ai"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <FaAtlassian />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>  
    </Row>
  );
}

export default Techstack;
