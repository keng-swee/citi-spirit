import express from 'express';
import {
    createInvestment,
    getInvestments,
    getInvestment,
    deleteInvestment,
    updateInvestment
} from '../controllers/investments.js';


const router = express.Router()

// GET all workouts
router.get('/getAll', getInvestments)

// // GET single workout 
router.get('/getOne', getInvestment)

// // POST a new workout
router.post('/', createInvestment)

// // DELETE a new workout
router.delete('/:id', deleteInvestment)

// // PATCH a new workout
router.patch('/:id', updateInvestment)


export default router;