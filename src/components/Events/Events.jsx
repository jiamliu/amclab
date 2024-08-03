import React from 'react';
import highSchoolStudent1 from '../../assets/Ashley.jpg';
import highSchoolStudent2 from '../../assets/Avaneesh.jpg';

const Events = () => {
  const students = [
    { name: 'Ashley George', photo: highSchoolStudent1, description: 'High School Student' },
    { name: 'Avaneesh Mantrala', photo: highSchoolStudent2, description: 'High School Student' },
  ];

  return (
    <div id="events" className="white w-full py-6">
      <h2 className="text-4xl text-yellow-600 font-bold font-serif mb-24 mt-24 md:text-left md:ml-14">2024 Nano Explorer Program Participants</h2>
      <div className="flex flex-wrap justify-center gap-32">
        {students.map((student) => (
          <div key={student.name} className="text-center w-48">
            <img src={student.photo} alt={student.name} className="h-60 w-full object-cover rounded-full" />
            <p className="mt-2 font-semibold font-serif">{student.name}</p>
            <p className="text-sm text-gray-600 font-serif">{student.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
