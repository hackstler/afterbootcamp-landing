import { useState, useEffect } from 'react';
import { TERMINAL_SCRIPT } from '../../shared/constants/data';

export const HeroTerminal = () => {
  const [lines, setLines] = useState<typeof TERMINAL_SCRIPT>([]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let delay = 600;

    TERMINAL_SCRIPT.forEach((s) => {
      delay += s.wait;
      timeouts.push(
        setTimeout(() => setLines((prev) => [...prev, s]), delay)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="term">
      <div className="term-head">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <span>ssh · after.bootcamp</span>
        <span className="live">
          <span className="d" />
          LIVE
        </span>
      </div>
      <div className="term-body">
        {lines.map((l, i) => (
          <div key={i} className={`line ${l.type}`}>
            {l.text}
          </div>
        ))}
        <div className="line usr">
          <span className="blink">▊</span>
        </div>
      </div>
    </div>
  );
};
