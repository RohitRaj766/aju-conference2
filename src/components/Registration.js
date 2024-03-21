import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Registration() {
  return (
    <>
      <Navbar />

      <div class="alert alert-success  imp_date" role="alert">
        <h4 class="alert-heading dark" data-aos="fade-down">
          IMPORTANT DATES !
        </h4>
        <p data-aos="fade-down">
          Last Date for Submission of Full Paper: 2/04/2024 <br />
          Notification of Acceptance of Full Paper : 12/4/2024
          <br />
          Last Date for Registration: 16/04/2023{" "}
        </p>
        <hr />
      </div>

      <h3 class=" container text-success" data-aos="fade-down">
        Registration Fee{" "}
      </h3>
      <div className="table_container my-3 container">
        <table class="table table-bordered container" data-aos="fade-down">
          <thead>
            <tr>
              <th scope="col">DELEGATES</th>
              <th scope="col">INDIA</th>
              <th scope="col">FOREIGN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Corporates / Industry Experts</td>
              <td> Rs. 2000/-</td>
              <td> USD - 28</td>
            </tr>
            <tr>
              <td> Faculty / Academicians </td>
              <td> Rs. 1000/-</td>
              <td> USD - 13</td>
            </tr>
            <tr>
              <td> Research Scholars</td>
              <td> Rs. 500/-</td>
              <td> USD - 7</td>
            </tr>
            <tr>
              <td> Students/Co-Author</td>
              <td> Rs. 500/-</td>
              <td> USD - 7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 class=" text-success container my-2" data-aos="fade-down">
        PAYMENT DETAILS
      </h4>
      <div className="container">
        <div
          class="alert alert-dark bg-white"
          role="alert"
          data-aos="fade-down"
        >
          <p>
            Online Transfer / Bank Transfer
            <br />
            Bank Name : HDFC BANK <br />
            Branch Name : CHOTA Gamharia <br />
            Account Name : ARKA JAIN UNIVERSITY <br />
            Account Number : 50100459210580 IFSC Code: HDFC0004801
          </p>

          <hr />
        </div>
      </div>

      <div className="row container-fluid text-center my-5">
        <div class="col ">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal"> Corporates/IndustryExperts</h5>
            </div>
              <a href="https://forms.gle/e1jdEmoBfm5YXT5R9" style={{textDecoration: 'none', color: 'inherit'}}>
            <div class="card-body">
              <h5 class="card-title pricing-card-title">RS : 2000</h5>
              <h5 class="card-title pricing-card-title">USD : $28</h5>
              <ul class="list-unstyled mt-3 mb-4"></ul>
              <button type="button" class="w-100 btn btn-lg btn-success" data-aos="flip-up">
                Register Now
            </button>

            </div>
              </a>
          </div>
        </div>

        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal"> Faculty/Academicians</h5>
            </div><a href="https://forms.gle/e1jdEmoBfm5YXT5R9" style={{textDecoration: 'none', color: 'inherit'}}>
            <div class="card-body">
              <h5 class="card-title pricing-card-title">RS : 1000</h5>
              <h5 class="card-title pricing-card-title">USD : $13</h5>
              <ul class="list-unstyled mt-3 mb-4"></ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-success"
                data-aos="flip-up"
              >
             Register Now
              </button>
            </div>
            </a>
          </div>
        </div>

        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal">ResearchScholars</h5>
            </div>
            <a href="https://forms.gle/e1jdEmoBfm5YXT5R9" style={{textDecoration: 'none', color: 'inherit'}}>
            <div class="card-body">
              <h5 class="card-title pricing-card-title">RS : 500</h5>
              <h5 class="card-title pricing-card-title">USD : $7</h5>
              <ul class="list-unstyled mt-3 mb-4"></ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-success"
                data-aos="flip-up"
              >
                Register Now
              </button>
            </div>
            </a>
          </div>
        </div>

        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm payment_box border-dark">
            <div class="card-header py-3 text-white bg-success border-dark">
              <h5 class="my-0 fw-normal">Students/Co-Authurs</h5>
            </div>
            <a href="https://forms.gle/e1jdEmoBfm5YXT5R9" style={{textDecoration: 'none', color: 'inherit'}}>
            <div class="card-body text-center">
              <h5 class="card-title pricing-card-title">RS : 500</h5>
              <h5 class="card-title pricing-card-title">USD : $13</h5>
              <ul class="list-unstyled mt-3 mb-4">
                <li></li>
              </ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-success"
                data-aos="flip-up"
              >
               Register Now
              </button>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading dark">PUBLICATION FEE</h4>
        <p>
        The registration fee includes the cost of publications.
        The outstanding papers in extended form (selected by Reviewer Committee) will be
        communicated to SCI/SCOPUS Indexed Journal and the publication charges for such
        research papers will be borne by respective authors.
        </p>

        <hr />
      </div>
    </>
  );
}
