import mongoose from 'mongoose';

const investmentSchema = mongoose.Schema({
    instrument: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }

})

export default mongoose.model('Investment', investmentSchema)
