import React, {useEffect,useState} from 'react'
import styled from "styled-components";
import Navbar from 'components/Navbar';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import KommunicateChat from 'components/misc/chat'

import PieChart from './PieChart';
import StackedAreaChart from './StackedAreaChart';
import StatsCard from './StatsCard';
import EquitiesCard from './EquitiesCard';
import CashCard from './CashCard';

import '../../styles/Charts.css'
import '../../styles/Goals.css'

const API = axios.create( { baseURL: 'http://localhost:5000' });


function Dashboard() {

  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      try{
        const resp = await API.get('http://localhost:5000/investments/getAll');
        console.log(resp.data);
        setInvestments(resp.data);  
      }catch(error){
        console.log(error.message);
      }
    }
    sendRequest();
  },[])

  return (
    <Section id="shop">
      <Navbar />
        <Container sx={{m:3, p:2}} maxWidth="l">
            <Box sx={{ m: 3}}>
            <Typography sx={{ 'text-align' : 'center', 'font-size': '5rem', 'line-height': '5.3rem', 'color' : 'black'}} variant="h3"> WELCOME </Typography>
            </Box>
            {/* <Paper sx={{ m: 10, p: 20 }} elevation={3}>

            </Paper> */}
            <Typography sx={{ 'text-align' : 'center', 'font-size': '2rem', 'line-height': '3.3rem', 'color' : 'black'}} variant="h2"> Financial Dashboard </Typography>
            <div className="charts">
              <div className="chart1">
                  <StackedAreaChart />
              </div>
              <div className="chart2">
                  <PieChart />
              </div>
            </div>
            { investments &&  (<div className="statscards">
              <div className="statscard">
                  <StatsCard />
              </div>
              <div className="statscard">
                  <EquitiesCard />
              </div>
              <div className="statscard">
                  <CashCard  />
              </div>
          </div> ) }
        </Container>
        <KommunicateChat/>
    </Section>
  );
}


const Section = styled.section`
      

      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          margin-bottom:5px;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
      
      
    
  
`;

export default Dashboard