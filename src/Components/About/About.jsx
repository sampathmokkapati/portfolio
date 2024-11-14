import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
I'm Sampath, a front-end developer with a strong focus on 
building visually appealing and responsive web interfaces. Skilled in HTML, CSS, and 
JavaScript, I aim to create seamless, user-friendly experiences. I’m passionate about modern web design trends 
and strive to bridge the gap
 between design and functionality. Let's connect to bring intuitive, impactful web projects to life!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
I'm Sampath, a database developer skilled in designing and optimizing efficient data storage solutions. 
With experience in SQL and NoSQL databases, I focus on data integrity, security, and performance.
 I enjoy structuring data to support smooth, scalable application functionality.
 Let's work together to create reliable, high-performing data solutions!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
I'm Sampath, a back-end developer focused on building
 robust and scalable web applications. With a solid grasp of server-side programming, 
 databases, and API integration, I ensure that applications run efficiently and reliably. Skilled in languages
  like Node.js and Python, I’m passionate about optimizing performance, enhancing security, and managing data effectively. 
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
