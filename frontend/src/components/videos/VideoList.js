import React from "react";
import Video from "./Video";
import Navbar from 'components/Navbar';
function VideoList () {

  const topic1 = "Personal Finance"
  const videos1 = [
    {id: 1, link: 'https://www.youtube.com/watch?v=XYkwa1D1AC4', title: '6 principles of personal finance and budgeting for 2022'},
    {id: 2, link: 'https://www.youtube.com/watch?v=zVcwvCL2C2c', title: 'A Minimalist Approach to Personal Finance'},
    {id: 3, link: 'https://www.youtube.com/watch?v=MXCvtC0HqLE', title: 'the student guide to personal finance 💸 adulting 101'},
    {id: 4, link: 'https://www.youtube.com/watch?v=zNTNWQmf1DE', title: 'The SEVEN Things You NEED To Learn for Your Financial FREEDOM - Robert Kiyosaki'},
    {id: 5, link: 'https://www.youtube.com/watch?v=Py3rkSwsbyw', title: 'how I manage my money 💵 income , expenses , budget , etc || personal finance in my 20s'},
    {id: 6, link: 'https://www.youtube.com/watch?v=LNi4cC-OfgI', title: 'personal finance 101, personal finance basics, and fundamentals'},
    
  ];
  const topic2 = "Insurance"
  const videos2 = [
    {id: 1, link: 'https://www.youtube.com/watch?v=qjXgpJpSlCc', title: 'Insurance Explained - How Do Insurance Companies Make Money and How Do They Work'},
    {id: 2, link: 'https://www.youtube.com/watch?v=3ctoSEQsY54', title: 'How Does Insurance Work?'},
    {id: 3, link: 'https://www.youtube.com/watch?v=3Z6AFHs0lMY', title: 'Insurance Agents Finally Spill the Tea on Their Commissions! | SPILL IT'},
    {id: 4, link: 'https://www.youtube.com/watch?v=PILGzE0q0AQ', title: 'Which Insurance To Get In Singapore | Watch This Before You Buy!'},
    {id: 5, link: 'https://www.youtube.com/watch?v=mkiF_3H8Ua4', title: 'Gen Z vs Insurance in Singapore | Mothership Hits The Streets'},
    {id: 6, link: 'https://www.youtube.com/watch?v=LEcpS6pX9kY', title: "15 Things You Didn't Know About The Insurance Industry"},
    
  ];
  const topic3 = "Financial Instruments"
  const videos3 = [
    {id: 1, link: 'https://www.youtube.com/watch?v=bJw4ZTUpeQ0', title: 'Financial instruments - Example (amortised cost) - ACCA Financial Reporting (FR)'},
    {id: 2, link: 'https://www.youtube.com/watch?v=qFOyyP_po3I', title: 'IFRS 9 Financial Instruments: Summary 2021'},
    {id: 3, link: 'https://www.youtube.com/watch?v=T4cdcd7n0B0', title: 'What is a Financial Instrument?'},
    {id: 4, link: 'https://www.youtube.com/watch?v=FLTlefifGYE', title: 'Financial Instruments - Basic Concepts'},
    {id: 5, link: 'https://www.youtube.com/watch?v=pqP624qY5Eg', title: 'Financial instruments - introduction - ACCA Financial Reporting (FR)'},
    {id: 6, link: 'https://www.youtube.com/watch?v=aZ6hqcjPP98', title: 'IAS 32 Financial Instruments: Presentation - summary'},
  ];  
  const topic4 = "Loans"
  const videos4 = [
    {id: 1, link: 'https://www.youtube.com/watch?v=fuiiJuB7tJs', title: 'Loans 101 (Loan Basics 1/3)'},
    {id: 2, link: 'https://www.youtube.com/watch?v=L7zXxgEZ1pg', title: 'Loan Basics: Understanding the different kinds of loans'},
    {id: 3, link: 'https://www.youtube.com/watch?v=2IkNZGMvUlU', title: 'What You MUST Know About Interest Rates For Home Loans Before Buying A Property | Stacked Opinions'},
    {id: 4, link: 'https://www.youtube.com/watch?v=V9gd8khkCfs', title: 'Advice for loans, credit scoring, property purchasing and more! | ft. Jo’An & Clive | SFSG S2 Ep6'},
    {id: 5, link: 'https://www.youtube.com/watch?v=x-QGUtKKwNo', title: 'The Pros and Cons of Personal Loans'},
    {id: 6, link: 'https://www.youtube.com/watch?v=o9HERME9IX8', title: 'How does interest on loans work? Pt. 1'},
  ];
  
  return (
    <div>
      <Navbar />
      <div style={{marginTop: '10px'}}>
        <h1 style={{marginLeft: '10px'}}>{topic1}</h1>
        <div style={{overflow: "auto", display: "flex", marginTop: '-10px'}}>
          {videos1.map(video => {
            return (
              <div key={video.id}>
                <Video linktovideo={video.link}/>
                <h4 style={{marginTop: '-1px', marginLeft: '10px'}}>{video.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 style={{marginLeft: '10px'}}>{topic2}</h1>
        <div style={{overflow: "auto", display: "flex", marginTop: '-10px'}}>
          {videos2.map(video2 => {
            return (
              <div key={video2.id}>
                <Video linktovideo={video2.link}/>
                <h4 style={{marginTop: '-1px', marginLeft: '10px'}}>{video2.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 style={{marginLeft: '10px'}}>{topic3}</h1>
        <div style={{overflow: "auto", display: "flex", marginTop: '-10px'}}>
          {videos3.map(video3 => {
            return (
              <div key={video3.id}>
                <Video linktovideo={video3.link}/>
                <h4 style={{marginTop: '-1px', marginLeft: '10px'}}>{video3.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 style={{marginLeft: '10px'}}>{topic4}</h1>
        <div style={{overflow: "auto", display: "flex", marginTop: '-10px'}}>
          {videos4.map(video4 => {
            return (
              <div key={video4.id}>
                <Video linktovideo={video4.link}/>
                <h4 style={{marginTop: '-1px', marginLeft: '10px'}}>{video4.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default VideoList;
  