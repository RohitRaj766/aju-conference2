import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
// import HideShow from "./HideShow";
import jsondata from "../utils/topics.json"

export default function Committee() {
  const advisory_committee = jsondata["advisory_committee"];
  const reviewer_committee = jsondata["reviewer_committee"];
  const editorial_committee = jsondata["editorial_committee"];
  const organizing_committee = jsondata["organizing_committee"];
  const technical_support_committee = jsondata["technical_support_committee"];
  return (
    <>
    <Navbar/>
        <div
        id="aboutbox_scopeofconfrence"
        className="container-fluid row featurette"
        >
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
          ADVISORY COMMITTEE<span className="text-muted"></span>
          </h2>
          <ul id="aboutajudetails" className="lead">
          {advisory_committee.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
          ))}
          </ul>
        </div>
      </div>

      <div
        id="aboutbox_callforpapers"
        className="container-fluid row featurette"
        
      >
        <div className="col-md-7 about" data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
          REVIEWER COMMITTEE<span className="text-muted"></span>
          </h2>
          <ul id="aboutajudetails" className="lead ">
          {reviewer_committee.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
          ))}
          </ul>
        </div>
      </div>

      <div
        id="aboutbox_science"
        className="container-fluid row featurette"
      >
        <div className="col-md-7 about"  data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
          EDITORIAL COMMITTEE<span className="text-muted"></span>
          </h2>
          <ul id="aboutajudetails" className="lead ">
          {editorial_committee.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
          ))}
          </ul>
        </div>
      </div>

      <div
        id="aboutbox_electronicsandcommunication"
        className="container-fluid row featurette"
        
      >
        <div className="col-md-7 about"  data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
          ORGANIZING COMMITTEE 
           
          </h2>
          <ul id="aboutajudetails" className="lead ">

          {organizing_committee.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
          ))}
          </ul>
        </div>
      </div>

      <div
        id="aboutbox_computerengg"
        className="container-fluid row featurette"
       
      >
        <div className="col-md-7 about"  data-aos="fade-down">
          <h2 id="aboutajuheading" className="featurette-heading ">
          TECHNICAL SUPPORT COMMITTEE<span className="text-muted"></span>
          </h2>
          <ul id="aboutajudetails" className="lead ">
          {technical_support_committee.map((field, index) => (
            <li key={index}>{field}</li> // Use field itself or index as a key
          ))}

          </ul>
        </div>
      </div>
<div className="container-fluid">
      <div class="container-fluid row my-5">
      <div class="col d-flex align-items-start my-3" >
        <div class="icon-square bg-danger text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div >
          <h4 >CONFERENCE CHAIR</h4>
          <p style={{height:''}}>Dr. Ashwini Kumar, Asst. Dean, School of Engineering & IT.<br/>
          Email - ashwini.kumar@ arkajainuniversity. ac.in <br/>Mob. – +91-8210353795</p>
          <a href="https://mail.google.com/" class="btn btn-danger " data-aos="fade-down">
          Email-Now
          </a>
        </div>
      </div>
      
      
   

      <div class="col d-flex align-items-start my-3">
        <div class="icon-square bg-danger text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4 >CONVENOR</h4>
          <p style={{height:'180px'}}>Dr. Binod Kumar Choudhary, Associate Professor, Department of Electrical & Electronics Engineering.<br/>
          Email- dr. binod@ arkajainuniversity. ac.in<br/>Mob. – +91-9939974038</p>
          <a href="https://mail.google.com/" class="btn btn-danger" data-aos="fade-down">
          Email-Now
          </a>
        </div>
      </div>

      <div class="col d-flex align-items-start my-3 ">
<div class="icon-square bg-danger text-dark flex-shrink-0 me-3 ">
  <svg class="bi" width="1em" height="1em"></svg>
</div>
<div>
<h4>CO - CONVENOR</h4>
  <p style={{height:'180px'}}>Dr ChandraPrabha Sahu, Assistant Professor, Department of Electrical and Electronics Engineering.<br/>
  Email- dr.chandra@ arkajianuniversity. ac.in<br/>Mob. – +91-9128329236</p>
  <a href="https://mail.google.com/" class="btn btn-danger " data-aos="fade-down">
  Email-Now
  </a>
</div>

</div>
<div class="col d-flex align-items-start my-3">
        <div class="icon-square bg-danger text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4 >CO - CONVENOR</h4>
          <p style={{height:'180px'}}>Dr Jonaki, Mukherjee Assistant Professor Department of Electrical and Electronics Engineering.<br/>
          Email- dr.jonaki@ arkajianuniversity. ac.in<br/>Mob. – +91–8902464892</p>
          <a href="https://mail.google.com/" class="btn btn-danger" data-aos="fade-down">
          Email-Now
          </a>
        </div>
      </div>

      <div class="col d-flex align-items-start my-3">
        <div class="icon-square bg-danger text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h4 >CO - CONVENOR</h4>
          <p style={{height:'140px'}}>Dr Nupur Sharma, Assistant Professor, Department of Mechanical Engineering.<br/>
          Email- dr.nupur@ arkajianuniversity.ac.in<br/>Mob. – +91-9649295182</p>
          <a href="https://mail.google.com/" class="btn btn-danger" data-aos="fade-down">
          Email-Now
          </a>
        </div>
      </div>
    </div>
    </div>
   
    </>
    
  );
}
