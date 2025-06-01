import type { ProgramStep } from '../../shared/types/index';
import { IconMap } from '../../shared/constants/icons';

type ProgramStepsProps = {
  steps: ProgramStep[];
};

export const ProgramSteps = ({ steps }: ProgramStepsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {steps.map((step) => (
        <div 
          key={step.id} 
          className="flex flex-col gap-4 rounded-xl border border-[#ced2e9] bg-[#f8f9fc] p-6 hover:border-[#607afb] transition-colors"
        >
          <div className="text-[#0d0f1c] w-8 h-8 flex items-center justify-center">
            {IconMap[step.icon]}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
              {step.title}
            </h2>
            <p className="text-[#47569e] text-base font-normal leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}; 