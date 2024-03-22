import React from "react";
import Navbar from "./Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div style={{minHeight:"100vh"}}> 
      <div id="aboutbox_jgi" className="container-fluid row featurette" >
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading">
            ABOUT JGI<span className="text-muted"></span>
          </h2>
          <p id="aboutjgidetails" className="lead">
          JGI Group is an education provider and an entrepreneurship incubator in India. The Group
          successfully operates 85 educational institutions with 51,600 students and 6,450 employees
          engaged at the K-12, undergraduate and postgraduate levels spread across 64 campuses pan
          India. A leader in the education sector and a pioneer in the venture sector, JGI Group is
          constantly in search of new opportunities to expand its horizon.
          </p>
        </div>
      </div>

      <div id="engineering_and_it" className="container-fluid row featurette">
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
            ABOUT ENGINEERING & IT<span className="text-muted"></span>
          </h2>
          <p id="aboutajudetails" className="lead">
          AJU School of Engineering &amp; Information Technology is established with an aim to provide
          quality education and entrepreneurship development. ARKA JAIN University is an
          intellectual destination that draws inspired students from diverse backgrounds. AJU Bachelor
          of Technology (B.Tech) is an AICTE approved professional Engineering undergraduate
          degree of 4 Years duration program offered in 5 different disciplines. Our B.Tech program
          offers a variety of programs that involve theoretical and practical learning in equal measure.
          It is one of the most preferred courses and in great demand by the students looking forward to
          molding their interest and ambition not only in India but for vacancies abroad aiming for
          lucrative careers. As this professional course has made developments &amp; created numerous
          opportunities in the ﬁeld of engineering and information Technology. The university is
          committed to provide excellent Academic curriculum, Laboratory facilities, Workshops,
          Seminars, Assignments, Industrial visits, and Opportunities for various Experiments,
          Research and Placement support.
          </p>
        </div>
      </div>

      <div id="aboutbox_confrence" className="container-fluid row featurette">
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading">
            ABOUT THE CONFERENCE<span className="text-muted"></span>
          </h2>
          <p id="aboutajudetails" className="lead ">
          The International Conference on “Recent and Technological Advances in Physics and
          Material Science(ICRTAPMS 2024) is organized by the Department of Engineering,
          School of Engineering &amp; IT of ARKA JAIN University. The conference topic is multifaceted
          which covers the Recent &amp; Development advancement in many applications. The
          International Research Conference is a federated organization dedicated to bringing together
          a significant number of diverse scholarly events for presentation within the conference
          program. Events will run over a span of time during the conference depending on the number
          and length of the presentations. With its high quality, it provides an exceptional value for
          students, academics and industry researchers.
          </p>
          <div className=" brochure">
         <a href="">
          <button className="btn btn-danger">Download Brochure</button></a>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
