import dynamic from 'next/dynamic';
import React, { Suspense, useState } from 'react';
// import dynamic from 'next/dynamic';
// import useIdle from '../lib/utils';
// import cx from 'clsx';
// import Scene from '../components/3d/Scene1Aug';

const Scene1 = dynamic(() => import('../components/3d/index', { ssr: false }));
const Scene2 = dynamic(() =>
  import('../components/3d/Scene1Aug', { ssr: false })
);
const Scene3 = dynamic(() => import('../components/3d/Scene3', { ssr: false }));
const Scene4 = dynamic(() =>
  import('../components/3d/IntroScene', { ssr: false })
);
// import Scene1 from
// const Scene = dynamic(() => import('../components/3d/index'), { ssr: false });

export default function ScenePage() {
  const [current, setCurrent] = useState(1);
  const scenes = [
    {
      name: 1,
      Component: Scene1,
    },
    {
      name: 2,
      Component: Scene2,
    },
    {
      name: 3,
      Component: Scene3,
    },
  ];
  return (
    <div className="relative h-screen w-full bg-slate-100">
      {/* <div className="absolute top-32 left-32 z-30">
        {scenes.map((s, i) => (
          <button
            className={`border px-4 py-2 ${current === i && 'border-brand'}`}
            type="button"
            key={i}
            onClick={() => {
              setCurrent(i);
            }}
          >
            {s.name}
          </button>
        ))}
      </div> */}
      <Suspense>
        {/* <div key={current}>
          {scenes.map(
            ({ Component }, index) => index === current && <Component />
          )}
        </div> */}

        <Scene2 />
      </Suspense>
    </div>
  );
}
