import React, { type Dispatch, type SetStateAction } from "react";
import type { Itechnologie } from "../types/technologieType";
import TechnologieCard from "./TechnologieCard";

interface ITechnologieProps{
  technologies: Itechnologie[];
  selectedTechnologies: Itechnologie[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itechnologie[]>>
}

const TechnologieList = ({ technologies, selectedTechnologies, setSelectedTechnologies }: ITechnologieProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((eachTechnologie: Itechnologie, ind: number) => {
        return <TechnologieCard
        key={ind} 
        eachTechnologie={eachTechnologie}
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
        />;
      })}
    </div>
  );
};

export default TechnologieList;
