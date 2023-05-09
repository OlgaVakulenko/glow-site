import React, { Suspense } from 'react';
// import dynamic from 'next/dynamic';
// import useIdle from '../lib/utils';
// import cx from 'clsx';
import Scene2 from '../components/3d/Scene2';

// const Scene = dynamic(() => import('../components/3d/index'), { ssr: false });

export default function ScenePage() {
  // const isIdle = useIdle();

  // return null;
  return (
    <div className="relative h-screen w-full bg-slate-100">
      <Suspense>
        <Scene2 />
      </Suspense>
    </div>
  );
}
