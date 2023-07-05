import React from "react";
const Section = ({ title, subtitle, children }) => {
   return (
    <section className="min-h-fit flex flex-col justify-start
    items-center ру-16 px-5 text-center bg-gradient-to-b from-black via-slate-950 to to-gray-800 text-white">
      <h3 className="py-3 text-5xl lg:text-6xl text-white" data-aos="fade-up">{title}</h3>
      <p className="max-w-xl font-light text-white mb-10 md:text-base text-lg" data-aos="fade-up">
          {subtitle}
      </p>
       {children}
    </section>
   );
 };
export default Section;

