import express from 'express';
import { createUser, getPoints, updatePoints } from '../controllers/users.js';

const router = express.Router();
router.post('/createUser', createUser);
router.get('/getPoints/:email', getPoints);
router.put('/updatePoints', updatePoints);

export default router;