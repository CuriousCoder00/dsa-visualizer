import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="max-w-7xl mx-auto py-auto w-screen h-16 md:h-20 text-center md:flex md:items-center md:justify-between">
        <div className="text-lg text-gray-800 mr-4">
          &copy; AlgoVisuals - All rights reserved.
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-800">Click here for contribution</p>
          <a
            href="https://github.com/"
            target="_blank"
            className="flex justify-center items-center text-gray-600 hover:text-gray-900 rounded-full transition delay-150 duration-150 ease-in-out"
            aria-label="Github"
          >
            <BsGithub className="text-xl ml-3"/>
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;