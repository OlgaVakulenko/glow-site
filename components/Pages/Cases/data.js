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
import InvoiceMaker from './assets/new/invoice-maker-cover.png';

const cases = [
  {
    href: '/invoice-maker/',
    title: (
      <>
        Invoice Maker - <br />
        everything about invoices
      </>
    ),
    description:
      'Beast is an ambitious carsharing project from Estonia that presents a range of exclusive Tesla models.',
    title2: 'Invoice Maker',
    industry: ['Rental'],
    service: ['UI/UX', 'Product Design'],
    company: ['Funding $34.5M'],
    image: InvoiceMaker,
    imageWork: InvoiceMaker,
    // imageMobile: LiquidSpaceMobile,
    category: ['other'],
    type: ['desktop'],
  },
  {
    href: '/liquidspace',
    title: <>LiquidSpace: flexible office space rental software</>,
    description:
      'LiquidSpace is an online platform and network that connects people with available office spaces for rent.',

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
    title: <>JUCR: mobile app for efforthless EV charging</>,
    description:
      'JUCR is a mobile application for fast and convenient access to all charging stations in Europe. ',

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
        Beast: zero-emissions
        <br /> car rental for Tesla
      </>
    ),
    description:
      'Beast is an ambitious carsharing project from Estonia that presents a range of exclusive Tesla models.',
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="48"
          height="48"
          rx="13.7143"
          fill="black"
          fill-opacity="0.1"
        />
      </svg>
    ),
    // title2: 'Beast: zero-emissions car rental for Tesla',
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
    title: <>CryptoGenie: cryptocurrency trend prediction platform</>,
    description:
      'CryptoGenie is a brand new tool for predicting the relevant trends of various cryptocurrency assets.',

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
    title: 'A-Parking: platform for parking management',
    description:
      'Moving time-consuming parking management routine from paper to the tablet screen.',

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
    title: 'Tilt: financial aid opportunities for american students',
    description:
      'Tilt helps students find and select colleges that will offer them the best deal, as well as financial aid.',

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
    title: 'FleetChaser: efficient fleet management platform',
    description:
      'FleetChaser helps companies in the construction industry efficiently automate their work processes.',

    titleMobile: 'FleetChaser - Fleet management platform',
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
    title: 'EthosCE: educational platform for medical professionals',
    description:
      'EthosCE is an educational platform that provides new opportunities for healthcare professionals.',

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
