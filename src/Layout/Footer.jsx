import faq from "../api/faq.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { MdPlace } from "react-icons/md";

export const Footer = () => {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-black text-white">
      {/* FAQ Section */}
      <div className="w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-t border-white/10 py-10 px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {faq.map((curElm, index) => {
          const { icon, title, details } = curElm;
          return (
            <div
              key={index}
              className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-4 border border-white/10 shadow-lg"
            >
              <div className="text-3xl text-amber-400">{iconMap[icon]}</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">{title}</h3>
                <p className="text-sm md:text-base text-neutral-300">{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-6 bg-black border-t border-white/10 text-neutral-400 text-sm md:text-base">
        © {new Date().getFullYear()} <span className="text-amber-400 font-semibold">Pravesh Yadav</span>. All Rights Reserved.
      </div>
    </footer>
  );
};
