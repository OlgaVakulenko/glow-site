import { resolve } from '../../Image';
import Layout from '../../Layout';
import Heading from './Heading';

import S1 from './assets/s1.svg';
import S2 from './assets/s2.svg';
import S3 from './assets/s3.svg';

export default function Process() {
  return (
    <Layout className="py-[52px] md:mt-[72px] md:py-[72px] xl:mt-[88px] xl:py-[88px]">
      <Heading
        title={
          <>
            This is how <br className="hidden md:block xl:hidden" /> we do it
          </>
        }
        description="Custom software development helps you create great and super stable products by applying our workflow."
      />
      <picture>
        <source srcSet={S3.src} media="(min-width:1280px)"></source>
        <source srcSet={S2.src} media="(min-width:820px)"></source>
        <source srcSet={S1.src}></source>
        <img className="mt-10 w-full md:mt-14 xl:mt-20" src={S1.src} alt="" />
      </picture>
    </Layout>
  );
}
