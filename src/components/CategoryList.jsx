function CategoryList(){
  return (
    <div className=" w-[85%] mx-auto mt-24 overflow-x-scroll scroll-smooth lg:overflow-hidden">
      <ul className="flex  gap-3 lg:gap-5 text-slate-500 font-semibold text-lg lg:text-xl border-b-2 ">
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">View all</li>
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">Product</li>
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">Development</li>
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">Design</li>
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">Customer Support</li>
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">Leadership</li>
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">Management</li>
        <li className="pb-5 hover:text-slate-800 border-b-4 border-transparent hover:border-black cursor-pointer min-w-max">Interviews</li>
      </ul>
    </div>
  );
}
export default CategoryList