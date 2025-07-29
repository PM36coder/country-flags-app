import countryData from '../api/countryData.json';
export const AboutData = ()=>{

    return(<>
     <h1 className="text-white  text-3xl text-center sm:text-4xl md:text-5xl font-bold leading-tight mb-10 font-stretch-ultra-expanded">
        Here are the Interesting Facts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {countryData.map((currEle) => (
          <div
            key={currEle.id}
            className="btext-white p-6 rounded-xl shadow-lg border border-white/10 transition-transform hover:scale-105 
             bg-[linear-gradient(71deg,_#080509,_#1a171c,_#080509)]
             rounded-tl-[40px] rounded-br-[40px] bg-clip-padding"
          >
            <h2 className="text-2xl text-white font-bold mb-2">{currEle.country}</h2>
            <p className="text-sm text-neutral-300 mb-1">
              <span className="font-semibold text-amber-300">Capital:</span> {currEle.capital}
            </p>
            <p className="text-sm text-neutral-300 mb-1">
              <span className="font-semibold text-amber-300">Population:</span> {currEle.population}
            </p>
            <p className="text-sm text-blue-400 mt-2 italic">"{currEle.interestingFact}"</p>
          </div>
        ))}
      </div>
    </>)
}