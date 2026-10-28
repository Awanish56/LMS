import HomeLayout from "../assets/Layouts/HomeLayout";
import { Link } from "react-router-dom";
import HomepageImage from '../assets/Images/APJ.png';

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mx-6 lg:mx-16 h-auto lg:h-[90vh]">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Find our best{" "}
            <span className="text-yellow-500 font-bold">
              Online Courses
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300">
            We have a large library of courses taught by highly skilled and qualified instructors at a very affordable cost.
          </p>
          <div className="space-x-0 lg:space-x-6 space-y-4 lg:space-y-0 flex flex-col lg:flex-row justify-center lg:justify-start items-center">
            <Link to="/courses">
              <button className="bg-yellow-500 px-6 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all duration-300">
                Explore Courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-6 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={HomepageImage} alt="Learning online" className="w-[80%] max-w-md lg:max-w-full" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
