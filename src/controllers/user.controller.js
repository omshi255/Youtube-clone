import {asyncHandeler} from "../utils/asyncHandeler.js";


const registerUser = asyncHandeler(async (req,res)=>
{
    res.status(200).json({
        message:"okk"
    })
})
export {registerUser,}