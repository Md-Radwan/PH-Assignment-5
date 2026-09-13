import  { type Dispatch, type SetStateAction } from "react";
import type { Itechnologie } from "../types/technologieType";

// import { SiSvelte, SiRedis } from "react-icons/si";
import { X } from "lucide-react";
import { toast } from "react-toastify";

interface ISelectedTechnologieProps{
    selectedTechnologies: Itechnologie[];
    setSelectedTechnologies: Dispatch<SetStateAction<Itechnologie[]>>
}

const SelectedTechnologiesCard = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: ISelectedTechnologieProps) => {
    // console.log(selectedTechnologies)

    const handleRemoveTechnologie = (item: Itechnologie) => {
        
        const restTechnologie = selectedTechnologies.filter(selectedTechnologie=> selectedTechnologie.name != item.name)

        setSelectedTechnologies(restTechnologie)
        toast.error('Remove this stack');
    }

    const handleRemoveTechnologieAll = () => {
        setSelectedTechnologies([])
        toast.error('Successfully Remove all stack');
    }

    
  return (
       <div className="w-full lg:w-70 min-h-74.5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-[16px] font-semibold text-[#111827]">
          Your Stack
        </h2>

        <p className="mt-1 text-[13px] text-[#94a3b8]">
          {selectedTechnologies.length} Technology Selected
        </p>
      </div>

      {/* Stack Items */}
      <div className="space-y-2">
        {selectedTechnologies.map((item) => (
          <div
            key={item.id}
            className="flex h-12.75 items-center rounded-lg border border-[#dbe3ef] px-3"
          >
            {/* Icon */}
            <div className="flex w-8 items-center justify-center">
              <img src={item.icon} />
            </div>

            {/* Name + Category */}
            <div className="ml-2 flex-1">
              <h3 className="text-[11px] font-semibold leading-4 text-[#172033]">
                {item.name}
              </h3>

              <p className="text-[7px] leading-3 text-[#94a3b8]">
                {item.category}
              </p>
            </div>

            {/* Remove */}
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center text-[#94a3b8] transition hover:text-[#475569]"
            >
              <X size={19} strokeWidth={1.5} onClick={() => handleRemoveTechnologie(item)} className="cursor-pointer"/>
            </button>
          </div>
        ))}
      </div>

      {/* Remove All */}
      <button
        type="button"
        className="mt-11.75 h-7.75 w-full rounded-lg border border-[#ff8d8d] text-[13px] font-medium text-[#ff3b30] transition hover:bg-red-50"
        onClick={handleRemoveTechnologieAll}
      >
        Remove All
      </button>
    </div>
    );
};

export default SelectedTechnologiesCard;
