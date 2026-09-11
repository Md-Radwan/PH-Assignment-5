import React, { use } from "react";
import type { Itechnologie } from "../types/technologieType";
import TechnologieList from "./TechnologieList";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologiePromise: Promise<Itechnologie[]>;
}

const Technologies = ({ technologiePromise }: TechnologiesProps) => {
  const technologies = use(technologiePromise);

  console.log(technologies);
  return (
    <div className="flex justify-between gap-8 container">
      <div className="w-[75%]">
        <TechnologieList technologies={technologies} />
      </div>
      <div className="w-[25%]">
        <YourStack/>
      </div>
    </div>
  );
};

export default Technologies;
