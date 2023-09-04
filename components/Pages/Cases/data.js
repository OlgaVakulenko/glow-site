import Case1Image from './assets/case_1.png';
import Case2Image from './assets/case_2.png';
import Case3Image from './assets/case_3.png';
import Case4Image from './assets/case_4.png';

import BeastCover from './assets/beast-cover.png';
import JucrCover from './assets/jucr-cover.png';
import CryptoGenie from './assets/cryptogenie-cover.png';
// import LiquidSpace from './assets/liquidspace-cover.png';
import LiquidSpace from './assets/ls-cover.png';
// import LiquidSpace from './LiquidSpace/assets/challenge-f.png';
import FleetChaser from './assets/fc-cover.png';
import Ethos from './assets/ethos-cover.png';
import Parking from './assets/case-parking.png';
import Tilt from './assets/case-tilt.png';

const cases = [
  {
    href: '/liquidspace',
    title: (
      <>
        Liquid Space - workspace <br />
        rental service
      </>
    ),
    title2: 'Liquid Space',
    industry: ['Rental'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 8M'],
    image: LiquidSpace,
    category: ['other'],
    type: ['desktop'],
  },
  {
    href: '/jucr',
    title: (
      <>
        Charge your car <br />
        without worries
      </>
    ),
    title2: 'Charge your car',
    industry: ['Charge App', 'Electric Vehicles', 'Car rental'],
    service: ['Product Design', 'User Experience', 'User Interface'],
    company: ['Funding 30M'],
    image: JucrCover,
    category: ['transportation'],
    type: ['mobile'],
  },
  {
    href: '/beast',
    title: (
      <>
        Zero-emissions car <br />
        rental for Tesla
      </>
    ),
    title2: 'Beast Tesla Rent',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: [
      <>
        50k+ App <br />
        Downloads
      </>,
    ],
    image: BeastCover,
    category: ['transportation'],
    type: ['mobile'],
  },
  {
    title: (
      <>
        CryptoGenie is a tool for
        <br className="hidden md:block" /> predicting the relevant trends
      </>
    ),
    title2: 'Cryptogenie',
    href: '/cryptogenie',
    industry: ['AI', 'Blockchain'],
    service: ['Product Design', 'User Experience', 'User Interface'],
    company: [
      <>
        100k predictions <br />
        at start
      </>,
    ],
    image: CryptoGenie,
    category: ['fintech'],
    type: ['desktop'],
  },
  {
    href: '/parking',
    title: 'Platform for parking in airport',
    title2: 'Platform for parking',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Parking,
    category: ['transportation'],
    type: ['desktop'],
  },
  {
    href: '/tilt',
    title:
      'Tilt: a platform that connects students with financial aid opportunities',
    industry: ['Education'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Tilt,
    category: ['other'],
    type: ['desktop'],
  },
  {
    href: '/fleet',
    title: 'FleetChaser – fleet management platform',
    industry: ['Management', 'Construction'],
    service: ['Product Design', 'User Experience', 'User Interface'],
    company: [
      <>
        100k predictions <br />
        at start
      </>,
    ],
    image: FleetChaser,
    category: ['transportation'],
    type: ['desktop'],
  },
  {
    href: '/ethos',
    title: 'EthosCE: new look at medical platform',
    industry: ['Education', 'Medicine'],
    service: ['User Experience', 'User Interface', 'Product Design'],
    company: ['Funding 8M'],
    image: Ethos,
    category: ['healthcare'],
    type: ['desktop'],
  },
];

export default cases;
