import { asyncHandeler } from "../utils/asyncHandeler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";
const registerUser = asyncHandeler(async (req, res) => {
  //get user edtails from frontend
  //validation
  //check if user already exists:username,email
  //check fr images , check for avatar
  //upload them to cloudinary,avatar
  //create user object --create entry in db
  //remove password and refresh token field from response
  //check for user creation
  //return response

  const { fullname, email, username, password } = req.body;
  console.log("email", email);
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are compulsary");
  }

const existedUser = await User.findOne({
    $or: [{ username },{ email }]
});
if(existedUser)
{
    throw new ApiError(409, "User With Email or Username Already exists")
 
}
console.log(req.files)
if (!req.files || !req.files.avatar) {
  throw new ApiError(400, "Avatar file is required");
}
const avatarLocalPath = req.files?.avatar[0]?.path;

// const coverImageLocalPath = req.files?.coverImage[0]?.path || null;
let coverImageLocalPath;
if (req.files && Array.isArray(req.files.coverImage)
&& req.files.coverImage.length > 0) {
  coverImageLocalPath = req.files.coverImage[0].path
  
}

if(!avatarLocalPath)
{
  throw new ApiError(400,"Avatar file is required")
  
}

console.log("image", avatarLocalPath , " "+ coverImageLocalPath)

const avatar  =  await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath)
 if(!avatar)
 {
  throw new ApiError(400,"Avatar file is required")
 }

 const user = await User.create({
  fullname,
  avatar:avatar.url,
  coverImage: coverImage?.url || "",
  email,
  password,
  username: username.toLowerCase()
  
 })
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!createdUser)
  {
    throw new ApiError(500,"something went wrong ")
  }

return res.status(201).json(
  new ApiResponse(200, createdUser , "User Registerd Successfully")
)

});

export { registerUser };
