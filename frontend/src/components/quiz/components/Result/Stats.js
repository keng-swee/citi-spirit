import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';
import { Dialog, DialogContent, DialogContentText } from '@mui/material';


const API = axios.create( { baseURL: 'http://localhost:5000' });


const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  // resetQuiz
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  const [success, setSuccess] = useState(false);

    const handleClose = () => {
      setSuccess(false);
      window.history.replaceState({}, document.title, "/" + "quiz");
      window.location.reload(false);
  };

  const addToPoints = async() => {
    const currEmail = JSON.parse(localStorage.getItem('profile')).user.email
    const resp = await API.get(`/users/getPoints/${currEmail}`);

    let data = {
      email : currEmail,
      points : score + parseInt(resp.data)
    }

    console.log(data);
    const res = await API.put('/users/updatePoints', data);
    setSuccess(true);
  }

  return (
    <Segment>
      <Header as="h1" textAlign="center" block>
        {remarks}
      </Header>
      <Header as="h2" textAlign="center" block>
        Grade: {grade}
      </Header>
      <Header as="h3" textAlign="center" block>
        Total Questions: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block>
        Correct Answers: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block>
        Your Score: {score}%
      </Header>
      <Header as="h3" textAlign="center" block>
        Passing Score: 60%
      </Header>
      <Header as="h3" textAlign="center" block>
        Time Taken: {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Header>
      <div style={{ marginTop: 35 }}>

        {/* <Button
          color="teal"
          content="Back to Home"
          onClick={nav}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        /> */}
        <Button
          color="teal"
          content="Add to Points"
          onClick={addToPoints}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
      </div>
      <Dialog
          open={success}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
          <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You have successfully gained {score} points! 
              </DialogContentText>

              <DialogContentText id="alert-dialog-description">
              Visit the rewards page to browse the rewards you can claim!
              </DialogContentText>

          </DialogContent>
                
      </Dialog>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  // replayQuiz: PropTypes.func.isRequired,
  // resetQuiz: PropTypes.func.isRequired
};

export default Stats;
