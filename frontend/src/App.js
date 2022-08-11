import Footer from 'components/Footer';
import Home from 'components/sections/Home';
import Milestones from 'components/sections/HowThisWorks';
import ScrollToTop from 'components/misc/ScrollToTop';
import Services from 'components/sections/AboutUs';

import Quiz from 'components/quiz/Quiz';
import Dashboard from 'components/dashboard/Dashboard';
import VideoList from 'components/videos/VideoList';
import Planning from 'components/planning/Planning';
import Rewards from 'components/rewards/Reward';
import { motion } from 'framer-motion';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import React from 'react'

const routes = (
  <Routes>
    <Route path="/dashboard" element={<Dashboard/>} exact />
    <Route path="/quiz" element={<Quiz/>} exact />
    <Route path="/rewards" element={<Rewards/>} exact />
    <Route path="/videos" element={<VideoList/>} exact />
    <Route path="/planning" element={<Planning/>} exact />
    <Route
        path="*"
        element={<Navigate to="/" replace />}
    />

    <Route path="/" element={ <motion.div initial="hidden" animate="show">
      <Home />
      <Services />
      <Milestones />
      <Footer />
      <ScrollToTop />
    </motion.div>} exact/>
  </Routes>
)

function App() {
  return (
    <Router>
    <main>{routes}</main>
  </Router>
 
  
  )
}

export default App