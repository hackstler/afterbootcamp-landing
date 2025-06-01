import type { ProgramStep } from '../../shared/types/index';
import { IconMap } from '../../shared/constants/icons';

type ProgramStepsProps = {
  steps: ProgramStep[];
};

export const ProgramSteps = ({ steps }: ProgramStepsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step) => (
        <div 
          key={step.id} 
          className="flex flex-col gap-4 rounded-xl border border-[#ced3e9] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#f8f9fc] text-[#4768fa]">
            {IconMap[step.icon]}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight">
              {step.title}
            </h3>
            <p className="text-[#47579e] text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}; 