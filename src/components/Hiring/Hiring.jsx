import React from 'react';
import hiringImage from '../../assets/career.png';

const Hiring = () => {
  return (
    <div id="hiring" className="bg-slate-100 text-black duration-300 sm:min-h-[500px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="mr-2">
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 className="text-xl sm:text-xl font-bold font-serif">Join Our Team</h1>
              <p className="text-sm mb-4 text-justify">
                We are looking for self-motivated graduate students (Ph.D. and MS with thesis) and postdoctoral researchers to join our research group. B.S. and M.S. students from all engineering backgrounds are welcome to apply for Ph.D. students, particularly from environmental, chemical, and mechanical engineering with thermal fluids backgrounds.
              </p>
            </div>
          </div>
          <div className="ml-14">
            <img src={hiringImage} alt="Hiring" className="rounded-lg sm:scale-105 sm:-translate-x-11 max-w-[500px] max-h-[600px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;






