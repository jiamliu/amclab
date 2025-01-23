import React from 'react'
import PrinciplePhoto from "../../assets/principle.webp"

const Principle = () => {
  return (
    <div id="principle-investigator" className="bg-white text-black duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div>
                    <img src={PrinciplePhoto} alt="" className="rounded-lg sm:scale-105 sm:-translate-x-11 max-h-[500px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"/>
                </div>
                <div>
                    <div className="space-y-5 sm:p-16 pb-6">
                        <h1 className="text-xl sm:text-xl font-bold font-serif">Principle Investigator</h1>
                        <p className="text-sm text-justify">
                        Hui Ouyang, Ph.D., is an Assistant Professor of Mechanical Engineering at the University of Texas at Dallas (UTD). She earned her Ph.D. in Mechanical Engineering, specializing in Aerosol Science and Technology, from the University of Minnesota, Twin Cities, in 2014. She also holds an M.S. in Mechanical Engineering from the University of Akron (2010) and a B.S. in Energy and Power Engineering from Xi’an Jiaotong University (2007).
Dr. Ouyang has been recognized for her academic excellence with several awards, including the Doctoral Dissertation Fellowship at the University of Minnesota in 2014 and the Outstanding Faculty Teaching Award at UTD in 2019.
Currently, Dr. Ouyang leads the Aerosol Measurement and Control (AMC) Lab, which focuses on experimental research in aerosol science and technology. Her lab investigates critical areas such as atmospheric aerosol science, bioaerosol transport, and indoor air quality. Specifically, the lab's projects explore key processes like coagulation following new particle formation in the atmosphere and the mechanisms of virus transmission via virus-laden bioaerosol particles in indoor environments. Her lab is supported by funding from UTD, NSF, and NIH.
                        </p>
                        <h2 className="text-xl sm:text-xl font-bold font-serif">Research Interests</h2>
                        <ul className="text-sm list-disc pl-5">
                          <li>Aerosol Science and Technology</li>
                          <li>Virus Transmission in Indoor Environments.</li>
                          <li>Bioaerosol Transport and Control Technologies.</li>
                          <li>Instrumental development for aerosol science research.</li>
                          <li>Particulate-Laden Flow Systems.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Principle;
