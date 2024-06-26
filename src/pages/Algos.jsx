import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Algos = () => {
  const topics = [
    {
      title: "Searching",
      description:
        "Searching algorithm is a process of locating a specific item within a data structure, such as an array or list",
      link: "/algos/search",
      image: "/search.gif",
    },
    {
      title: "Sorting",
      description:
        "Sorting algorithm is a procedure for arranging elements in a specific order, such as ascending or descending",
      link: "/algos/sort",
      image: "/sort.png",
    },
    {
      title: "Recursive Sorting",
      description:
        "Sorting techniques that divide the sorting process into smaller subproblems and repeatedly apply the sorting operation to these subproblems. ",
      link: "/algos/recursive-sort",
      image: "recursion.jpeg",
    },
    {
      title: "Tree Traversal",
      description:
        "Tree traversal algorithm is a method for systematically visiting all nodes of a tree data structure",
      link: "/algos/tree-traversal",
      image: "tree.gif",
    },
    {
      title: "Pathfinding",
      description:
        "Pathfinding algorithm, often used in graph or grid-based structures, calculates the most efficient route from one point to another",
      link: "/algos/pathfind",
      image: "/pathfind.gif",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-24 -mb-16">
        <div className="text-center">
          <h1 className="text-3xl px-2 md:text-5xl font-extrabold mb-4">
            Explore the Visualization
          </h1>
          <p className="text-xl text-gray-700 tracking-tighter">
            <i>
              "Visualize DSA Like Never Before: Where Algorithms Become a Work
              of Art!"
            </i>
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-5">
          {topics.map((algo, id) => {
            return (
              <div
                key={id}
                className="w-full max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow hover:scale-105 transition-all duration-200 delay-150"
              >
                <img
                  src={algo.image}
                  className="rounded-t-lg w-full h-[39vh] sm:h-[20vh] lg:h-[39vh] min-h-[250px] object-cover object-center"
                  alt="algorithm"
                />
                <div className="px-5 pb-5 mt-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                    {algo.title}
                  </h3>
                  <div>
                    <p className="text-gray-600 mb-4">{algo.description}</p>
                  </div>

                  <Link to={algo.link}>
                    <button className="text-blue-700 hover:text-white border border-blue-500 bg-white hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-1.5 text-center">
                      Visualize
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Algos;
