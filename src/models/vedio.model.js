import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const vedioSchema = new Schema({
 
    vedioFile:
    {
        type: String, //cloudinary file
        required : true

    },
    thumbnail:
    {
        type:string,
        required:true,
    },
    title:
    {
        type:string,
        required:true,
    },
    description:
    {
        type:string,
        required:true,
    },
    duration:
    {
        type:Number,
        required:true,
    },
    views:
    {
        type:Number , 
        default:0,
    },
    isPublished:
    {
        type:Boolean,
        default:true
    },
    owner:
    {
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{

timestamps:true

})
vedioSchema .plugin(mongooseAggregatePaginate)

export const Vedio  = mongoose.model("Vedio",vedioSchema)