import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Navbar from 'components/Navbar';
import axios from 'axios';
import { Container, Paper} from '@mui/material';
import Shop from "./Shop";
import Cart from "./Cart";
import Checkout from './Checkout';


const API = axios.create({ baseURL: 'http://localhost:5000' });


function Rewards() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [balance, setBalance] = useState(0);


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    const sendRequest = async () => {
      try{
        const currEmail = JSON.parse(localStorage.getItem('profile')).user.email
        const resp = await API.get(`http://localhost:5000/users/getPoints/${currEmail}`);
        setBalance(resp.data);  
      }catch(error){
        console.log(error.message);
      }
    }
    sendRequest();
  },[])


  return (
    <Section id="reward">
      <Navbar />
      <Container sx={{ m: 3, p: 2 }} maxWidth="l">

      <Checkout setShow={setShow} size={cart.length} balance={balance} />
        <Paper sx={{ m: 3, p: 3 }} elevation={3}>
          {show ? (
            <Shop handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} balance={balance} />
          )}
        </Paper>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  //      background-color:#2A3B3C;
  // min-height: 100vh;
  // background-size: cover;
  // position: relative;

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

export default Rewards