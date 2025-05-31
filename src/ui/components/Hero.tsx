type HeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export const Hero = ({ title, subtitle, buttonText }: HeroProps) => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0nXUp7JZ1cY7VQYnRE3ZFAPJadIhvxkfvG17o1aJ96PLCC8i9pm92IICl-frrqteR18jEg6OL-QQw4EMXpHrUP8mWo6ljR79VcDERna9n3gI1QQL-hMSHrIjnbBs-re4yAILzj_ezsn7RtmNOnwpa7nP_CwT0RSVsQeO3g0SRCCEWkEPlJpRY8Lhy-lp9LRYN36Yo4InPOo04iZcskwtnhlqj195oOFtUTRsREyRIqFUigc7pRUahbp6PuwpNxxbO6H3_k_4Mwun3")`,
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              {title}
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              {subtitle}
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#4768fa] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#3a56d4] transition-colors">
            <span className="truncate">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}; 