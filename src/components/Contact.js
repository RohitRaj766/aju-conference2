import React from 'react'
import Navbar from './Navbar'


export default function Contact() {

  const committeeMembers = [
    {
      role: 'CONFERENCE CHAIR',
      name: 'Dr. Ashwini Kumar',
      position: 'Asst. Dean, School of Engineering & IT',
      email: 'ashwini.kumar@arkajainuniversity.ac.in',
      phone: '+91-8210353795'
    },
    {
      role: 'CONVENOR',
      name: 'Dr. Binod Kumar Choudhary',
      position: 'Associate Professor, Department of Electrical & Electronics Engineering',
      email: 'dr.binod@arkajainuniversity.ac.in',
      phone: '+91-9939974038'
    },
    {
      role: 'CO - CONVENOR',
      name: 'Dr ChandraPrabha Sahu',
      position: 'Assistant Professor, Department of Electrical and Electronics Engineering',
      email: 'dr.chandra@arkajainuniversity.ac.in',
      phone: '+91-9128329236'
    },
    {
      role: 'CONVENOR',
      name: 'Dr Jonaki Mukherjee',
      position: 'Assistant Professor Department of Electrical and Electronics Engineering',
      email: 'dr.jonaki@arkajainuniversity.ac.in',
      phone: '+91–8902464892'
    }
  ];


  return (
    <>
<Navbar />
<div className="container w-100" style={{marginTop:'100px',minHeight:'100vh'}}>
      <div className="container-fluid row my-5">
        {committeeMembers.map((member, index) => (
          <div key={index} className="col d-flex align-items-start my-3">
            <div className="icon-square bg-danger text-dark flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <div>
              <h4>{member.role}</h4>
              <p>{member.name}, {member.position}<br />
                Email - {member.email}<br />Mob. – {member.phone}</p>
              <a href="https://mail.google.com/" className="btn btn-danger" data-aos="fade-down">
                Email-Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
