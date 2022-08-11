import React from 'react'
import milestone1 from "assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackground from "assets/milestone-background.png";
import styled from "styled-components";
import { useScroll } from "components/misc/useScroll";
import { motion } from "framer-motion";
import { milestonesAnimations } from "animation";



function HowThisWorks() {
  const [element, controls] = useScroll();

  const milestone = [
    {
      image: milestone1,
      data: "User logs in to the platform with their desired provider, be it Web 2.0 or Web 3.0 providers",
      amount: "01",
    },
    {
      image: milestone2,
      data: "User customise their preference within the planning page for desired widegts",
      amount: "02",
    },
    {
      image: milestone3,
      data: "Users have access to a database of tutorials to improve their financial literacy",
      amount: "03",
    },
]
  return <Section id="how it works" ref={element}>
    
    <div className="background">
        <img src={milestoneBackground} alt="Milestone Background" />
    </div>
    <div className="title">
    <p>How this works</p>
    </div>
    
    <div className="milestones">
  
    
      {
        milestone.map(({ image, data, amount }) => {
          return (
            <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            >
              <p>{amount}</p>
              <span>{data}</span>  
              <img src={image} alt="Milestone" />
            </motion.div>
          );
        })
      }  
    </div>
  </Section>
}

const Section = styled.section`
height: 100vh;
background-color: #2A3B3C;
padding: 0 10rem;
position: relative;
.title{
  display:flex;
  align-items:center;
  justify-content:center;
  height:50px;
  position:relative;
  top:100px;
  p{
  color:white;
  font-size:5rem;
  
  

}
}

.background {
  position: absolute;
  left: 0;
  bottom: -30%;
  img {
    z-index: 2;
    height: 43rem;
  }
}
.milestones{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #fff;
  align-items: center;
  height: 100%;
  .milestone {
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width:380px;
    p {
      font-size: 5rem;
      font-weight: bolder;
      line-height: 3rem;
    }
    span {
      text-align:center;
      ${'' /* text-transform: uppercase; */}
      color: #ffffffc7;
    }
    img {
      height: 6rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 5rem 2rem;
  min-height: 100ch;
  height: 100%;
  .background {
    display: none;
  }
  .milestones {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
}
`;

export default HowThisWorks;