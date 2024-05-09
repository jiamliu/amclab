import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="contact" className="bg-yellow-600">
      <section className="container min-h-[300px] flex">
        <div className="grid md:grid-cols-3 py-9">
          <div className="py-8 px-4 ml-auto mr-10"> 
            <h1 className="sm:text-3xl text-xl font-serif font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-white">
              Contact Dr Ouyang
            </h1>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-white" />
              <p className="text-white text-sm font-serif">ECSW 2.150, 800 W Campbell Rd, Richardson, TX, 75080</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-white" />
              <p className="text-white text-sm font-serif">(972)883-3584</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <MdOutlineMail className="text-2xl text-white" />
              <p className="text-white text-sm font-serif">Hui.Ouyang@utdallas.edu</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-white hover:text-primary duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl text-white hover:text-primary duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-white hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          <div className="col-span-2 pl-11 ml-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.965391013694!2d-96.74859847221947!3d32.97831488207739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1c7277dd89ab%3A0x262b391b4b52ad15!2s800%20W%20Campbell%20Rd%2C%20Richardson%2C%20TX%2075080!5e0!3m2!1sen!2sus!4v1715216847548!5m2!1sen!2sus"
              width="700px"
              height="300px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;




