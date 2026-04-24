import { MARQUEE_ITEMS } from '../../shared/constants/data';

export const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-top">
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};
