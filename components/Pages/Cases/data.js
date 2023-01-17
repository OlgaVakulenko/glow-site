import Case1Image from './assets/case_1.png';
import Case2Image from './assets/case_2.png';
import Case3Image from './assets/case_3.png';
import Case4Image from './assets/case_4.png';

import BeastCover from './assets/beast-cover.png';
import JucrCover from './assets/jucr-cover.png';
import CryptoGenie from './assets/cryptogenie-cover.png';
import LiquidSpace from './assets/ls-cover.png';

const cases = [
  {
    href: '/jucr',
    title: (
      <>
        Charge your car <br />
        without worries
      </>
    ),
    industry: ['Charge App', 'Electric Vehicles', 'Car rental'],
    service: ['Product Design', 'User Experience', 'User Interface'],
    company: ['Funding 30M'],
    image: JucrCover,
    category: ['transportation'],
  },
  {
    href: '/beast',
    title: (
      <>
        Zero-emissions car <br />
        rental for Tesla
      </>
    ),
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
  },
  {
    title: (
      <>
        CryptoGenie is a tool for
        <br className="hidden md:block" /> predicting the relevant trends
      </>
    ),
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
    category: ['transportation'],
  },
  {
    href: '#',
    title: (
      <>
        Liquid Space - workspace <br />
        rental service
      </>
    ),
    industry: ['Rental'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 8M'],
    image: LiquidSpace,
    category: ['transportation'],
  },
  {
    href: '/parking',
    title: 'Platform for parking in airport',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case4Image,
    category: ['transportation'],
  },
  {
    href: '/tilt',
    title:
      'Tilt: a platform that connects students with financial aid opportunities',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case3Image,
    category: ['transportation'],
  },
  {
    href: '/fleet',
    title: 'FleetChaser – fleet management platform',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case4Image,
    category: ['transportation'],
  },
  {
    href: '/ethos',
    title: 'EthosCE: new look at medical platform',
    industry: ['Car Rent'],
    service: ['User Experience', 'User Interface', 'Branding'],
    company: ['Funding 30M'],
    image: Case4Image,
    category: ['transportation'],
  },
];

export default cases;
