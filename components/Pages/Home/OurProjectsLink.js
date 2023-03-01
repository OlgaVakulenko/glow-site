import SectionLink from '../../SectionLink';
import cx from 'clsx';

export default function OutProjectsLink({ className, ...props }) {
  return (
    <SectionLink
      className={cx('pb-[126px] xl:pb-[126px]', className)}
      title="Our projects"
      description={[
        'How we do it.',
        <br key={0} />,
        'Check out how we make ideas glow click-by-click.',
      ]}
      href="/work"
      buttonLabel="CASES"
      {...props}
    />
  );
}
