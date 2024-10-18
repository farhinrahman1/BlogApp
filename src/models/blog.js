import { string } from "joi";
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: string,
    description: string, 
});

const Blog = mongoose.model.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;