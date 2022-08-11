import Investment from '../models/investments.js'

// get all workouts
export const getInvestments = async (req, res) => {
    const investments = await Investment.find({}).sort({createdAt: -1})
    res.status(200).json(investments)
}

// get a single workout
export const  getInvestment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such investment'})
    }
    const investment = await Investment.findById(id)

    if (!investment) {
        return res.status(404).json({error: 'No such investment'})
    }
    res.status(200).json(investment)
}

// create new workout
export const  createInvestment = async (req, res) => {
    const {instrument, value} = req.body
    // add doc to db
    try {
        const investment = await Investment.create({instrument, value})
        res.status(200).json(investment)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout
export const deleteInvestment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const investment = await Investment.findOneAndDelete({_id: id})

    if (!investment) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(investment)
}

// update a workout
export const updateInvestment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const investment = await Investment.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!investment) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(investment)
}

