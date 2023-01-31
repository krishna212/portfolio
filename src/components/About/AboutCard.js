import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krishna Sai Mullangi </span>
            from <span className="purple"> Long Beach, California.</span>
            <br />I am a Graduate student at California State University, Long Beach.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime & TV series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Leveraging my programming skills to optimize workflows - Maximizing results with minimal human input."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
