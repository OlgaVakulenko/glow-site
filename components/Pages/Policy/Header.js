import PolicyLayout from './PolicyLayout';

export default function Header({ title }) {
  return (
    <div className="bg-[#F3F2F4] pt-[184px]">
      <PolicyLayout>
        <div className="font-glow text-[56px] font-medium leading-[56px] tracking-[-2px]">
          {title}
        </div>
        <div className="pb-[77px] text-subtitle-l italic">From Glow Team</div>
      </PolicyLayout>
    </div>
  );
}
