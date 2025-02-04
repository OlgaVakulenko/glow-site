// import BeastCoverMobile from './assets/new/beast-cover-mobile.png';
// import BeastCover from './assets/new/beast-cover.png';
// import BeastWork from './assets/new/beast-work.png';
import Beast from './assets/new3/beast.png';
import Crypto from './assets/new3/crypto.png';
import Ethos from './assets/new3/ethos.png';
import FC from './assets/new3/fc.png';
import Jucr from './assets/new3/jucr.png';
import ls from './assets/new3/ls.png';
import Parking from './assets/new3/parking.png';
import Tilt from './assets/new3/tilt.png';
// import CryptoGenieMobile from './assets/new/crypto-cover-mobile.png';
// import CryptoGenie from './assets/new/crypto-cover.png';
// import CryptoWork from './assets/new/crypto-work.png';
// import JucrCoverMobile from './assets/new/jucr-cover-mobile.png';
// import JucrCover from './assets/new/jucr-cover.png';
// import JucrWork from './assets/new/jucr-work.png';
// import LiquidSpace from './assets/liquidspace-cover.png';
// import LiquidSpaceMobile from './assets/new/liquid-space-cover-mobile.png';
// import LiquidSpace from './assets/new/liquid-space.png';
// import LiquidSpaceWork from './assets/new/ls-work.png';
// import LiquidSpace from './LiquidSpace/assets/challenge-f.png';
// import Parking from './assets/case-parking.png';
// import Ethos from './assets/ethos-cover.png';
// import EthosWork from './assets/new/ethos-work.png';
// import FleetChaser from './assets/fc-cover.png';
// import FleetChaserWork from './assets/new/fs-work.png';
// import TiltMobile from './assets/new/tilt-cover-mobile.png';
// import Tilt from './assets/new/tilt-cover.png';
// import TiltWork from './assets/new/tilt-work.png';
// import ParkingWork from './assets/new/parking-work.png';
import InvoiceMaker from './assets/new/invoice-maker-cover.png';
import EchoDark from './assets/new3/echo-dark.png';
import EchoWhite from './assets/new3/echo-white.png';


const cases = [
  {
    href: '/invoice-maker',
    title: (
      <>
        Invoice Maker - <br />
        everything about invoices
      </>
    ),
    description:
      'InvoiceMaker is designed to saves all of your invoicing information, making it simple to generate repeat invoices for regular clients.',
    industry: ['Rental'],
    service: ['UI/UX', 'Product Design'],
    company: ['Funding $34.5M'],
    image: InvoiceMaker,
    imageWork: InvoiceMaker,
    // imageMobile: LiquidSpaceMobile,
    category: ['other'],
    type: ['desktop'],
    tags: ['Product Design', 'UI', 'UX', 'Visual Identity'],
    icon: (
      <svg className="h-full w-full" viewBox="0 0 48 49" fill="none">
        <rect
          y="0.5"
          width="48"
          height="48"
          rx="13.7143"
          fill="url(#pattern0_808_22841)"
        />
        <defs>
          <pattern
            id="pattern0_808_22841"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#image0_808_22841" transform="scale(0.0104167)" />
          </pattern>
          <image
            id="image0_808_22841"
            width="96"
            height="96"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU0SURBVHgB7Zw/TJxlHMd/NeqAqRyDCw7coKlx4YhlcTnQrQMHxnTRFAgOuhSI0a0CsjkUcKlLhUvsaOC6dGiUu8WlJByDRqImd0NZupxp7KAm7ft96ENe2vfao9z9vs9Lf5+keQ8Kx3u/z/P+3t/z531O7fz/4X0xaLwgBhUTQMYEkDEBZEwAGRNAxgSQMQFkTAAZE0DGBJAxAWRMABkTQMYEkDEBZEwAmRflBLFX/8cdb9fuyevZLunte0VCJ9UCblXuyGZpT7aiI4J/t/HfYz9zpj8jZ3IZGbnQJ4P51yQ0TqVtThhB/uHbP+Ra9C8e8EwmI9ls1h091WpVGo3Gwde9fV3yxeWcvFfolVBIjYCkwA8NDUmhUJDR0VEX/CRqtZqUy2VZWFhwr8FHF9+ULy/3SwikQgCCfuXr31zg0cKnp6dlZmbmUGtvhbW1tQMRSE1Xf8rL6cxLwiRoAQj4palbLs+DiYkJWVpaOnLg4yD4w8PD+8coFS3/+K4wCbYM3YsqmfPv3HTBR3rZ3NyU1dXVYwUf+Pdyx+i9kdaYBClgd6chU++Xo8rmnsvz29vb7tguEPz19XX3+ruHqY1FcAL2g19xwUeuR2s9bqtPIpfLufuIv7mzCOoegLTjW/7c3JzMz89LJ0GJ2tPT427EN/48R7khB3MFaAcf4MpCasNV8PtOQxgEI+Cbz6su+KjpNYLvwd8DvtLSJggBqPN9tYMyU5N8Pu+OfhxJG7oApB50soAvDzXxf2+3+pymoCuLv7ocjIpHO/igExXWUaAKQOu/Xqy7wKMkfB6hCcBQ8vmzN91rVD2M1h8CFAHXizX5JOpsIfUg8BjjYYEha9Cb5UzeqAtAT/fS1NbB1+0cYngW/HwBa1RUVQBy/swHvxz6HtIPk0ql4o6YVWOMCakKQMWDzpYH6Yed+zFZA/zQtzZqAnzFE8f3Qln42TIPOoMoDjRRE4DW/yi+F8oiHnzPNeWRUTUBSWMt7PSD6clH0b4XqAho9qGYAtD6/SR9HJznz6XbooWKgGZ5lTkMMDk52fT/dnf+Fi1UBOySxtqbgdURSa3fozkyqiKgWU6NL5rSAoFPyv1xULFpQR2MYwiIL9Bqxt3Gv6IFVYDvhWqB4CP9hARVgB8I02BjY0N1qrNVqALQGjXSEEQ/qephQr8HlEol6SSo97EUkXG/aQX6lCTSQqeCs7KyEnTwAV0AKpLZ2VlpJwg43jMN05xBLEvxy8bbAVLOwMCALC8vSxoIZmEWUtHY2NhTa/Rm+Fzvl56nhaCeEUOpiIoFc8Tj4+NPHaxDqikWi+73koaW04DK4lysdt56hokOzBdjFTNEdHd3u+/V63XXwiGqU/0IPEt2469zokHQT0miVae1ZbeKPahNxgSQMQEJnM68LFqoCGA/CnpUNM9XRUAa9myIc+IEYK+GNHFWcU8JFQEhbpLxJDT3klBKQV2qreo4YAsDzZSpVgUVxrOSBj6++IZooiYA+/XgSggZnN+IckNR7Qcsfj8oIfPZV2+LNqoCcB9gfMhW+DQ6rxFCmlTvCe9/0D4JCZwPq2FQhiIWrw66XatCAMHH+bCgDUdjy7BXox6nf0ibdQ7shkDfLQXrMLFPhOZeDbgXIfio+dkEs10NVlBj356t8p1Dz5G1C4zvjFzIul5uSJ3CIPeMgwxcGe3YQgbP/77V3x1Ea08idfuGnjRsQoaMCSBjAsiYADImgIwJIGMCyJgAMiaAjAkgYwLImAAyJoCMCSBjAsiYADImgIwJIGMCyDwAI2U0S4wSXQYAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    ),
  },
  {
    href: '/liquidspace',
    title: <>LiquidSpace: flexible office space rental software</>,
    description:
      'LiquidSpace is an online platform and network that connects people with available office spaces for rent.',
    industry: ['Rental'],
    service: ['UI/UX', 'Product Design'],
    company: ['Funding $34.5M'],
    image: ls,
    tags: ['Product Design', 'ui', 'ux', 'Motion Design', 'Web Design'],
    // imageWork: LiquidSpaceWork,
    // imageMobile: LiquidSpaceMobile,
    category: ['other'],
    type: ['desktop'],
    icon: (
      <svg
        className="h-full w-full"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="16" fill="#00293A" />
        <path
          d="M16.5821 35.817H22.2137L19.9056 40.9495C19.906 40.9565 19.906 40.9635 19.9056 40.9705C19.6974 41.4232 19.4011 41.8296 19.0341 42.1656C18.3673 42.7747 17.4994 43.1144 16.5978 43.1191H16.5768C15.6192 43.1088 14.7036 42.7226 14.0262 42.0432C13.3487 41.3637 12.9633 40.445 12.9524 39.4838V39.4654C12.9606 38.5033 13.3441 37.5827 14.0207 36.9011C14.6973 36.2196 15.6131 35.8313 16.5716 35.8196L16.5821 35.817ZM34.0003 19.7315C34.173 19.3427 34.3483 18.9592 34.5236 18.5705C34.699 18.1817 34.8717 17.7983 35.047 17.4095C35.2224 17.0208 35.3951 16.6399 35.5704 16.2512L36.0938 15.0928V15.0718C36.2392 14.748 36.4295 14.4465 36.659 14.1761C36.8876 13.9082 37.1518 13.6731 37.4441 13.4774C37.7356 13.2861 38.0529 13.1375 38.3862 13.0362C38.5541 12.9892 38.7245 12.9515 38.8965 12.9232C39.0701 12.9003 39.2448 12.888 39.4199 12.8864H39.4408C39.9161 12.8859 40.3868 12.9805 40.8252 13.1649C41.2652 13.3464 41.6651 13.6138 42.0015 13.9515C42.338 14.2892 42.6043 14.6905 42.7852 15.1322C42.8719 15.3525 42.9419 15.579 42.9946 15.8099C43.0352 16.0451 43.0588 16.283 43.0652 16.5217V16.5401C43.0661 17.018 42.9718 17.4914 42.7878 17.9322C42.6927 18.1486 42.5816 18.3576 42.4555 18.5574C42.192 18.9566 41.8523 19.2995 41.4558 19.566C41.2566 19.6953 41.0474 19.8086 40.8304 19.9048C40.6107 19.9905 40.3851 20.0599 40.1552 20.1123C39.921 20.1545 39.6839 20.1782 39.4461 20.1833H33.7961L34.0003 19.7288V19.7315ZM39.412 8.71533C39.0382 8.71981 38.665 8.74788 38.2946 8.79938C37.924 8.85671 37.5576 8.9392 37.1981 9.04628C35.7566 9.47856 34.4718 10.3228 33.5004 11.4759C33.0164 12.0447 32.6154 12.6797 32.3097 13.3619C32.3055 13.3737 32.3002 13.3851 32.294 13.396C32.1213 13.7821 31.946 14.1682 31.7706 14.557L31.2473 15.7153C31.0728 16.1006 30.8983 16.4867 30.7239 16.8737L30.2005 18.032C29.876 18.75 29.5532 19.4671 29.2322 20.1833H0.140009C0.0929048 21.5701 0.0571394 22.9579 0.0327148 24.3465H27.3716C26.276 26.7822 25.1813 29.2163 24.0874 31.6485H16.5428C14.4869 31.6596 12.5187 32.4863 11.0676 33.9482C9.61647 35.4101 8.80018 37.3887 8.79676 39.4523V39.5101C8.80366 41.5732 9.62344 43.5498 11.0771 45.0084C12.5308 46.4671 14.5004 47.2892 16.5559 47.2954H16.5978C18.0891 47.2858 19.5465 46.8485 20.7984 46.035C22.0502 45.2215 23.0443 44.0658 23.6634 42.7041C23.6676 42.6931 23.6729 42.6825 23.6791 42.6726L26.7566 35.8275H55.8724C55.9195 34.4372 55.9544 33.0485 55.9771 31.6617H28.6382C29.7338 29.2276 30.8286 26.7936 31.9224 24.3596H39.4696C40.4872 24.3528 41.4937 24.1457 42.432 23.7502C42.8981 23.5468 43.3463 23.3043 43.7718 23.0253C45.0437 22.1667 46.035 20.9506 46.6216 19.5292C47.0107 18.5855 47.2125 17.5746 47.2157 16.5532C47.2144 16.5384 47.2144 16.5234 47.2157 16.5086C47.2136 15.4869 47.0108 14.4756 46.619 13.5326C46.0288 12.1125 45.0345 10.8986 43.7605 10.0427C42.4866 9.18685 40.9895 8.72696 39.4565 8.72058L39.412 8.71533Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    href: '/jucr',
    title: <>JUCR: mobile app for efforthless EV charging</>,
    description:
      'JUCR is a mobile application for fast and convenient access to all charging stations in Europe. ',
    industry: ['Charge App', 'Electric Vehicles', 'Car rental'],
    service: ['Product Design', 'UI/UX'],
    company: ['Funding €32.7M'],
    image: Jucr,
    tags: ['Product Design', 'ui', 'ux'],
    // imageWork: JucrWork,
    // imageMobile: JucrCoverMobile,
    category: ['transportation'],
    type: ['mobile'],
    icon: (
      <svg
        className="h-full w-full"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="16" fill="white" />
        <path
          d="M28.9336 42.9333L21.1826 28H13.0669L21.653 42.9333H28.9336Z"
          fill="#E84360"
        />
        <path
          d="M24.8941 28H31.7336L24.4258 13.0667H16.8003L24.8941 28Z"
          fill="#E84360"
        />
        <path
          d="M23.8185 13.0667L31.9006 28H20.5337L28.6158 42.9333C38.8248 42.9333 45.2527 31.6113 40.29 22.4122L35.2091 13.0667H23.8185Z"
          fill="#122630"
        />
      </svg>
    ),
  },
  {
    href: '/beast',
    title: (
      <>
        Beast: zero-emissions
        <br className="hidden md:block xl:hidden" /> car rental for Tesla
      </>
    ),
    description:
      'Beast is an ambitious carsharing project from Estonia that presents a range of exclusive Tesla models.',
    icon: (
      <svg
        className="h-full w-full"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_11006_3505)">
          <rect
            width="56"
            height="56"
            rx="16"
            fill="url(#paint0_linear_11006_3505)"
          />
          <path
            opacity="0.9"
            d="M38.0723 29.2215C38.8242 30.2108 39.2001 31.4375 39.2001 32.8818C39.2001 34.9394 38.4087 36.5024 36.8061 37.6104C35.2035 38.7183 32.8887 39.2723 29.8418 39.2723H17.7334V15.8667H29.1691C32.0181 15.8667 34.2143 16.4207 35.7377 17.5089C37.2611 18.597 38.0327 20.0809 38.0327 21.9605C38.0327 23.0882 37.7558 24.117 37.2216 25.0074C36.6676 25.8977 35.9158 26.6099 34.9265 27.1046C36.2521 27.52 37.3007 28.2323 38.0723 29.2215ZM23.1149 19.9424V25.4624H28.4964C29.8418 25.4624 30.8508 25.225 31.5433 24.7699C32.2358 24.2951 32.5721 23.6026 32.5721 22.6925C32.5721 21.7824 32.2358 21.0899 31.5433 20.6349C30.8508 20.1798 29.8418 19.9424 28.4964 19.9424H23.1149ZM32.671 34.4844C33.4031 34.0095 33.7592 33.2973 33.7592 32.308C33.7592 30.3691 32.3149 29.3996 29.4461 29.3996H23.1347V35.1768H29.4461C30.8706 35.1966 31.939 34.9592 32.671 34.4844Z"
            fill="white"
          />
          <g filter="url(#filter0_d_11006_3505)">
            <rect x="9" y="11" width="8" height="38" fill="#090821" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_11006_3505"
            x="-3"
            y="-7"
            width="44"
            height="74"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_11006_3505"
            />
            <feOffset dx="6" />
            <feGaussianBlur stdDeviation="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0352941 0 0 0 0 0.0313726 0 0 0 0 0.129412 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11006_3505"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_11006_3505"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_11006_3505"
            x1="56"
            y1="28"
            x2="0"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#08071E" />
            <stop offset="1" stopColor="#08071E" />
          </linearGradient>
          <clipPath id="clip0_11006_3505">
            <rect width="56" height="56" rx="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    // title2: 'Beast: zero-emissions car rental for Tesla',
    industry: ['Car Rent'],
    service: ['UI/UX', 'Branding'],
    company: ['20k app downloads'],
    image: Beast,
    category: ['transportation'],
    type: ['mobile'],
    tags: ['Product Design', 'ui', 'ux', 'Branding'],
  },
  {
    title: <>CryptoGenie: crypto trend prediction platform</>,
    description:
      'CryptoGenie is a brand new tool for predicting the relevant trends of various cryptocurrency assets.',

    href: '/cryptogenie',
    industry: ['AI', 'Blockchain'],
    service: ['Product Design', 'UI/UX'],
    company: [
      `100k predictions
        at start`,
    ],
    tags: ['Product Design', 'ui', 'ux', 'Web Design', 'Branding'],
    image: Crypto,
    category: ['fintech'],
    type: ['desktop'],
    icon: (
      <svg
        className="h-full w-full"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="16" fill="white" />
        <path
          d="M34.712 18.7613C32.6369 17.2536 30.1146 16.4885 27.5516 16.5892C24.9886 16.6899 22.5341 17.6506 20.5836 19.3164C18.6332 20.9823 17.3004 23.2564 16.8 25.7721C16.2996 28.2879 16.6607 30.8989 17.8252 33.1844C18.9897 35.4698 20.8897 37.2967 23.2191 38.3707C25.5485 39.4445 28.1716 39.7028 30.6657 39.104C33.1598 38.5054 35.3799 37.0841 36.9677 35.0697C38.1896 33.5197 38.9827 31.6878 39.2833 29.7568H36.1579C35.8916 30.9933 35.3459 32.161 34.5532 33.1664C33.3929 34.6384 31.7706 35.6769 29.948 36.1145C28.1254 36.5521 26.2085 36.3634 24.5062 35.5785C22.804 34.7937 21.4155 33.4587 20.5645 31.7886C19.7136 30.1184 19.4497 28.2104 19.8154 26.3719C20.181 24.5335 21.155 22.8717 22.5803 21.6543C24.0056 20.437 25.7993 19.7349 27.6723 19.6613C29.5453 19.5877 31.3885 20.1469 32.9049 21.2487L30.8397 24.0913C29.9617 23.4535 28.8946 23.1297 27.8102 23.1723C26.7259 23.2149 25.6875 23.6214 24.8623 24.3262C24.0371 25.031 23.4732 25.9931 23.2615 27.0574C23.0498 28.1218 23.2026 29.2264 23.6952 30.1934C24.1879 31.1603 24.9918 31.9332 25.9773 32.3876C26.9628 32.8419 28.0726 32.9512 29.1278 32.6979C30.183 32.4445 31.1222 31.8433 31.794 30.991C32.0911 30.6141 32.3283 30.1978 32.5005 29.7568H27.9999V26.2431H42.9336C42.9336 26.2431 42.9327 27.3615 42.8292 29.7568C42.7258 32.1521 41.4387 35.0739 39.727 37.2451C37.6504 39.8794 34.7474 41.7376 31.486 42.5206C28.2244 43.3038 24.7942 42.9659 21.7481 41.5616C18.7019 40.1573 16.2173 37.7683 14.6945 34.7795C13.1717 31.7909 12.6995 28.3765 13.3538 25.0866C14.0082 21.7968 15.7511 18.823 18.3017 16.6446C20.8523 14.4661 24.062 13.2099 27.4136 13.0782C30.7653 12.9465 34.0637 13.9471 36.7773 15.9187L34.712 18.7613Z"
          fill="#6237DE"
        />
      </svg>
    ),
  },
  {
    href: '/parking',
    title: 'A-Parking: platform for parking management',
    description:
      'Moving time-consuming parking management routine from paper to the tablet screen.',

    service: ['UI/UX', 'Branding'],
    company: ['Funding 30M'],
    image: Parking,
    category: ['transportation'],
    type: ['desktop'],
    tags: ['Product Design', 'ui', 'ux'],
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="16" fill="white" />
        <path
          d="M16.0804 19.1007L23.9388 32.9685C25.7264 36.1231 30.2714 36.1231 32.059 32.9685L39.9174 19.1007C41.6802 15.9898 39.433 12.1334 35.8573 12.1334L20.1405 12.1334C16.5648 12.1334 14.3175 15.9898 16.0804 19.1007Z"
          fill="url(#paint0_linear_11255_3284)"
        />
        <path
          d="M39.9196 37.8326L32.0612 23.9649C30.2736 20.8103 25.7286 20.8103 23.941 23.9649L16.0826 37.8326C14.3198 40.9436 16.567 44.8 20.1427 44.8H35.8595C39.4352 44.8 41.6825 40.9436 39.9196 37.8326Z"
          fill="url(#paint1_linear_11255_3284)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11255_3284"
            x1="27.9989"
            y1="35.9334"
            x2="27.9989"
            y2="12.1334"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#1D73F7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_11255_3284"
            x1="28.0011"
            y1="21"
            x2="28.0011"
            y2="44.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#1D73F7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    href: '/tilt',
    title: 'Tilt: financial aid opportunities for students',
    description:
      'Tilt helps students find and select colleges that will offer them the best deal, as well as financial aid.',
    industry: ['Education'],
    service: ['UI/UX', 'Product Design'],
    company: [
      `
        72% received
        financial aid
      `,
    ],
    tags: ['Product Design', 'ui', 'ux', 'Web Design', 'Illustration'],
    image: Tilt,
    category: ['other'],
    type: ['desktop'],
    icon: (
      <svg
        className="h-full w-full"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="16" fill="white" />
        <path
          d="M23.3331 42V31.7333L14.9331 26.1333V36.1822L23.3331 42Z"
          fill="#604BE8"
        />
        <path
          d="M32.6666 31.7333V22.4L24.2666 16.8V26.1333L32.6666 31.7333Z"
          fill="#604BE8"
        />
        <path
          d="M23.3331 31.7333H32.6664L24.2664 26.1333H14.9331L23.3331 31.7333Z"
          fill="#91A7FF"
        />
        <path
          d="M32.6666 22.4H41.9999L33.402 16.8H24.2666L32.6666 22.4Z"
          fill="#91A7FF"
        />
      </svg>
    ),
  },
  {
    href: '/fleet',
    title: 'FleetChaser: efficient fleet management platform',
    description:
      'FleetChaser helps companies in the construction industry efficiently automate their work processes.',

    titleMobile: 'FleetChaser - Fleet management platform',
    industry: ['Management', 'Construction'],
    service: ['Product Design', 'User Experience', 'Product Design'],
    company: ['Funding 30M'],
    image: FC,
    category: ['transportation'],
    type: ['desktop'],
    tags: ['Product Design', 'ui', 'ux', 'Web Design'],
    icon: (
      <svg
        className="h-full w-full"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="16" fill="#113345" />
        <path
          d="M28.2629 39.3564C24.986 39.3564 21.9582 38.3074 19.4985 36.534C23.3299 41.4403 28.028 44.8081 28.1546 44.8986V44.9067C28.1546 44.9067 28.1586 44.9026 28.16 44.9026L28.1647 44.9067V44.8986C28.288 44.8108 32.7782 41.5881 36.5568 36.8628C34.1007 38.4942 31.2142 39.3623 28.2629 39.3571V39.3564ZM28.4958 14.0919C30.6732 14.0919 32.699 14.7434 34.3875 15.8592H38.7559C36.175 12.8966 32.4315 11.1967 28.4958 11.2C21.0171 11.2 14.9331 17.2181 14.9331 24.6153C14.9331 26.3934 15.2872 28.0898 15.9257 29.6445L18.0381 26.5358C17.9181 25.9026 17.8573 25.2597 17.8566 24.6153C17.8566 18.8126 22.6298 14.0913 28.4958 14.0913V14.0919Z"
          fill="#1A9DD4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.3803 31.7281C34.3552 33.938 31.477 35.1976 28.4588 35.195C25.7406 35.198 23.124 34.1758 21.1436 32.3375L19.4941 34.743C21.9753 36.8872 25.1615 38.0675 28.4588 38.0639C33.1631 38.067 37.5356 35.6712 40.0223 31.7281H36.3803Z"
          fill="#1A9DD4"
        />
        <path
          d="M22.4685 22.0819H25.9049L27.1567 20.1621H41.0643V19.6909C40.7301 18.8474 40.31 18.0404 39.8105 17.2824H23.6002L24.6653 18.651L22.4685 22.0819ZM21.6744 23.3214L16.7051 31.0785C17.2129 31.9747 17.8225 32.8096 18.5217 33.5669L22.9545 26.6743L21.3347 26.199H24.2919V26.201H34.1914L35.4951 23.3207L21.6744 23.3214Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    href: '/ethos',
    title: 'EthosCE: educational platform for medical professionals',
    description:
      'EthosCE is an educational platform that provides new opportunities for healthcare professionals.',

    industry: ['Education', 'Medicine'],
    service: ['UI/UX', 'Web Design'],
    company: [
      `
        6M Students
        study online
      `,
    ],
    tags: ['Product Design', 'ui', 'ux', 'Web Design'],
    image: Ethos,
    category: ['healthcare'],
    type: ['desktop'],
    icon: (
      <svg
        className="h-full w-full"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="56" rx="16" fill="white" />
        <path
          d="M34.1254 16.3806L25.1003 14.9206C25.0118 14.9206 24.8791 14.8764 24.7906 14.8764C24.7022 14.8764 24.5694 14.8764 24.481 14.8764C24.3925 14.8764 24.2598 14.8764 24.127 14.9206C23.9943 14.9206 23.9058 14.9649 23.7731 14.9649C23.5962 15.0091 23.4192 15.0533 23.2865 15.0976C23.1095 15.1418 22.9768 15.2303 22.7998 15.3188C22.6229 15.4073 22.4901 15.4957 22.3132 15.5842C22.1805 15.6727 22.0035 15.8054 21.8708 15.8939C21.738 16.0266 21.6053 16.1151 21.4284 16.2478C21.2956 16.3806 21.1629 16.5133 21.0302 16.646C20.8975 16.7787 20.809 16.9557 20.6763 17.0884C20.5878 17.2654 20.4551 17.3981 20.3666 17.575L13.7305 30.4491C13.642 30.5818 13.5978 30.7145 13.5535 30.8472C13.5093 30.9799 13.4208 31.1127 13.3766 31.2454C13.3323 31.3781 13.2881 31.5108 13.2439 31.6435C13.1996 31.7763 13.1554 31.909 13.1554 32.0417C13.1111 32.2629 13.1111 32.4841 13.0669 32.6611C13.0669 32.8823 13.0669 33.0592 13.0669 33.2362C13.0669 33.4132 13.1111 33.6344 13.1111 33.8113C13.1554 33.9883 13.1996 34.1653 13.2439 34.3422C13.2881 34.5192 13.3766 34.6961 13.4651 34.8289C13.5535 35.0058 13.642 35.1386 13.7305 35.2713C13.819 35.404 13.9517 35.5367 14.0844 35.6694C14.2171 35.8022 14.3499 35.8906 14.4826 35.9791L15.1904 36.3773L17.0485 32.5726L16.3407 32.2187H16.2965L16.2522 32.1744L16.208 32.1302V32.086L16.1637 32.0417V31.9975V31.9532V31.909C16.1637 31.8648 16.1637 31.8648 16.1637 31.8648V31.8205V31.7763C16.1637 31.732 16.1637 31.732 16.208 31.6878L23.021 18.2829V18.2387L23.0653 18.1944L23.1095 18.1502L23.1537 18.1059L23.198 18.0617L23.2422 18.0175L23.2865 17.9732L23.3307 17.929H23.3749H23.4192H23.4634H23.5077L32.5327 19.8756L34.1254 16.3806ZM42.0002 20.4949C42.0002 20.2737 41.956 20.0525 41.9117 19.8756C41.8675 19.6544 41.779 19.4774 41.6905 19.3004C41.6021 19.1235 41.5136 18.9465 41.3809 18.7695C41.2481 18.5926 41.1154 18.4599 40.9827 18.2829C40.85 18.1502 40.673 18.0175 40.496 17.8847C40.3191 17.752 40.1421 17.6635 39.9652 17.5308C39.7882 17.4423 39.567 17.3538 39.3458 17.2654C39.1246 17.1769 38.9034 17.1326 38.6822 17.0884L37.6647 16.9114L36.072 20.5834L37.0895 20.8046H37.1338H37.178H37.2222L37.2665 20.8489L37.3107 20.8931L37.355 20.9373L37.3992 20.9816V21.0258V21.0701V21.1143C37.3992 21.1143 37.3992 21.1585 37.3992 21.2028C37.3992 21.247 37.3992 21.247 37.355 21.2913L30.2322 38.3681C30.2322 38.3681 30.2322 38.4124 30.188 38.4124L30.1438 38.4566L30.0995 38.5008L30.0553 38.5451L30.011 38.5893C30.011 38.5893 29.9668 38.6336 29.9226 38.6336C29.8783 38.6336 29.8783 38.6778 29.8341 38.6778C29.7898 38.6778 29.7898 38.6778 29.7456 38.6778C29.7013 38.6778 29.7013 38.6778 29.6571 38.6778C29.6129 38.6778 29.6129 38.6778 29.5686 38.6778C29.5244 38.6778 29.5244 38.6778 29.4801 38.6778C29.4359 38.6778 29.4359 38.6778 29.3917 38.6336L28.3741 38.1469L26.3833 42.7922L27.4008 43.3673C27.5336 43.4558 27.7105 43.5443 27.8875 43.5885C28.0644 43.677 28.1972 43.7212 28.3741 43.7655C28.5511 43.8097 28.7281 43.8539 28.8608 43.8982C29.0377 43.9424 29.2147 43.9424 29.3917 43.9424C29.6571 43.9424 29.9226 43.9424 30.1438 43.9424C30.4092 43.8982 30.6746 43.8539 30.8958 43.8097C31.1613 43.7212 31.3825 43.6327 31.6479 43.5443C31.8691 43.4115 32.1346 43.2788 32.3558 43.1461C32.577 43.0134 32.7982 42.8364 33.0194 42.6152C33.2406 42.4382 33.4176 42.217 33.5945 41.9958C33.7715 41.7746 33.9484 41.5092 34.0812 41.2438C34.2139 40.9783 34.3466 40.7129 34.4793 40.4474L41.6021 22.3088C41.6463 22.1318 41.7348 21.9991 41.779 21.8221C41.8233 21.6452 41.8675 21.5125 41.8675 21.3355C41.9117 21.1585 41.9117 21.0258 41.9117 20.8931C42.0002 20.8046 42.0002 20.6276 42.0002 20.4949Z"
          fill="#003192"
        />
        <path
          d="M23.9963 25.0074L21.2976 24.1225L17.0505 32.5725L15.1924 36.3329L17.7583 37.8371L19.7049 33.8555L23.9963 25.0074Z"
          fill="#52A800"
        />
        <path
          d="M30.5433 21.2025L27.4464 20.4504L20.8104 34.4304L18.8638 38.4563L21.8279 40.1817L23.8187 35.8904L30.5433 21.2025Z"
          fill="#52A800"
        />
        <path
          d="M37.8395 12.1333L33.5924 14.5223L34.8754 14.6993L23.1074 40.8897L26.5139 42.8363L28.5048 38.191L36.0257 20.5833L37.6183 16.9113L38.3262 15.1859L39.8746 15.4071L37.8395 12.1333Z"
          fill="#52A800"
        />
      </svg>
    ),
  },
  {
    href: '/echo',
    title: (
      <>
        Echo - <br />
        AI Meeting Assistant
      </>
    ),
    description:
      'Echo Assistant is an AI tool that records meetings and offers insights, simplifying your workflow.',
    industry: ['AI'],
    service: ['Product Design', 'UI', 'UX', 'AI'],
    company: ['Funding $34.5M'],
    echo: true,
    image: EchoDark,
    imageWork: EchoWhite,
    // imageMobile: LiquidSpaceMobile,
    category: ['other'],
    type: ['desktop'],
    tags: ['Product Design', 'UI', 'UX', 'AI'],
    icon: (
      <svg className="h-full w-full" viewBox="0 0 56 56" fill="none">
        <rect width="56" height="56" rx="16" fill="#BBA7F4" />
        <circle cx="24" cy="30" r="12" fill="white" fillOpacity="0.32" />
        <circle
          cx="12"
          cy="12"
          r="12"
          transform="matrix(-1 0 0 1 44 14)"
          fill="white"
          fillOpacity="0.56"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 38C25.3726 38 20 32.6274 20 26C20 22.9456 21.1412 20.1577 23.0205 18.0394C23.3435 18.0133 23.6702 18 24 18C30.6274 18 36 23.3726 36 30C36 33.0544 34.8588 35.8423 32.9795 37.9606C32.6565 37.9867 32.3298 38 32 38Z"
          fill="white"
          fillOpacity="0.56"
        />
      </svg>
    ),
  },
  {
    href: '/work',
    title: <>We have lots of amazing projects for you</>,
    lastSlide: true,
    image: '',
    // type: ['mobile'],
  },
];

export default cases;
