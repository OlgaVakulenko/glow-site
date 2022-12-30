import Section from '../../Section';
import SectionLink from '../../SectionLink';

export default function Team() {
  return (
    <Section withLayout={false}>
      <SectionLink
        title="Our team"
        buttonLabel="Career"
        href="#"
        description="Our talented and diverse team works together for one purpose—to unlock the potential of those around us."
        showButtonOnMobile={true}
      />
    </Section>
  );
}
