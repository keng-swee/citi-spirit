import React from 'react';
import styled from "styled-components";
import globe from "assets/globe-removebg-preview.png"
import projector from "assets/projector.png"
import Navbar from 'components/Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";
import { Stack } from '@mui/material';
import ParticlesBg from 'particles-bg';



function Home() {

  return (
    <Section id="home">
      <ParticlesBg color="#666666" num={400} type="cobweb" bg={true} />
      <Navbar />
      <div className="bottom">
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
  
  
        <div className="content">
          <div className="title">
            <h1>Citi-SPIRIT</h1>
          </div>  
          <div className="subTitle">
            <p>
              We are a gamified wealth management platform that aims to promote community interactions through competition and strengthen client relationships through trust and security 
            </p>  
          </div>
      
          {/* <button onClick={() => navigate('/signup')}>GET STARTED</button> */}

      
        </div>  
        <Stack alignItems="center" justifyContent="center" >
        <motion.div className="info"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      <img src={globe} style={{ width : '850px', height: '500px' }} alt=""/>
      </motion.div>
      <img src={projector} style={{ width : '550px', height: '250px' }}alt=""/>
      </Stack>


      </motion.div>

      
      </div>
    </Section>
  );
}

const Section = styled.section`
  // ${'' /* background: url(${home}) no-repeat center; */}
  // background-color:#2A3B3C;
  // min-height: 100vh;
  // background-size: cover;
  // position: relative;
  .bottom{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    height:calc( 100vh - 80px);
  }
  .home{
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
  
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
     
      width: 100%;
      color: black;
      gap: 1.2rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          margin-bottom:5px;
        }
      }
      .subTitle {
        p {
          width: 80%;
          margin-bottom: 2rem;
        }
      }
      
  }
  .info {
    animation: floaty 1.8s infinite alternate;
    ${'' /* transform-style:preserve-3d;
    animation: rotate 30s linear infinite; */}
    .home_shadow{
      width:130px;
      height:24px;
      background-color:white;
      margin: 0 auto;
      border-radius:50%;
      filter:blur(7px);
      animation: shadow 1.8s infinite alternative;
    }
    

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  @keyframes floaty{
    0%{
      transform:translateY(0);
    }
    100%{
      transform:translateY(15px);
    }
  }
  @keyframes shadown{
    0%{
      transform:scale(1,1);
    }
    100%{
      transform:scale(.85,.85);
    }
  }
  @keyframes rotate {
      0%{
        transform:perspective(1000px) rotateY(0deg);
      }
      100% {
        transform:perspective(1000px) rotateY(360deg);
      }
    }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .bottom{
      display:flex;
      flex-direction:column;
      height:80%;
    }
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
       
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home