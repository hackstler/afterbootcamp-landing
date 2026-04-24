type SectionHeadProps = {
  number: string;
  total: string;
  meta: string;
  title: string;
  lead?: string | null;
};

export const SectionHead = ({ number, total, meta, title, lead }: SectionHeadProps) => (
  <div className="sec-head">
    <div className="ch">
      <span className="ch-num">§ {number}/{total}</span>
      <span className="ch-line" />
      <span className="ch-meta">{meta}</span>
    </div>
    <h2 dangerouslySetInnerHTML={{ __html: title }} />
    {lead && <p>{lead}</p>}
  </div>
);
