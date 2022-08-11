import React from 'react';
import styled from "styled-components";
import service1 from "assets/agri.png";
import service2 from "assets/lifecycle.png";
import service3 from "assets/profit-3d.png";
import Title from 'components/Title';
import { useScroll } from "components/misc/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "animation";

function AboutUs() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Digital Identity",
      text: "Decentralising the users’ identities in order to prevent potential data leakages",
      image: service3,
    },
    {
      type: "Gamification Elements",
      text: "Engage customers to embark on improving financial literacy through quizzes & videos",
      image: service2,
    },
    {
      type: "Wealth Management",
      text: "Dashboard platform with an overview of the users’ target portfolio status and investment needs",
      image: service1,
    },
  ];
  return <Section id="services" ref={element}>
    <Title value="About Us" />
    <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              >
                  <div className="services__service__image">
                    <img src={image} alt="Service"/>  
                  </div>
                  <div className="services__service__title">
                    {/* <span>0{index + 1}</span>   */}
                    <h2>{type}</h2>
                  </div>
                  <p className="services__service__description" style={{width: '320px', height: '300px'}}>{text}</p>
                  {/* <img src={play} alt="Readmore" /> */}
              </motion.div>
            )
          })}
    </div>
  </Section>
}

const Section = styled.section`
min-height: 100vh;
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  
  height: 100%;
  margin: 0 15rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service {
    padding-top: 5rem;
    padding:5 15px;
    padding-left:0rem;
    &:nth-of-type(2) {
      ${'' /* background-color: var(--primary-color); */}
      .services__service__title {
        span {
          color: black;
        }
      }
      .services__service__description {
        color: black;
      }
    }
    &__image {
     
      object-size:cover;
      margin-bottom: 0.5rem;
     
    
      }
      img{
        height:200px;
        width:200px;
        &:hover{
          transform:scale(1.1);
          transition:2s ease;
        }
      
      }
    }
    &__title {
      width:400px;
      span {
        color: var(--primary-color);
        font-weight: bolder;
      }
      h2 {
        font-size: 2.6rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: #2A3B3C;
      }
    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .services {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
`;

export default AboutUs