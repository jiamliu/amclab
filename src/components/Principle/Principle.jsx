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
                            Hui Ouyang, PhD, is an Assistant Professor of Mechanical Engineering at the University of Texas at Dallas (UTD). Dr. Ouyang earned her Ph.D. from the Mechanical Engineering (ME) department at the University of Minnesota at Twin-cities (Aerosol Science and Technology) in 2014 and her MS from the ME department at the University of Akron (MEMS lab) in 2010 and her BS (Fluid Machinery) from Xi’an Jiaotong University in 2007. Her research lays its foundation on aerosol science and technology through both experimental measurements and theoretical modeling. Her current research focuses on bioaerosol transport and control in indoor environments, and aerosol transport in lung systems. She is the recipient of the Doctoral dissertation Fellowship award in 2014 at UMN. She is the recipient of the Outstanding Faculty Teaching Award in 2019 at UTD.
                        </p>
                        <h2 className="text-xl sm:text-xl font-bold font-serif">Research Interests</h2>
                        <ul className="text-sm list-disc pl-5">
                          <li>Particulate-laden flow systems.</li>
                          <li>Virus transmission in indoor environments.</li>
                          <li>Bioaerosol transport and control technologies.</li>
                          <li>Instrumental development for aerosol science research.</li>
                          <li>Aerosol transport in lung systems.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Principle;
