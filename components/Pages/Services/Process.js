import cx from 'clsx';
import Layout from '../../Layout';
import Heading from './Heading';

export default function Process({ 
	headingTitle, 
	headingDescription, 
	children, 
	isColumn, 
	headingDescriptionClassNames,
	layoutClassNames,
	headingClassNames 
}) {
  return (
    <Layout className={cx('py-[52px] md:py-[72px] xl:py-[88px]', layoutClassNames)}>
      <Heading
        title={headingTitle}
        description={headingDescription}
				isColumn={isColumn}
				descriptionClassNames={headingDescriptionClassNames}
				classNames={headingClassNames}
      />
			{ children }
    </Layout>
  );
}
