import React, { use, useState } from "react";
import type { Itechnologie } from "../types/technologieType";
import TechnologieList from "./TechnologieList";
import SelectedTechnologiesCard from "./SelectedTechnologiesCard";

interface TechnologiesProps {
  technologiePromise: Promise<Itechnologie[]>;
}

const Technologies = ({ technologiePromise }: TechnologiesProps) => {
  const technologies = use(technologiePromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnologie[]>([]);

  return (
    <div className="flex justify-between gap-8 container pt-10 pb-20">
      <div className="w-[75%]">
        <TechnologieList 
        technologies={technologies} 
        selectedTechnologies={selectedTechnologies} 
        setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
      <div className="w-[25%]">
        <SelectedTechnologiesCard
        selectedTechnologies={selectedTechnologies} 
        setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
    </div>
  );
};

export default Technologies;
