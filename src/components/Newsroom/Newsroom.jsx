import React from 'react';

const Newsroom = () => {
  return (
    <div id="newsroom" className="bg-slate-100 text-black duration-300 sm:min-h-[500px]">
      <div className="container">
        <div className="flex flex-col items-start p-16">
          <h1 className="text-xl sm:text-xl font-bold font-serif">Newsroom</h1>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Deepak's poster Monodisperse Aerosol Generator got second place in the Mechanical Engineering Department Poster Competition 2023 award in the department.</li>
            <li>Three-year NSF award from AGS in April 2024.</li>
            <li>NIH R21 award in June 2024.</li>
            <li>Nora graduated in May 2024.</li>
            <li>Polina graduated in May 2024 and continued as a Master's student in Systems Engineering.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;



