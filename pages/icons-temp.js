import { useEffect, useState } from 'react';
import BigButton from '../components/BigButton';
import Create from '../components/Icons/Create';
import Fintech from '../components/Icons/Fintech';
import Healthcare from '../components/Icons/Healthcare';
import Ideate from '../components/Icons/Ideate';
import Investigate from '../components/Icons/Investigate';
import Iterate from '../components/Icons/Iterate';
import { Transportation2 } from '../components/Icons/Transportation';
import HRule from '../components/HRule';

export default function IconsDemo() {
  const [isReady, setIsReady] = useState(false);
  const [key, setKey] = useState(0);
  const [key2, setKey2] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      // setIsReady(true);
    }, 300);
  }, []);

  return (
    <div className="px-16 py-4">
      <div className="sticky top-4 mb-8 ">
        <button
          className="border bg-white px-4 py-2"
          onClick={() => {
            setIsReady(false);
            setKey((k) => k + 1);
            setKey2((k) => k + 1);
            setTimeout(() => {
              setIsReady(true);
            }, 300);
          }}
        >
          Reset
        </button>
      </div>
      <div key={key} className="flex flex-wrap gap-8">
        <Transportation2 />
        <Fintech />
        <Healthcare />
      </div>
      <div key={key2 + 'i'} className="my-4 h-[1px]">
        <HRule />
      </div>
      {/* <hr className="my-4" /> */}
      <div key={key2} className="flex flex-wrap gap-8">
        <Investigate />
        <Ideate isReady={isReady} />
        <Create isReady={isReady} />
        <Iterate isReady={isReady} />
      </div>
    </div>
  );
}

IconsDemo.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
