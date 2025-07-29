import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
        setCountry(res.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch country details:", error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return <h1 className="text-white text-xl">Loading...</h1>;

  return (
    <div className="bg-black w-full h-screen  flex items-center justify-center">
    <div className="text-white p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 
            bg-[linear-gradient(71deg,_#080509,_#1a171c,_#080509)]
            rounded-tl-[40px] rounded-br-[40px] bg-clip-padding flex flex-col  md:flex-row gap-10 ">
                <div><img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="w-full max-h-80 rounded shadow mb-4"
      /></div>
      <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold mb-4">{country.name.official}</h1>
      
      <p><span className="font-semibold">Capital:</span> {country.capital[0]}</p>
      <p><span className="font-semibold">Region:</span> {country.region}</p>
      <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
      <p><span className="font-semibold">Native Name: </span>{country.name?.nativeName?.eng?.official || "None"}</p>
      </div>
    </div>
    </div>
  );
};
