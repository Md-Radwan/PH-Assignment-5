import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="px-4 md:px-0 py-35 lg:py-15 container flex flex-col lg:flex-row justify-between items-center">
      <div>
        <h1 className="text-center lg:text-left text-4xl md:text-5xl font-extrabold leading-11 md:leading-[1.05] tracking-tight">
          <span className="block text-[#07142f]">Build Your Ideal</span>

          <span className="block bg-linear-to-r from-[#ff3b1f] via-[#e51f68] to-[#9c27d9] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-center lg:text-left text-lg leading-7.5 text-[#475569] w-auto lg:w-xl mt-6">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex justify-center lg:justify-normal gap-3 mt-10">
            <button className="bg-linear-to-r from-[#ff3b1f] via-[#e51f68] to-[#9c27d9] text-white p-3 rounded-xl cursor-pointer">Explore Technologies</button>
            <button className="border border-[#E5E7EB] py-3 px-11.5 rounded-xl cursor-pointer">Learn More</button>
        </div>
      </div>
      <div>
        <img src={heroImg}/>
      </div>
    </div>
  );
};

export default Hero;
