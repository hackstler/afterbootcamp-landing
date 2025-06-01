import { Link } from 'react-router-dom';
import type { Mentor as MentorType } from '../../shared/types/index';

type MentorProps = {
  mentor: MentorType;
};

export const Mentor = ({ mentor }: MentorProps) => {
  return (
    <div className="flex flex-col gap-8 rounded-xl border border-[#ced2e9] bg-[#f8f9fc] p-8 shadow-sm hover:border-[#607afb] transition-colors">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <Link to="/historia" className="flex-shrink-0">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="size-36 rounded-full object-cover hover:opacity-90 transition-opacity ring-2 ring-[#607afb] ring-offset-2"
          />
        </Link>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#0d0f1c] text-2xl font-bold leading-tight tracking-[-0.015em]">
              {mentor.name}
            </h3>
            <p className="text-[#47569e] text-lg font-normal leading-normal">
              {mentor.role}
            </p>
          </div>
          <p className="text-[#47569e] text-base leading-relaxed">
            {mentor.description}
          </p>
        </div>
      </div>
    </div>
  );
}; 