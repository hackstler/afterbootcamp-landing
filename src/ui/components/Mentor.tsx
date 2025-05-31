import { Link } from 'react-router-dom';
import type { Mentor as MentorType } from '../../shared/types';

type MentorProps = {
  mentor: MentorType;
};

export const Mentor = ({ mentor }: MentorProps) => {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-[#ced3e9] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Link to="/historia" className="flex-shrink-0">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="size-32 rounded-full object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#0d0f1c] text-xl font-bold leading-tight tracking-[-0.015em]">
              {mentor.name}
            </h3>
            <p className="text-[#47579e] text-base font-normal leading-normal">
              {mentor.role}
            </p>
          </div>
          <p className="text-[#47579e] text-base leading-relaxed">
            {mentor.description}
          </p>
        </div>
      </div>
    </div>
  );
}; 