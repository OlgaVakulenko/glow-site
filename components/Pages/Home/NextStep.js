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
      <h3 className="mb-[60px] font-glow text-5xl font-medium tracking-[-3px]">
        The next step of your digital product starts here
      </h3>
      <div>
        {items.map((item, index) => (
          <Animated
            key={index}
            onViewChange={(inView) => {
              setIconMap((map) => ({
                ...map,
                [index]: inView,
              }));
            }}
          >
            <div>
              <item.icon isReady={iconMap[index] === true} />
            </div>
            <div className="mb-4 text-2xl font-medium tracking-[0.48px]">
              {item.title}
            </div>
            <div>{item.description}</div>
          </Animated>
        ))}
      </div>
    </Layout>
  );
}
