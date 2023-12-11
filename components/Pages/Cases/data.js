import BeastCoverMobile from './assets/new/beast-cover-mobile.png';
import BeastCover from './assets/new/beast-cover.png';
import BeastWork from './assets/new/beast-work.png';
import CryptoGenieMobile from './assets/new/crypto-cover-mobile.png';
import CryptoGenie from './assets/new/crypto-cover.png';
import CryptoWork from './assets/new/crypto-work.png';
import JucrCoverMobile from './assets/new/jucr-cover-mobile.png';
import JucrCover from './assets/new/jucr-cover.png';
import JucrWork from './assets/new/jucr-work.png';
// import LiquidSpace from './assets/liquidspace-cover.png';
import LiquidSpaceMobile from './assets/new/liquid-space-cover-mobile.png';
import LiquidSpace from './assets/new/liquid-space.png';
import LiquidSpaceWork from './assets/new/ls-work.png';
// import LiquidSpace from './LiquidSpace/assets/challenge-f.png';
import Parking from './assets/case-parking.png';
import Ethos from './assets/ethos-cover.png';
import EthosWork from './assets/new/ethos-work.png';
import FleetChaser from './assets/fc-cover.png';
import FleetChaserWork from './assets/new/fs-work.png';
import TiltMobile from './assets/new/tilt-cover-mobile.png';
import Tilt from './assets/new/tilt-cover.png';
import TiltWork from './assets/new/tilt-work.png';
import ParkingWork from './assets/new/parking-work.png';

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
    service: ['UI/UX', 'Product Design'],
    company: ['Funding $34.5M'],
    image: LiquidSpace,
    imageWork: LiquidSpaceWork,
    imageMobile: LiquidSpaceMobile,
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
    title2: 'JUCR',
    industry: ['Charge App', 'Electric Vehicles', 'Car rental'],
    service: ['Product Design', 'UI/UX'],
    company: ['Funding €32.7M'],
    image: JucrCover,
    imageWork: JucrWork,
    imageMobile: JucrCoverMobile,
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
    service: ['UI/UX', 'Branding'],
    company: ['20k app downloads'],
    image: BeastCover,
    imageWork: BeastWork,
    imageMobile: BeastCoverMobile,
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
    title2: 'CryptoGenie',
    href: '/cryptogenie',
    industry: ['AI', 'Blockchain'],
    service: ['Product Design', 'UI/UX'],
    company: [
      `100k predictions
        at start`,
    ],

    image: CryptoGenie,
    imageWork: CryptoWork,
    imageMobile: CryptoGenieMobile,
    category: ['fintech'],
    type: ['desktop'],
  },
  {
    href: '/parking',
    title: 'Platform for parking in airport',
    title2: 'Platform for parking',
    industry: ['Car Rent'],
    service: ['UI/UX', 'Branding'],
    company: ['Funding 30M'],
    image: Parking,
    imageWork: ParkingWork,
    category: ['transportation'],
    type: ['desktop'],
  },
  {
    href: '/tilt',
    title:
      'Tilt: a platform that connects students with financial aid opportunities',
    title2: 'Tilt',
    industry: ['Education'],
    service: ['UI/UX', 'Product Design'],
    company: [
      `
        72% received
        financial aid
      `,
    ],
    image: Tilt,
    imageMobile: TiltMobile,
    imageWork: TiltWork,
    category: ['other'],
    type: ['desktop'],
  },
  {
    href: '/fleet',
    title: 'FleetChaser – fleet management platform',
    title2: 'FleetChaser',
    industry: ['Management', 'Construction'],
    service: ['Product Design', 'User Experience', 'Product Design'],
    company: ['Funding 30M'],
    image: FleetChaser,
    imageWork: FleetChaserWork,
    category: ['transportation'],
    type: ['desktop'],
  },
  {
    href: '/ethos',
    title: 'EthosCE: new look at medical platform',
    title2: 'EthosCE',
    industry: ['Education', 'Medicine'],
    service: ['UI/UX', 'Web Design'],
    company: [
      `
        6M Students
        study online
      `,
    ],
    image: Ethos,
    imageWork: EthosWork,
    category: ['healthcare'],
    type: ['desktop'],
  },
];

export default cases;
