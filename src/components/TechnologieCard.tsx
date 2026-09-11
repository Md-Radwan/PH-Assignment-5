import React from 'react'
import type { Itechnologie } from '../types/technologieType';

const TechnologieCard = ({eachTechnologie}: { eachTechnologie: Itechnologie }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
      {/* Top section */}
      <div className="flex items-start justify-between">
        <img
          src={eachTechnologie.icon}
          className="h-9 w-9 object-contain"
        />

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
          {eachTechnologie.badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-bold text-slate-900">
        {eachTechnologie.name}
      </h2>

      {/* Description */}
      <p className="mt-2 min-h-[72px] text-sm leading-5 text-slate-500">
        {eachTechnologie.description}
      </p>

      {/* Divider */}
      <div className="my-4 h-px bg-gray-100" />

      {/* Meta information */}
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
          {eachTechnologie.category}
        </span>

        <span className="text-slate-500">
          {eachTechnologie.difficulty}
        </span>

        <span className="flex items-center gap-1 font-medium text-slate-700">
          <span className="text-yellow-400">★</span>
          {eachTechnologie.rating}
        </span>
      </div>

      {/* Button */}
      <button className="mt-4 w-full rounded-lg bg-slate-950 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologieCard
