import type { Mentor as MentorType } from '../../shared/types';

type MentorProps = {
  mentor: MentorType;
};

export const Mentor = ({ mentor }: MentorProps) => {
  return (
    <div className="flex p-4 @container">
      <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
        <div className="flex gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
            style={{ backgroundImage: `url("${mentor.image}")` }}
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              {mentor.name}
            </p>
            <p className="text-[#47579e] text-base font-normal leading-normal">{mentor.role}</p>
            <p className="text-[#47579e] text-base font-normal leading-normal">{mentor.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 