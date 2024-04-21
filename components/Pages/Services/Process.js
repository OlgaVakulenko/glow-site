import { useMediaAtom } from '../../../lib/agent';
import Image, { Source, resolve } from '../../Image';
import Layout from '../../Layout';
import Heading from './Heading';

import ProcessMobile from './assets/process-m.png';
import ProcessMd from './assets/process-md.png';
import ProcessLg from './assets/process-lg.png';

export default function Process() {
  return (
    <Layout className="py-[52px] md:mt-[72px] md:py-[72px] xl:mt-[88px] xl:py-[88px]">
      <Heading
        title={
          <>
            This is how we <br className="xl:hidden" />
            do it
          </>
        }
        description="Custom software development helps you create great and super stable products by applying our workflow."
      />
      <picture>
        <Source image={ProcessLg} media="(min-width:1280px)" width="1280" />
        <Source image={ProcessMd} media="(min-width:820px)" width="1280" />
        <Source image={ProcessMobile} width="480" />
        <img
          className="mt-10 w-full md:mt-14 xl:mt-20"
          src={resolve({ src: ProcessMobile.src })}
          alt=""
        />
      </picture>
    </Layout>
  );
}
