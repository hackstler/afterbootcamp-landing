import React from 'react';

type CTAProps = {
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
};

export const CTA = ({ title, primaryButtonText, secondaryButtonText }: CTAProps) => {
  return (
    <div className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            {title}
          </h1>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 flex-wrap max-w-[480px] justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#4768fa] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow hover:bg-[#3a56d4] transition-colors">
                <span className="truncate">{primaryButtonText}</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e6e9f4] text-[#0d0f1c] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow hover:bg-[#d8dcec] transition-colors">
                <span className="truncate">{secondaryButtonText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 