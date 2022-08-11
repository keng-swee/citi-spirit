import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {type:String, required:true},
    points : {type:Number, default:0},
    // investments : {type:Array},
})

export default mongoose.model("User", userSchema);