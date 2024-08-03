import React from 'react';
import gradStudent1 from '../../assets/DeepakSapkota.webp';
import gradStudent2 from '../../assets/RishabhGupta.webp';
import gradStudent3 from '../../assets/YuhuiGuo.webp';
import underGrad1 from '../../assets/Nora.webp';
import underGrad2 from '../../assets/Polina.webp';
import underGrad3 from '../../assets/Jamay.webp';
import underGrad4 from '../../assets/Emerald.webp';
import volunteer1 from '../../assets/Endy.webp';
import volunteer2 from '../../assets/Max.webp';
import gradStudent4 from '../../assets/brandon.jpg';
import underGrad5 from '../../assets/frank.jpg';

const Team = () => {
  const gradStudents = [
    { name: 'Deepak Sapkota', photo: gradStudent1, description: 'Ph.D. Candidate' },
    { name: 'Rishabh Gupta', photo: gradStudent2, description: 'M.S. Student' },
    { name: 'Yuhui Guo', photo: gradStudent3, description: 'Ph.D. Student' },
    { name: 'Brandon Boren', photo: gradStudent4, description: 'Ph.D. Student' },
  ];

  const underGrads = [
    { name: 'Frank Nguyen', photo: underGrad5, description: 'UG Student' },
  ];

  const Alumni = [
    { name: 'Nora McGinty', photo: underGrad1, description: 'UG Student' },
    { name: 'Polina Girenko', photo: underGrad2, description: 'UG Student' },
    { name: 'Jamay Kazi', photo: underGrad3, description: 'UG Student' },
    { name: 'Emerald Schulz', photo: underGrad4, description: 'UG Student' },
    { name: 'Endy Lopez', photo: volunteer1, description: 'Volunteer' },
    { name: 'Max Pollard', photo: volunteer2, description: 'Volunteer' },
  ];

  return (
    <div id="team" className="bg-slate-100 w-full py-6">
      <h2 className="text-5xl text-yellow-600 font-bold font-serif mb-24 text-center md:text-left md:ml-14">Meet Our Team</h2>
      <div className="mb-24">
        <h3 className="text-3xl text-yellow-600 font-semibold font-serif mb-10 text-center">Graduate Students</h3>
        <div className="flex flex-wrap justify-center gap-32">
          {gradStudents.map((student) => (
            <div key={student.name} className="text-center w-48">
              <img src={student.photo} alt={student.name} className="h-60 w-full object-cover rounded-full"/>
              <p className="mt-2 font-semibold font-serif">{student.name}</p>
              <p className="text-sm text-gray-600 font-serif">{student.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-24">
        <h3 className="text-3xl text-yellow-600 font-semibold font-serif mb-10 text-center">Undergraduate Students</h3>
        <div className="flex flex-wrap justify-center gap-24">
          {underGrads.map((student) => (
            <div key={student.name} className="text-center w-48">
              <img src={student.photo} alt={student.name} className="h-60 w-full object-cover rounded-full"/>
              <p className="mt-2 font-serif font-semibold">{student.name}</p>
              <p className="text-sm font-serif text-gray-600">{student.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-3xl text-yellow-600 font-serif font-semibold mb-10 text-center">Alumni</h3>
        <div className="flex flex-wrap justify-center gap-20">
          {Alumni.map((Alumni) => (
            <div key={Alumni.name} className="text-center w-48">
              <img src={Alumni.photo} alt={Alumni.name} className="h-60 w-full object-cover rounded-full"/>
              <p className="mt-2 font-serif font-semibold">{Alumni.name}</p>
              <p className="text-sm font-serif text-gray-600">{Alumni.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;







