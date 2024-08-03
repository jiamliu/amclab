import React from 'react';

const publications = [
  {
    title: 'The collision cross sections of iodide salt cluster ions in air via differential mobility analysis-mass spectrometry',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HVXrKh0AAAAJ&citation_for_view=HVXrKh0AAAAJ:2osOgNQ5qMEC',
  },
  {
    title: 'Nanoparticle collisions in the gas phase in the presence of singular contact potentials',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HVXrKh0AAAAJ&citation_for_view=HVXrKh0AAAAJ:d1gkVwhDpl0C',
  },
  {
    title: 'The unipolar diffusion charging of arbitrary shaped aerosol particles',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HVXrKh0AAAAJ&citation_for_view=HVXrKh0AAAAJ:9yKSN-GCB0IC',
  },
  {
    title: 'Voltage-controlled flow regulating in nanofluidic channels with charged polymer brushes',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HVXrKh0AAAAJ&citation_for_view=HVXrKh0AAAAJ:u-x6o8ySG0sC',
  },
  {
    title: 'Static and dynamic responses of polyelectrolyte brushes under external electric field',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HVXrKh0AAAAJ&citation_for_view=HVXrKh0AAAAJ:u5HHmVD_uO8C',
  },
  {
    title: 'More Publications: Hui Ouyang - Google Scholar',
    link: 'https://scholar.google.com/citations?user=HVXrKh0AAAAJ',
  },
];

const Publication = () => {
  return (
    <div id="publications" className="bg-white w-full py-6 text-black">
      <div className="container">
        <div className="grid grid-cols-1 place-items-center">
          <div className="mr-2 w-full">
            <div className="space-y-5 sm:p-16 pb-6 w-full">
              <h1 className="text-xl sm:text-xl font-bold font-serif">Publications</h1>
              <div className="flex flex-col gap-4 w-full">
                {publications.map((publication, index) => (
                  <div key={index} className="text-left w-full">
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline font-serif text-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
                    >
                      {publication.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;













