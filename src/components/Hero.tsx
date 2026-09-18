import hero from "../assets/banner-stack.png";

const Hero = () => {
    return (
    
// Our Hero section
        <div className="flex items-center gap-8 py-10">
          {/* left site */}
          <div className="w-[70%]">
            <h1 className="text-5xl font-bold">
              Build Your Idea <br />
              <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="h-10 rounded-md bg-linear-65 from-orange-500 to-pink-500 px-6 font-medium text-white">
                Explore Technologies
              </button>
              <button className="btn btn-wide">Learn More</button>
            </div>
          </div>
          {/* right site */}
          <div className="w-[30%]">
            <img
              src={hero}
              className="w-full object-cover"
              alt="Hero image is not found"
            />
          </div>
        </div>
    );
};

export default Hero;