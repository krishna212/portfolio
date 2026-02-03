import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => {
          // Handle string bullets
          if (typeof item === "string") {
            return (
              <li
                key={i}
                className={isDark ? "subTitle dark-mode-text" : "subTitle"}
              >
                {item}
              </li>
            );
          }
          // Handle single link object
          if (item.link) {
            return (
              <li
                key={i}
                className={isDark ? "subTitle dark-mode-text" : "subTitle"}
              >
                {item.text}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.linkText}
                </a>
              </li>
            );
          }
          // Handle multiple links object
          if (item.links) {
            return (
              <li
                key={i}
                className={isDark ? "subTitle dark-mode-text" : "subTitle"}
              >
                {item.text}
                {item.links.map((link, idx) => (
                  <span key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                    {idx < item.links.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
            );
          }
          return null;
        })
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
