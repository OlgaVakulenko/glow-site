import { useAtom } from 'jotai';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { RollingWords } from '.';
import { subMenuOpenAtom, useHeaderTheme } from '../../Header';
import Layout from '../../Layout';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import cx from 'clsx';
import gsap from '../../../dist/gsap';
import dynamic from 'next/dynamic';
// import Scene from '../../3d';
// import Scene2 from '../../3d/Scene2';
const Scene = dynamic(() => import('../../3d/index'));
const Scene2 = dynamic(() => import('../../3d/Scene2'));

// const Scene = import()

function IntroSection(props) {
  const [scene, setScene] = useState(null);
  const ref = useRef(null);
  const [subMenuOpen] = useAtom(subMenuOpenAtom);

  useHeaderTheme({ theme: 'brand', ref });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          backgroundColor: 'rgb(227, 50, 48)',
        },
        {
          scrollTrigger: {
            trigger: ref.current,
            start: '100% center',
            end: '130% center',
            scrub: true,
          },
          backgroundColor: 'white',
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [subMenuOpen]);

  useEffect(() => {
    if (window?.location?.search?.includes('v1')) {
      setScene('v1');
    }
  }, []);

  return (
    <div ref={ref} className={cx('relative bg-brand')}>
      <div
        className={cx('absolute inset-0 bg-white opacity-0 duration-300', {
          'opacity-100': subMenuOpen,
        })}
      ></div>
      {scene === 'v1' && <Scene />}

      <Layout className="pointer-events-none">
        <div className="relative flex min-h-[calc(var(--lvh)*100)] flex-col justify-between pb-[48px] pt-[155px] md:min-h-screen md:pt-[280px]">
          <PageSubheading>
            Your trusted design team <br />
            for&nbsp;
            <RollingWords
              words={['transportation', 'healthcare', 'fintech']}
              interval={2200}
            />{' '}
            <div className="inline-flex">challenges.</div>
          </PageSubheading>

          <PageHeading>
            Simple design
            <br className="hidden md:block" /> for&nbsp;complex products
          </PageHeading>
        </div>
      </Layout>
    </div>
  );
}

export default IntroSection;
