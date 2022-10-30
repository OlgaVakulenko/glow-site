import SectionLink from '../../SectionLink';

export default function OutProjectsLink() {
  return (
    <SectionLink
      className="pb-[126px]"
      title="Our projects"
      description={[
        'How we do it.',
        <br key={0} />,
        'Check out how we make ideas glow click-by-click.',
      ]}
      href="#"
    />
  );
}
