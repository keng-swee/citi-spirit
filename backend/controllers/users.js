
import User from '../models/users.js';


export const createUser = async(req, res) => {
    const { email } = req.body;

    try {
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message:"User already exist."});
        const result = await User.create({ email });
        res.status(201).json(result);

    } catch(error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}


export const getUser = async(req, res) => {
    const { email } = req.params;
    
    try {
        const user = await User.findOne({email});
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}



export const updatePoints = async(req, res) => {
    const {email, points } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(400).json({message:"User does not exist."});
        
        await User.updateOne({'email' : email},
            {
                $set: {
                    'points' : points
                }
            });

        res.status(200).json();

    } catch(error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }

}


export const getPoints = async(req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({email});
        res.status(200).json(user.points);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
