import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "components/misc/useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "animation";
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import axios from 'axios';


const API = axios.create( { baseURL: 'http://localhost:5000' });
const clientId = "BE20SSQyjm1RgBndVvUmQ8jsoY-OysyeH3x-YstbnAAr-fK20UUacUlUkrPr1sPI1n7sK4oDBOy7yEaQfC3JzYA" // get from https://dashboard.web3auth.io


function Navbar() {
  const [isNavOpen,setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  const [web3auth, setWeb3auth] = useState(null)
  const [provider, setProvider] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet")
      return
    }
    await web3auth.logout();
    setProvider(null);
    navigate('/');
  }


  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet")
      return
    }
    const web3authProvider = await web3auth.connect()
    setProvider(web3authProvider)
    const user = await web3auth.getUserInfo();
    const token = user.idToken;
    const data = {email : user.email};
    console.log(data);

    try{
      const res = await API.post('/users/createUser', data);
      console.log(res);
    } catch (error){
      console.log(error);
    }
  
    try {
      dispatch({ type: 'AUTH', data: { user, token } });
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth" // This is the public RPC we have added, please pass on your own endpoint while creating an app
          }
        })

        setWeb3auth(web3auth)

        await web3auth.initModal()
        if (web3auth.provider) {
          setProvider(web3auth.provider)
        }
      } catch (error) {
        console.error(error)
      }
    }

    init()
  }, [])

  return <Nav ref={element}
  variants={navAnimation}
  transition={{ delay: 0.1 }}
  animate={controls} 
  state={isNavOpen ? 1 : 0}
  >
    <div className="brand__container">
      <a  onClick={() => window.location.reload(false)}  href="#" className='brand'>
        {/* <img style={{width: '125px', height: '125px'}}src={Pomona} alt="logo" className="brand__logo" /> */}
        SPIRIT
      </a>  
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={ () => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={ (e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
        )}
      </div>
    </div>
    <div className={`links ${isNavOpen ? "show" : ""}`}>
    {provider ? (<ul>
          <li className="active">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/planning">Planning</a>
          </li>
          <li>
            <a href="/quiz">Quiz</a>
          </li>
          <li>
            <a href="/rewards">Rewards</a>
          </li>
          <li>
            <a href="/videos">Tutorials</a>
          </li>
          <li>
            <a href="#" onClick={logout}>Log Out</a>
          </li>
        </ul>) : (<ul>
        <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About Us</a>
          </li>
         
          <li>
            <a href="#how it works">How it Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#" onClick={login}>Login/Signup</a>
          </li>
        </ul>)}
    </div>
  </Nav>
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: black;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
    a{
      text-decoration:none;
      color:black;
      font-size: 2rem;
      font-weight:600;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active{
        a {
          border-bottom: 0.2rem solid white;
        }
      }
      li {
        a {
          color: black;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: #2A3B3C;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;