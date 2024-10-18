import connectToDB from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";


//schema for the blog
const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
})



//for each apin route we need a method to handle the request either it can be a GET or POST
export async function POST(req) {
    try {
        //we will connect to the database
        await connectToDB();
        //whenever we will send a request like add a blog, we will get the data from this request
        const extractBlogData = await req.json();
        //to validate the data, we will check if the data is not empty
        const { title, description } = extractBlogData;

        const { error } = AddNewBlog.validate({ title, description });
        //if there is any error in the data, we will return the error message
        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
        }
        //if there is no error, then we will save the data in the database
        const newlyCreatedBlog = await Blog.create(extractBlogData); //Blog is the model that we have created in the database, and we are saving the data in the database here and returning a message
        if (newlyCreatedBlog) {
            return NextResponse.json(
                {
                    success: true,
                    message: "Blog added successfully"
                }
            )
        }else{
            return NextResponse.json(
                {
                    success: false,
                    message: "An error occurred while adding the blog, Please try again"
                }
            )
        }


        
    }catch(e) {
        console.log(e);
        return NextResponse.json(
            {
                success: false,
                message: "An error occurred while adding the blog, Please try again"
            }
        )
    }

}