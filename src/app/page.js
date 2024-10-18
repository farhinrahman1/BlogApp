import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    //there will be a button and there is a text that navigate to the blog list page
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 to-red-800 font-bold">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white">Welcome to Farhin's blog page</h1>
        <Link href={"/blogs"} className="hover:bg-gray-900 hover:text-white text-black bg-white font-bold py-2 px-4 rounded mt-4">
            Explore Blogs
        </Link>
      </div>
    </div>

  );
}
