import type { Mentor as MentorType } from '../../shared/types';
import { Link } from 'react-router-dom';

type MentorProps = {
  mentor: MentorType;
};

export const Mentor = ({ mentor }: MentorProps) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Link to="/historia" className="flex-shrink-0">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="size-24 rounded-full object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
              {mentor.name}
            </h3>
            <p className="text-[#47579e] text-sm font-normal leading-normal">
              {mentor.role}
            </p>
          </div>
          <p className="text-[#47579e] text-sm font-normal leading-normal">
            {mentor.description}
          </p>
        </div>
      </div>
    </div>
  );
}; 