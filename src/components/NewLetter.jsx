function NewLetter() {
  return (
    <div className="w-[85%] mx-auto flex justify-between items-center mt-20">
      <div className="w-auto">
        <h1 className="text-6xl font-bold text-blue-950">
          Untitled Blog
        </h1>
        <div className="flex flex-col lg:flex-row mt-10">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            className=" w-full lg:w-[22vw] border border-slate-500 rounded-full p-4"
          />
          <label htmlFor="email">
            <button className="py-4 px-5 bg-blue-900 text-white font-semibold rounded-full w-full lg:w-auto lg:-ml-10 mt-2 lg:mt-0 hover:bg-black">
              Subscribe
            </button>
          </label>
        </div>
      </div>
      <div className="hidden lg:block">
        <p className="text-slate-500 text-xl font-bold w-[25vw]">
          New peoduct features, the latest in technology, solutions,
          and updates.
        </p>
      </div>
    </div>
  );
}
export default NewLetter;
