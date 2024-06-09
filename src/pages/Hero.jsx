import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BiArrowToRight } from "react-icons/bi";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <>
    <Navbar/>
      <main>
        <section className="py-32 px-4 mx-auto max-w-7xl sm:px-6">
          <div className="md:flex items-center gap-6">
            <div className="flex justify-center">
              <img src="/hero-image.gif" alt="Hero img" />
            </div>

            <div className="max-w-2xl">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold">
                  Unlock the Power of Algorithms
                </h1>
                <h2 className="text-3xl md:text-5xl font-extrabold">
                  with{" "}
                  <span className="text-blue-500 font-extrabold">
                    Visualization
                  </span>
                </h2>
                
                <p className="my-6 text-gray-700 text-xl tracking-tighter">
                  Transform data structures and algorithms from perplexing
                  puzzles to crystal-clear concepts with our intuitive DSA
                  visualization – just a tap away!
                </p>
                <div>
                  <Link
                    to="/algos"
                    className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg md:text-lg"
                  >
                    Get Started <BiArrowToRight className="inline"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Hero;
