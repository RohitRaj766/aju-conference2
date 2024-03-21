import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import jsonData from "../utils/topics.json"

export default function Objective() {
  const physicsFields = jsonData["Physics"];
  const materialFields = jsonData["Material Science"];
  const guidelines = jsonData["guidelines"];
  return (
    <>
<div>
<Navbar/>
      <div
        id="aboutbox_scopeofconfrence"
        className="container-fluid row featurette"
      >
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
            OBJECTIVES OF THE CONFERENCE<span className="text-muted"></span>
          </h2>
          <p id="aboutajudetails" className="lead">
          The International Conference on “Recent and Technological Advances in Physics and
Material Science(ICRTAPMS 2024) aims to bring together leading academic scientists,
researchers and research scholars to exchange and share their experiences and research results
on all aspects of Technical advancement of Physics and Material science . It also provides a
premier interdisciplinary platform for researchers, practitioners and educators to present and
discuss the most recent innovations, trends, and concerns as well as practical challenges
encountered and solutions adopted in the fields of physics and Material Science.
          </p>
        </div>
      </div>

      <div
        id="aboutbox_callforpapers"
        className="container-fluid row featurette"
      >
        <div className="col-md-7 about" data-aos="slide-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
            CALL FOR PAPERS<span className="text-muted"></span>
          </h2>
          <p id="aboutajudetails" className="lead ">
          Prospective authors are kindly encouraged to contribute to and help shape the conference
through submissions of their research abstracts, papers and e-posters. Also, high quality
research contributions describing original and unpublished results of conceptual,

constructive, empirical, experimental, or theoretical work in all areas of Science Engineering
and Technology are cordially invited for presentation at the conference. The conference
solicits contributions of abstracts, papers and e-posters that address themes and topics of the
conference, including figures, tables and references of novel research materials. Authors from
Material Science, Mechanical Engineering, Civil Engineering, Chemical Engineering,
Manufacturing, Mining Engineering, Physics, Chemistry, Nano technologies, Biomaterial
technologies, Textile Engineering, Polymer Science, etc. branches describing research,
reviews and applications are invited to submit to research the papers
The conference will involve presentations by experts on various areas of Physics and
material science which include but not limited to following topical themes:
The scope of the conference covers:
          </p>
        </div>
      </div>

      <div id="aboutbox_science" className="container-fluid row featurette">
      <div className="col-md-7 about" data-aos="fade-down">
        <h2 id="aboutajuheading" className="featurette-heading">
          PHYSICS<span className="text-muted"></span>
        </h2>
        <ul id="aboutajudetails" className="lead">
          {physicsFields.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
          ))}
        </ul>
      </div>
    </div>

      <div
        id="aboutbox_electronicsandcommunication"
        className="container-fluid row featurette"
      >
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
            MATERIAL SCIENCE
          </h2>
          <ul id="aboutajudetails" className="lead ">
          {materialFields.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
          ))}
          </ul>
        </div>
      </div>

     

        <div id="aboutbox_guidelines" className="container-fluid featurette">
          <div className="col-md-7 about" data-aos="fade-down">
            <h2 id="aboutajuheading" className="featurette-heading">
              GUIDELINES FOR MANUSCRIPT PREPARATION
            </h2>
            <ul id="aboutajudetails" className="lead">
            {guidelines.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
            ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
