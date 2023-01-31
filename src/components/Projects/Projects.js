import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drowsy from "../../Assets/Projects/drowsy.png";
import sharing from "../../Assets/Projects/sharing.png";
import food from "../../Assets/Projects/food.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drowsy}
              isBlog={false}
              title="Drowsiness Detection using Machine learning"
              description="The project works as a Vehicle Safety- system. The aim of this
              system is to locate, track, and analyze both the driver's face and eyes
              to compute a drowsiness index to prevent accidents. It is
              implemented in MATLAB & the algorithms used are “Sobel- Edge
              Detection”,” Viola-Jones Algorithm” & “K-Means Clustering”. We
              used K-Means to identify the eyes & mouth as closed (or) open."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sharing}
              isBlog={false}
              title="Bicycle Sharing System"
              description="A bicycle-sharing system is a service in which bicycles are made
              available for shared use to individuals. It is implemented using IoT. It
              has a smart lock that is accessible from the mobile application & is
              unlocked using a Bluetooth HC-05 module. User's will be charged as per the duration of usage and distance travelled"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Calorie Estimation Using Machine Learning "
              description= "Our project presents an application that automatically measures the
              calorie content in the food from food images using the size of the
              container and food item category as reference. It is implemented in
              python & the algorithms used are Sobel- Edge Detection, Support
              Vector Machine and Faster R-CNN."          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
