import { useEffect, useState, useTransition } from "react";
import { getCountry } from "../api/postApi";
import Loader from "../ui/Loader";
import { NavLink } from "react-router-dom";


export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  


  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountry();

        setCountries(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, []);



  if (isPending)
    return <Loader/>

  return (
    <main className="h-full bg-black text-white py-10 px-4">




      <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Countries</h1>
      {countries && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {countries.map((currEle, index) => (
          <div
            key={index}
            className="text-white p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 
            bg-[linear-gradient(71deg,_#080509,_#1a171c,_#080509)]
            rounded-tl-[40px] rounded-br-[40px] bg-clip-padding flex flex-col gap-2"
          >
            <img
              src={currEle.flags.png}
              alt={`${currEle.name?.common} flag`}
              className="w-full h-40 object-cover rounded-md mb-4 border border-white/20"
            />
            <h2 className="text-2xl font-bold mb-3">{currEle.name.common}</h2>
            <p className="text-sm text-neutral-300 mb-1">
              <span className="font-semibold text-amber-300">Capital: </span>
              {currEle.capital[0] || "N/A"}
            </p>
            <p className="text-sm text-neutral-300 mb-1">
              <span className="font-semibold text-amber-300">Population: </span>
              {currEle.population.toLocaleString() || "N/A"}
            </p>
            <p className="text-sm text-neutral-300 mb-1">
              <span className="font-semibold text-amber-300">Region: </span>
              {currEle.region}
            </p>
            <NavLink to={`/country/${currEle.name.common}`}>
            <button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold transition-all"
>
            Read More
          </button>
          </NavLink>
          </div>
        ))}
      </div>}

      
      
      
      
    </main>
  );
};
