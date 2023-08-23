export default function Section({ title, paragraphs = [] }) {
  return (
    <div>
      <div className="mb-4 text-2xl font-medium leading-8 tracking-[0.48px]">
        {title}
      </div>
      <div className="space-y-[30px] text-lg leading-[26px]">
        {paragraphs.map((text, i) =>
          typeof text === 'string' ? <p key={i}>{text}</p> : text
        )}
      </div>
    </div>
  );
}
