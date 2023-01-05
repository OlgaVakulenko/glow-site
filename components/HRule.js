import cx from 'clsx';
import Layout from './Layout';

export default function HRule({ className }) {
  return (
    <Layout>
      <div className={cx('h-[1px] w-full bg-black', className)}></div>
    </Layout>
  );
}
