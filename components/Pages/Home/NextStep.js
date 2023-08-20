import Layout from '../../Layout';
import { Transportation2 } from '../../Icons/Transportation';
import Healthcare from '../../Icons/Healthcare';
import Fintech from '../../Icons/Fintech';
import { useState } from 'react';
import Animated from '../../Animated';

const items = [
  {
    icon: Transportation2,
    title: 'Transportation',
    description:
      'Be it a carsharing app or an internal service for a logistics company – the key to happy users is in comfortable UX that is easy to navigate.',
  },
  {
    icon: Healthcare,
    title: 'AI tech',
    description:
      'To ensure user satisfaction, the UI of fintech products must be user-friendly yet informative, and we can help with that!',
  },
  {
    icon: Fintech,
    title: 'Fintech',
    description:
      'We specialize in designing AI-powered applications, combining cutting-edge technology with intuitive design for enhanced user experiences',
  },
];

export default function NextStep() {
  const [iconMap, setIconMap] = useState({});

  return (
    <Layout>
      <div className="border-b pb-[50px]">
        <h3 className="mb-[60px] font-glow text-5xl font-medium tracking-[-3px]">
          The next step of your digital product starts here
        </h3>
        <div className="grid gap-y-14">
          {items.map((item, index) => (
            <div key={index} className="">
              <Animated
                onViewChange={(inView) => {
                  setIconMap((map) => ({
                    ...map,
                    [index]: inView,
                  }));
                }}
                className="mb-9"
              >
                <item.icon isReady={iconMap[index] === true} />
              </Animated>
              <Animated
                delay={100}
                className="mb-4 text-2xl font-medium tracking-[0.48px]"
              >
                {item.title}
              </Animated>
              <Animated delay={200} className="text-lg leading-[26px]">
                {item.description}
              </Animated>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
