import { FiArrowUpRight } from "react-icons/fi";

function BlogPostContainer() {
  return (
    <div className=" w-full lg:w-[90%] hover:shadow-lg">
      <div className="">
        <img
          src="https://images.pexels.com/photos/250459/pexels-photo-250459.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="lappy"
          className="w-full h-[35vh]"
        />
        <div className="font-bold text-white -mt-20 p-5 flex justify-between backdrop-blur-md items-center ">
          <div className="">
            <h1 className="text-lg">Yash Gupta</h1>
            <p>2 Jan 2025</p>
          </div>
          <div>
            <h1 className="">Design</h1>
          </div>
        </div>
      </div>
      <div className="my-6 p-2">
        <h1 className="font-bold text-xl lg:text-3xl hover:underline cursor-pointer">Building your API Stack</h1>
        <p className="text-slate-600 text-xl my-2">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing. Here's our best practises.</p>
        <button className="flex font-bold text-lg mt-4">Read post<span><FiArrowUpRight className=" my-auto text-2xl pl-1 font-bold"/></span></button>
      </div>
    </div>
  );
}
export default BlogPostContainer;
