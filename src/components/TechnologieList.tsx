import React from "react";
import type { Itechnologie } from "../types/technologieType";
import TechnologieCard from "./TechnologieCard";

const TechnologieList = ({ technologies }) => {
  return (
      <div className="grid grid-cols-3 gap-4">
        {technologies.map((eachTechnologie: Itechnologie, ind: number)  => {
          return <TechnologieCard key={ind} eachTechnologie={eachTechnologie}/>
        })}
      </div>
    
  );
};

export default TechnologieList;
