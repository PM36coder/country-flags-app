import { IoArrowForwardSharp } from "react-icons/io5";
import { AboutData } from "./AboutData";
import { NavLink } from "react-router-dom";

export const MainHome = () => {
  return (
    <section className="min-h-screen bg-black text-amber-50 flex items-center flex-col gap-4 p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-20 py-12">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Explore The World One Country at a Time.
          </h1>
          <p className="text-base sm:text-lg text-neutral-300">
            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
          </p>
          <NavLink to='/country'>
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-3 mx-auto md:mx-0">
            Start Exploring <IoArrowForwardSharp />
          </button></NavLink>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://media.istockphoto.com/id/1329836000/photo/signpost-with-national-flags-of-different-countries.jpg?s=612x612&w=0&k=20&c=hbT4Z0L-8Ewx5g3evHGQVivbSB-QnDCpPASo6iZdadw="
            alt="World view"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <AboutData/>
    </section>
  );
};
