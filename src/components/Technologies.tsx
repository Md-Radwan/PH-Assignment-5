import { use, useState } from "react";
import type { Itechnologie } from "../types/technologieType";
import TechnologieList from "./TechnologieList";
import SelectedTechnologiesCard from "./SelectedTechnologiesCard";

interface TechnologiesProps {
  technologiePromise: Promise<Itechnologie[]>;
}

const Technologies = ({ technologiePromise }: TechnologiesProps) => {
  const technologies = use(technologiePromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Itechnologie[]
  >([]);

  return (
    <div className="px-4 md:px-0 container">
      <h1 className="text-center lg:text-left text-4xl font-extrabold leading-11 md:leading-10 tracking-tight">
        <span className="text-[#07142f]">Explore the </span>

        <span className="bg-linear-to-r from-[#ff3b1f] via-[#e51f68] to-[#9c27d9] bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-8 pt-10 pb-20">
        <div className="w-full lg:w-[75%]">
          <TechnologieList
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
        <div className="w-full mx-auto lg:w-[25%]">
          <SelectedTechnologiesCard
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
