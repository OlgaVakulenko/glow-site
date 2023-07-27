import React, { useRef } from 'react';
import cx from 'clsx';
import { useHeaderTheme } from '../../../Header';
import LegacyCaseContainer from '../LegacyCaseContainer';
import styles from './styles.module.scss';
import NextStudy from '../NextStudy';
import Head from 'next/head';
import { getFullDescription, getFullTitle } from '../../../HeadTitle';

function Intro() {
  const ref = useRef();
  useHeaderTheme({ ref, theme: 'dark' });

  return (
    <section ref={ref} className="section welcome cg-welcome">
      <Head>
        <title>
          {getFullTitle(
            'CryptoGenie is a tool for predicting the relevant trends of various crypto assets'
          )}
        </title>
        <meta
          name="description"
          content={getFullDescription(
            'CryptoGenie is a tool for predicting the relevant trends of various crypto assets'
          )}
        />
      </Head>
      <div>
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__left">
              <h1 className="title-big wow fadeInUp" data-wow-duration="1.2s">
                CryptoGenie is a tool for&nbsp;predicting
                <br /> the&nbsp;relevant trends <br />
                of&nbsp;various crypto assets
              </h1>
              <h2
                className="welcome__scroll wow fadeInUp"
                data-wow-duration="1.2s"
              >
                <span>
                  <svg
                    viewBox="0 0 18 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M-6.56721e-07 15.024L1.89768 13.1313L7.43164 18.6508L7.43164 3.24847e-07L10.568 4.6194e-07L10.568 18.6512L16.1023 13.1313L18 15.024L9 24.0004L-6.56721e-07 15.024Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Start scrolling
                <span className="cg-height-container">21,595 px</span>
              </h2>
            </div>
            <div className="cg-welcome-bg1-wrapper">
              <div className="cg-welcome-bg1 wow fadeInUp">
                <svg
                  viewBox="0 0 397 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6176 241.492L0.109331 260.874L38.8741 299.891L58.3824 280.508L19.6176 241.492ZM189.037 111.931L208.981 92.9981L189.612 72.5942L169.654 92.423L189.037 111.931ZM237.264 162.735L217.32 181.668L236.972 202.37L256.927 181.96L237.264 162.735ZM369 28H396.5V0.5H369V28ZM303.132 0.5H275.632V55.5H303.132V0.5ZM341.5 95.3674V122.867H396.5V95.3674H341.5ZM58.3824 280.508L208.419 131.44L169.654 92.423L19.6176 241.492L58.3824 280.508ZM169.092 130.865L217.32 181.668L257.209 143.802L208.981 92.9981L169.092 130.865ZM256.927 181.96L388.663 47.2254L349.337 8.77465L217.601 143.509L256.927 181.96ZM369 0.5H303.132V55.5H369V0.5ZM341.5 28V95.3674H396.5V28H341.5Z"
                    fill="url(#paint0_linear_334_9091)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_334_9091"
                      x1="289.856"
                      y1={28}
                      x2="203.572"
                      y2="260.841"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#51D9B8" />
                      <stop offset={1} stopColor="#51D9B8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="cg-welcome-x wow fadeInUp" data-wow-duration="1.2s">
              <picture>
                <source
                  srcSet="/img/cg/front-w400.webp, /img/cg/front-w800.webp 2x"
                  media="(max-width: 767.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/front-w400.png, /img/cg/front-w800.png 2x"
                  media="(max-width: 767.5px)"
                />
                <source
                  srcSet="/img/cg/front-w1140.webp, /img/cg/front-w2280.webp 2x"
                  media="(min-width: 768.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/front-w1140.png, /img/cg/front-w2280.png 2x"
                  media="(min-width: 768.5px)"
                />
                <img className="" src="/img/cg/front-w1440.png" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cryptogenie() {
  return (
    <LegacyCaseContainer>
      <div className={styles.cryptogenie}>
        <main className={cx('cg-main cg-main cryptogenie')}>
          {/* Start window*/}
          <Intro />
          {/* Client info*/}
          <section className="section case-section client-info">
            <div className="container">
              <div
                className="client-info__content wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-delay="0.1s"
              >
                <div>
                  <h3>Client</h3>
                  <ul>
                    <li>CryptoGenie</li>
                    <li>UAE</li>
                  </ul>
                </div>
                <div>
                  <h3>Industry</h3>
                  <ul>
                    <li>Artificial Intelligence</li>
                    <li>Blockchain</li>
                  </ul>
                </div>
                <div>
                  <h3>Services</h3>
                  <ul>
                    <li>Product Design</li>
                    <li>User Experience</li>
                    <li>User Interface</li>
                  </ul>
                </div>
                <div>
                  <h3>Starring</h3>
                  <ul>
                    <li>Artem Kovalenko</li>
                    <li>Dmitry Zelenko</li>
                    <li>Olga Levchenko</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Challenge*/}
          <section
            id="challenge-section"
            className="section case-section challenge"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    CryptoGenie
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    CryptoGenie is&nbsp;a&nbsp;brand new trend-predicting tool
                    for cryptocurrency. Our team’s goal was to&nbsp;create the
                    whole design from scratch, having only the idea and
                    inspiration. So, we’ve conducted a&nbsp;research
                    to&nbsp;discover industry tendencies and base our design
                    on&nbsp;them.
                  </p>
                </div>
              </div>
              <div className="challenge-wrapper wow fadeInUp">
                <div className="case-section__image">
                  <picture>
                    <source
                      srcSet="/img/cg/crypto-genie-mobile-w400.webp, /img/cg/crypto-genie-mobile-w800.webp 2x"
                      media="(max-width: 767.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/crypto-genie-mobile-w400.png, /img/cg/crypto-genie-mobile-w800.png 2x"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/cg/crypto-genie-w1140.webp, /img/cg/crypto-genie-w2280.webp 2x"
                      media="(min-width: 768.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/crypto-genie-w1140.png, /img/cg/crypto-genie-w2280.png 2x"
                      media="(min-width: 768.5px)"
                    />
                    <img
                      className="case-section__image wow fadeInUp"
                      src="/img/cg/crypto-genie-w1440.png"
                      data-wow-duration="0.7s"
                      data-wow-delay="0.2s"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <section
            id="landing-page-section"
            className="section case-section challenge"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Landing Page
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    CryptoGenie’s landing page contains all the relevant info
                    on&nbsp;how the product actually works. A&nbsp;number
                    of&nbsp;highlighted features make it&nbsp;unique among
                    competitors.
                  </p>
                </div>
              </div>
              <div className="challenge-wrapper wow fadeInUp">
                <div className="case-section__image">
                  <picture>
                    <source
                      srcSet="/img/cg/landing-page-mobile-w400.webp, /img/cg/landing-page-mobile-w800.webp 2x"
                      media="(max-width: 767.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/landing-page-mobile-w400.png, /img/cg/landing-page-mobile-w800.png 2x"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/cg/landing-page-w1140.webp, /img/cg/landing-page-w2280.webp 2x"
                      media="(min-width: 768.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/landing-page-w1140.png, /img/cg/landing-page-w2280.png 2x"
                      media="(min-width: 768.5px)"
                    />
                    <img
                      className="case-section__image wow fadeInUp"
                      src="/img/cg/landing-page-w1440.png"
                      data-wow-duration="0.7s"
                      data-wow-delay="0.2s"
                    />
                  </picture>
                </div>
                <div className="case-section__image inline-header inline-header-midle">
                  <div className="inline-header__item inline-header__left" />
                  <div className="inline-header__item inline-header__right">
                    <p
                      className="text wow fadeInUp"
                      data-wow-duration="1.2s"
                      data-wow-delay="0.2s"
                    >
                      Given that a&nbsp;big number of&nbsp;users prefer browsing
                      via smartphone, we&nbsp;also designed a&nbsp;mobile
                      version for all of&nbsp;the functional screens.
                    </p>
                  </div>
                </div>
                <div className="case-section__image">
                  <picture>
                    <source
                      srcSet="/img/cg/landing-page2-mobile-w400.webp, /img/cg/landing-page2-mobile-w800.webp 2x"
                      media="(max-width: 767.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/landing-page2-mobile-w400.png, /img/cg/landing-page-mobile-w800.png 2x"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/cg/landing-page2-w1140.webp, /img/cg/landing-page2-w2280.webp 2x"
                      media="(min-width: 768.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/landing-page2-w1140.png, /img/cg/landing-page2-w2280.png 2x"
                      media="(min-width: 768.5px)"
                    />
                    <img
                      className="case-section__image wow fadeInUp"
                      src="/img/cg/landing-page2-w1440.png"
                      data-wow-duration="0.7s"
                      data-wow-delay="0.2s"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <section
            id="platform-section"
            className="section case-section challenge"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Platform
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    The platform itself contains a&nbsp;number of&nbsp;cards,
                    one per each crypto asset. They show the direction the price
                    of&nbsp;the asset is&nbsp;going.
                  </p>
                  <br />
                  <br />
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Each asset also has a&nbsp;full page with a&nbsp;number
                    of&nbsp;metrics based on&nbsp;the available info.
                  </p>
                </div>
              </div>
              <div className="challenge-wrapper wow fadeInUp">
                <div className="case-section__image">
                  <picture>
                    <source
                      srcSet="/img/cg/platform-mobile-w400.webp, /img/cg/platform-mobile-w800.webp 2x"
                      media="(max-width: 767.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/platform-mobile-w400.png, /img/cg/platform-mobile-w800.png 2x"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/cg/platform-w1140.webp, /img/cg/platform-w2280.webp 2x"
                      media="(min-width: 768.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/platform-w1140.png, /img/cg/platform-w2280.png 2x"
                      media="(min-width: 768.5px)"
                    />
                    <img
                      className="case-section__image wow fadeInUp"
                      src="/img/cg/platform-w1440.png"
                      data-wow-duration="0.7s"
                      data-wow-delay="0.2s"
                    />
                  </picture>
                </div>
                <div className="case-section__image">
                  <picture>
                    <source
                      srcSet="/img/cg/platform2-mobile-w400.webp, /img/cg/platform2-mobile-w800.webp 2x"
                      media="(max-width: 767.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/platform2-mobile-w400.png, /img/cg/platform2-mobile-w800.png 2x"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/cg/platform2-w1140.webp, /img/cg/platform2-w2280.webp 2x"
                      media="(min-width: 768.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/cg/platform2-w1140.png, /img/cg/platform2-w2280.png 2x"
                      media="(min-width: 768.5px)"
                    />
                    <img
                      className="case-section__image wow fadeInUp"
                      src="/img/cg/platform2-w1440.png"
                      data-wow-duration="0.7s"
                      data-wow-delay="0.2s"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          {/* Charts & Stats */}
          <section
            id="typography-section"
            className="section case-section typography"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Charts &amp; Stats
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Per client’s request, we&nbsp;also developed layouts
                    representing various kinds of&nbsp;product metrics.
                  </p>
                  <br />
                  <br />
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Depending on&nbsp;the information type, there are different
                    kinds of&nbsp;charts and diagrams as&nbsp;shown below.
                  </p>
                </div>
              </div>
              <picture>
                <source
                  srcSet="/img/cg/charts-mobile-w400.webp, /img/cg/charts-mobile-w800.webp 2x"
                  media="(max-width: 767.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/charts-mobile-w400.png, /img/cg/charts-mobile-w800.png 2x"
                  media="(max-width: 767.5px)"
                />
                <source
                  srcSet="/img/cg/charts-w1140.webp, /img/cg/charts-w2280.webp 2x"
                  media="(min-width: 768.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/charts-w1140.png, /img/cg/charts-w2280.png 2x"
                  media="(min-width: 768.5px)"
                />
                <img
                  className="case-section__image wow fadeInUp"
                  src="/img/cg/charts-w1440.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </picture>
            </div>
          </section>
          {/* research */}
          <section id="research-section" className="section research">
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    One AI to rule them all
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    The logo represents a&nbsp;combination of&nbsp;C and&nbsp;G
                    from CryptoGenie. It&nbsp;shows the unity between
                    the&nbsp;AI and the user in&nbsp;a&nbsp;form
                    of&nbsp;a&nbsp;Genie. The Genie is&nbsp;the one doing the
                    predictions and showing you the relevant charts.
                  </p>
                  <br />
                  <br />
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    The logo is&nbsp;built using 2&nbsp;circles,
                    a&nbsp;54&nbsp;corner, and a&nbsp;horizontal line. All
                    of&nbsp;these elements form identity patterns.
                  </p>
                </div>
              </div>
              <div className="research-media wow fadeInUp">
                <div className="case-section__image">
                  <div className="cg-one-ai-bg">
                    <svg
                      width={300}
                      height={300}
                      viewBox="0 0 300 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M183.191 104.336C172.482 96.556 159.466 92.6076 146.24 93.1272C133.014 93.6469 120.348 98.6043 110.283 107.201C100.217 115.797 93.3397 127.532 90.7574 140.514C88.1751 153.496 90.0387 166.97 96.0479 178.763C102.057 190.557 111.862 199.984 123.883 205.526C135.903 211.067 149.439 212.401 162.31 209.311C175.181 206.221 186.637 198.887 194.831 188.493C203.026 178.098 207.482 165.247 207.482 152.01H153.643"
                        stroke="#AE91FF"
                        strokeWidth={8}
                      />
                      <path
                        d="M216.865 56.6109C195.496 41.0859 169.523 33.2071 143.131 34.244C116.739 35.281 91.4639 45.1733 71.3795 62.3271C51.2951 79.4808 37.5707 102.897 32.4178 128.802C27.2649 154.707 30.9837 181.593 42.9748 205.127C54.966 228.661 74.5311 247.472 98.5177 258.53C122.504 269.588 149.515 272.249 175.198 266.083C200.881 259.917 223.74 245.284 240.092 224.541C256.444 203.799 265.337 178.155 265.337 151.743V148.26"
                        stroke="#AE91FF"
                        strokeWidth={8}
                      />
                      <path
                        d="M144.55 50.5354L144.599 51.7844L144.55 50.5354ZM208.063 69.8662L207.326 70.8763L208.34 71.6149L209.075 70.5993L208.063 69.8662ZM82.7438 74.8064L83.5572 75.7556L82.7438 74.8064ZM49.1828 132.258L47.9566 132.015V132.015L49.1828 132.258ZM106.12 244.377L106.645 243.242L106.12 244.377ZM228.071 215.001L229.054 215.774H229.054L228.071 215.001ZM248.61 167.719L249.845 167.911L250.069 166.469H248.61V167.719ZM220.887 167.719V166.469H219.877L219.665 167.457L220.887 167.719ZM206.655 198.062L207.638 198.835L206.655 198.062ZM165.806 224.299L166.098 225.514L165.806 224.299ZM117.537 219.529L118.062 218.394L117.537 219.529ZM75.9291 137.596L74.703 137.353L75.9291 137.596ZM100.454 95.6121L99.6411 94.6629L100.454 95.6121ZM145.62 77.8756L145.669 79.1246L145.62 77.8756ZM192.034 92.0019L193.046 92.735L193.777 91.7258L192.77 90.9918L192.034 92.0019ZM173.715 117.3L172.978 118.31L173.992 119.049L174.727 118.033L173.715 117.3ZM146.844 109.121L146.893 110.37L146.844 109.121ZM120.695 119.39L121.509 120.339L120.695 119.39ZM106.496 143.696L105.27 143.453L106.496 143.696ZM130.585 191.131L130.06 192.266L130.585 191.131ZM158.53 193.893L158.237 192.678L158.53 193.893ZM182.18 178.703L183.163 179.476L182.18 178.703ZM188.446 167.719L189.611 168.173L190.273 166.469H188.446V167.719ZM148.526 167.719H147.276V168.969H148.526V167.719ZM148.526 136.449V135.199H147.276V136.449H148.526ZM280.988 136.449L282.238 136.45L282.239 135.199H280.988V136.449ZM252.546 234.361L253.529 235.133L252.546 234.361ZM93.0723 272.774L92.5476 273.909L93.0723 272.774ZM30.5073 212.419L29.3928 212.985L30.5073 212.419ZM18.6156 126.158L17.3894 125.914L18.6156 126.158ZM62.5031 51.0285L61.6897 50.0793L62.5031 51.0285ZM143.326 19.2895L143.277 18.0405L143.326 19.2895ZM226.382 44.5682L227.394 45.3013L228.125 44.2921L227.118 43.5581L226.382 44.5682ZM144.599 51.7844C167.051 50.8993 189.147 57.6243 207.326 70.8763L208.799 68.8561C190.165 55.2728 167.516 48.3791 144.5 49.2864L144.599 51.7844ZM83.5572 75.7556C100.644 61.1132 122.146 52.6695 144.599 51.7844L144.5 49.2864C121.485 50.1937 99.4442 58.8491 81.9305 73.8572L83.5572 75.7556ZM50.4089 132.501C54.7931 110.387 66.47 90.398 83.5572 75.7556L81.9305 73.8572C64.4167 88.8652 52.4497 109.352 47.9566 132.015L50.4089 132.501ZM59.391 197.656C49.1888 177.567 46.0247 154.616 50.4089 132.501L47.9566 132.015C43.4636 154.678 46.7061 178.199 57.1619 198.788L59.391 197.656ZM106.645 243.242C86.2388 233.804 69.5931 217.746 59.391 197.656L57.1619 198.788C67.6178 219.378 84.6784 235.836 105.596 245.511L106.645 243.242ZM171.879 249.689C150.03 254.952 127.051 252.681 106.645 243.242L105.596 245.511C126.513 255.186 150.068 257.514 172.465 252.119L171.879 249.689ZM227.088 214.229C213.176 231.935 193.728 244.426 171.879 249.689L172.465 252.119C194.861 246.724 214.795 233.921 229.054 215.774L227.088 214.229ZM247.375 167.528C244.741 184.501 237.793 200.604 227.088 214.229L229.054 215.774C240.026 201.809 247.146 185.306 249.845 167.911L247.375 167.528ZM248.61 166.469H220.887V168.969H248.61V166.469ZM207.638 198.835C214.786 189.736 219.707 179.17 222.109 167.982L219.665 167.457C217.342 178.277 212.584 188.493 205.672 197.29L207.638 198.835ZM166.098 225.514C182.539 221.554 197.171 212.156 207.638 198.835L205.672 197.29C195.552 210.17 181.406 219.255 165.513 223.084L166.098 225.514ZM117.013 220.663C132.367 227.766 149.658 229.474 166.098 225.514L165.513 223.084C149.62 226.912 132.905 225.26 118.062 218.394L117.013 220.663ZM81.4599 186.367C89.1349 201.48 101.658 213.561 117.013 220.663L118.062 218.394C103.219 211.529 91.1102 199.848 83.689 185.235L81.4599 186.367ZM74.703 137.353C71.405 153.988 73.785 171.254 81.4599 186.367L83.689 185.235C76.2677 170.621 73.966 153.926 77.1552 137.839L74.703 137.353ZM99.6411 94.6629C86.7852 105.679 78.001 120.717 74.703 137.353L77.1552 137.839C80.3444 121.752 88.8385 107.212 101.268 96.5612L99.6411 94.6629ZM145.571 76.6265C128.676 77.2925 112.497 83.6462 99.6411 94.6629L101.268 96.5612C113.697 85.9102 129.338 79.7684 145.669 79.1246L145.571 76.6265ZM192.77 90.9918C179.092 81.021 162.466 75.9605 145.571 76.6265L145.669 79.1246C162.001 78.4808 178.074 83.3724 191.297 93.012L192.77 90.9918ZM174.727 118.033L193.046 92.735L191.021 91.2688L172.702 116.567L174.727 118.033ZM146.893 110.37C156.23 110.002 165.418 112.799 172.978 118.31L174.451 116.29C166.437 110.447 156.694 107.482 146.795 107.872L146.893 110.37ZM121.509 120.339C128.615 114.25 137.556 110.739 146.893 110.37L146.795 107.872C136.895 108.263 127.415 111.986 119.882 118.441L121.509 120.339ZM107.722 143.939C109.546 134.742 114.402 126.429 121.509 120.339L119.882 118.441C112.349 124.896 107.202 133.707 105.27 143.453L107.722 143.939ZM111.458 171.038C107.215 162.683 105.899 153.137 107.722 143.939L105.27 143.453C103.338 153.2 104.732 163.316 109.229 172.17L111.458 171.038ZM131.11 189.997C122.624 186.072 115.701 179.394 111.458 171.038L109.229 172.17C113.726 181.025 121.064 188.104 130.06 192.266L131.11 189.997ZM158.237 192.678C149.152 194.866 139.596 193.922 131.11 189.997L130.06 192.266C139.057 196.427 149.189 197.429 158.823 195.108L158.237 192.678ZM181.197 177.931C175.411 185.295 167.323 190.489 158.237 192.678L158.823 195.108C168.456 192.787 177.03 187.281 183.163 179.476L181.197 177.931ZM187.281 167.266C185.798 171.077 183.756 174.674 181.197 177.931L183.163 179.476C185.875 176.024 188.04 172.211 189.611 168.173L187.281 167.266ZM188.446 166.469H148.526V168.969H188.446V166.469ZM149.776 167.719V136.449H147.276V167.719H149.776ZM148.526 137.699H280.988V135.199H148.526V137.699ZM253.529 235.133C268.822 215.669 280.379 189.422 281.311 167.773L278.813 167.666C277.91 188.65 266.633 214.408 251.563 233.588L253.529 235.133ZM179.74 282.525C208.944 275.491 234.936 258.796 253.529 235.133L251.563 233.588C233.317 256.81 207.811 273.192 179.155 280.095L179.74 282.525ZM92.5476 273.909C119.822 286.525 150.536 289.56 179.74 282.525L179.155 280.095C150.499 286.997 120.361 284.019 93.5971 271.64L92.5476 273.909ZM29.3928 212.985C43.0268 239.832 65.273 261.293 92.5476 273.909L93.5971 271.64C66.8334 259.261 45.0021 238.201 31.6218 211.853L29.3928 212.985ZM17.3894 125.914C11.5307 155.467 15.7588 186.137 29.3928 212.985L31.6218 211.853C18.2415 185.505 14.0918 155.404 19.8417 126.401L17.3894 125.914ZM61.6897 50.0793C38.8528 69.649 23.2482 96.3623 17.3894 125.914L19.8417 126.401C25.5916 97.3974 40.9061 71.1818 63.3165 51.9777L61.6897 50.0793ZM143.277 18.0405C113.266 19.2236 84.5267 30.5096 61.6897 50.0793L63.3165 51.9777C85.7267 32.7737 113.928 21.6994 143.375 20.5386L143.277 18.0405ZM227.118 43.5581C202.821 25.8463 173.288 16.8574 143.277 18.0405L143.375 20.5386C172.823 19.3777 201.803 28.1978 225.645 45.5783L227.118 43.5581ZM209.075 70.5993L227.394 45.3013L225.369 43.8351L207.05 69.133L209.075 70.5993ZM280.988 136.449C279.738 136.449 279.738 136.449 279.738 136.449C279.738 136.449 279.738 136.449 279.738 136.449C279.738 136.449 279.738 136.449 279.738 136.45C279.738 136.451 279.738 136.453 279.738 136.455C279.738 136.46 279.738 136.467 279.738 136.476C279.738 136.495 279.737 136.524 279.737 136.562C279.737 136.639 279.737 136.755 279.736 136.911C279.734 137.222 279.73 137.692 279.722 138.323C279.707 139.585 279.678 141.49 279.62 144.062C279.503 149.206 279.272 157.015 278.813 167.666L281.311 167.773C281.771 157.107 282.002 149.281 282.119 144.119C282.177 141.538 282.207 139.623 282.222 138.353C282.23 137.717 282.233 137.243 282.236 136.927C282.237 136.769 282.237 136.65 282.237 136.571C282.237 136.531 282.238 136.501 282.238 136.481C282.238 136.471 282.238 136.464 282.238 136.459C282.238 136.456 282.238 136.454 282.238 136.453C282.238 136.452 282.238 136.451 282.238 136.451C282.238 136.451 282.238 136.451 282.238 136.451C282.238 136.45 282.238 136.45 280.988 136.449Z"
                        fill="black"
                      />
                      <circle
                        cx="226.366"
                        cy="44.0133"
                        r="2.19058"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="208.112"
                        cy="69.5702"
                        rx="2.19057"
                        ry="2.19058"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="191.995"
                        cy="92.0583"
                        rx="2.19058"
                        ry="2.19058"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="173.778"
                        cy="117.237"
                        rx="2.19057"
                        ry="2.19056"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19058"
                        transform="matrix(0.818285 -0.574812 0.574815 0.818283 147.241 18.5875)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19058"
                        transform="matrix(0.818286 -0.574811 0.574817 0.818282 146.993 49.9938)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19059"
                        transform="matrix(0.818284 -0.574813 0.574814 0.818284 147.241 77.7338)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19059"
                        transform="matrix(0.818283 -0.574815 0.574813 0.818285 146.993 109.14)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19058"
                        transform="matrix(0.818285 -0.574813 0.574815 0.818283 148.39 136.312)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19058"
                        transform="matrix(0.818286 -0.574812 0.574816 0.818283 148.39 167.384)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="62.4462"
                        cy="50.2685"
                        rx="2.19059"
                        ry="2.19058"
                        transform="rotate(-75.3738 62.4462 50.2685)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="82.6532"
                        cy="74.8618"
                        rx="2.19058"
                        ry="2.19058"
                        transform="rotate(-75.3738 82.6532 74.8618)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="100.753"
                        cy="95.6096"
                        rx="2.19058"
                        ry="2.19058"
                        transform="rotate(-75.3738 100.753 95.6096)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19058"
                        transform="matrix(0.252513 -0.967594 0.967594 0.252511 120.872 119.726)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19057"
                        ry="2.19058"
                        transform="matrix(-0.401515 -0.915852 0.915855 -0.401509 18.9587 125.069)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.1906"
                        ry="2.19059"
                        transform="matrix(-0.40151 -0.915855 0.915853 -0.401514 49.6912 131.526)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19058"
                        transform="matrix(-0.401511 -0.915854 0.915853 -0.401513 75.1814 137.482)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="106.439"
                        cy="144.182"
                        rx="2.19057"
                        ry="2.19057"
                        transform="rotate(-113.673 106.439 144.182)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19056"
                        transform="matrix(-0.882939 -0.469487 0.469499 -0.882933 30.7291 212.348)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19057"
                        transform="matrix(-0.882938 -0.46949 0.469496 -0.882934 58.8463 198.353)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19059"
                        transform="matrix(-0.897415 -0.441187 0.441181 -0.897418 82.8014 185.774)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19059"
                        transform="matrix(-0.897416 -0.441186 0.441182 -0.897418 110.458 170.893)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19054"
                        transform="matrix(-0.984412 0.17588 -0.175886 -0.984411 93.2044 272.807)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19057"
                        ry="2.19059"
                        transform="matrix(-0.984411 0.175885 -0.175881 -0.984411 106.679 244.438)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19063"
                        transform="matrix(-0.984411 0.175887 -0.175879 -0.984412 116.572 218.773)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="130.048"
                        cy="190.403"
                        r="2.19058"
                        transform="rotate(169.87 130.048 190.403)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19058"
                        transform="matrix(-0.660154 0.75113 -0.751124 -0.660161 179.287 281.413)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19059"
                        transform="matrix(-0.66016 0.751126 -0.751129 -0.660156 172.143 250.829)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="166.143"
                        cy="224.458"
                        rx="2.19058"
                        ry="2.19058"
                        transform="rotate(131.312 166.143 224.458)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="158.998"
                        cy="193.874"
                        r="2.19058"
                        transform="rotate(131.312 158.998 193.874)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="252.723"
                        cy="234.386"
                        rx="2.1906"
                        ry="2.19061"
                        transform="rotate(92.6311 252.723 234.386)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.1906"
                        ry="2.19057"
                        transform="matrix(-0.0459048 0.998946 -0.998946 -0.0459063 228.033 214.977)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19058"
                        ry="2.19057"
                        transform="matrix(0.5774 0.816461 -0.816454 0.57741 280.179 167.921)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19059"
                        transform="matrix(0.577403 0.816459 -0.816457 0.577407 281.263 136.88)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.19059"
                        ry="2.19059"
                        transform="matrix(0.577404 0.816459 -0.816457 0.577406 248.57 167.921)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        rx="2.1906"
                        ry="2.1906"
                        transform="matrix(0.577404 0.816459 -0.816457 0.577406 221.396 167.85)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="188.57"
                        cy="167.385"
                        rx="2.19059"
                        ry="2.19059"
                        transform="rotate(54.7318 188.57 167.385)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="207.463"
                        cy="197.598"
                        rx="2.19059"
                        ry="2.19058"
                        transform="rotate(93.6045 207.463 197.598)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <ellipse
                        cx="183.106"
                        cy="177.772"
                        rx="2.19059"
                        ry="2.19059"
                        transform="rotate(93.6046 183.106 177.772)"
                        fill="black"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Check this out */}
          <section
            id="hifi-section"
            className="section case-section hifi-frame"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Isn&apos;t it nice?
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Below is&nbsp;the full size logo with according proportions.
                    X&nbsp;is the distance between the logo itself and the
                    company name next to&nbsp;it. Also X&nbsp;equals the safe
                    distance around the logo.
                  </p>
                  <br />
                  <br />
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    The two-color logo is&nbsp;only used on&nbsp;White and White
                    Smoke background.
                  </p>
                </div>
              </div>
              <div className="wow fadeInUp">
                <div className="cg-check-this-bg case-section__image">
                  <svg
                    width={400}
                    height={91}
                    viewBox="0 0 400 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M104.848 25.0018C99.651 25.0018 95.4283 26.6221 92.1336 29.8164C88.839 33.0106 87.2148 37.3159 87.2148 42.8248C87.2148 48.2874 88.839 52.639 92.1336 55.8333C95.4283 59.0275 99.6974 60.6478 104.895 60.6478C109.164 60.6478 112.83 59.4905 115.846 57.1295C118.862 54.7685 120.718 51.6206 121.368 47.593L113.851 46.9449C112.922 51.7132 109.489 54.3056 104.663 54.3056C101.693 54.3056 99.2334 53.2871 97.3308 51.2965C95.4283 49.3059 94.5002 46.482 94.5002 42.8248C94.5002 39.3528 95.4283 36.5752 97.238 34.492C99.0942 32.4088 101.554 31.344 104.616 31.344C109.442 31.344 112.876 34.0291 113.851 38.8436L121.322 38.1955C120.718 34.1679 118.862 30.9274 115.799 28.5664C112.783 26.2055 109.117 25.0018 104.848 25.0018Z"
                      fill="black"
                    />
                    <path
                      d="M139.752 35.9734C136.643 35.9734 134.415 36.9456 133.162 38.9362V36.2049H126.62V60.1386H133.394V48.0097C133.394 44.6766 135.854 42.5008 139.752 42.5008V35.9734Z"
                      fill="black"
                    />
                    <path
                      d="M167.217 36.2049H159.7L154.224 50.4632L148.702 36.2049H141.231L150.605 58.0091L144.479 71.9434H151.858L167.217 36.2049Z"
                      fill="black"
                    />
                    <path
                      d="M184.351 35.7419C181.103 35.7419 178.737 36.7141 177.252 38.7047V36.2049H170.848V71.9434H177.623V58.1017C179.154 59.8145 181.428 60.6478 184.351 60.6478C187.785 60.6478 190.57 59.4905 192.704 57.2221C194.885 54.9537 195.952 51.9446 195.952 48.1949C195.952 44.4451 194.885 41.436 192.704 39.1676C190.57 36.8993 187.785 35.7419 184.351 35.7419ZM183.284 41.5286C186.764 41.5286 189.085 43.9822 189.085 48.1949C189.085 52.4076 186.764 54.8611 183.284 54.8611C179.897 54.8611 177.623 52.5002 177.623 48.7504V47.6393C177.623 43.8896 179.897 41.5286 183.284 41.5286Z"
                      fill="black"
                    />
                    <path
                      d="M215.313 42.0378V36.2049H209.698L209.745 28.2887H202.97L202.923 36.2049H198.515V42.0378H202.877L202.831 52.5464C202.784 57.9165 206.125 60.6015 211.555 60.6015C212.761 60.6015 214.014 60.5089 215.313 60.3237V54.3056C214.432 54.4445 213.736 54.5371 213.225 54.5371C211.137 54.5371 209.606 53.3797 209.606 50.9262L209.652 42.0378H215.313Z"
                      fill="black"
                    />
                    <path
                      d="M244.329 48.1949C244.329 44.4451 243.123 41.436 240.71 39.1676C238.343 36.8993 235.281 35.7419 231.568 35.7419C227.856 35.7419 224.793 36.8993 222.38 39.1676C220.014 41.436 218.807 44.4451 218.807 48.1949C218.807 51.8983 220.014 54.9074 222.38 57.2221C224.793 59.4905 227.856 60.6478 231.568 60.6478C235.281 60.6478 238.343 59.4905 240.71 57.2221C243.123 54.9074 244.329 51.8983 244.329 48.1949ZM235.837 43.334C236.905 44.4914 237.462 46.1117 237.462 48.1949C237.462 50.2781 236.905 51.8983 235.837 53.0557C234.77 54.213 233.332 54.8148 231.568 54.8148C229.805 54.8148 228.366 54.213 227.299 53.0557C226.232 51.8983 225.675 50.2781 225.675 48.1949C225.675 46.1117 226.232 44.4914 227.299 43.334C228.366 42.1304 229.805 41.5286 231.568 41.5286C233.332 41.5286 234.77 42.1304 235.837 43.334Z"
                      fill="black"
                    />
                    <path
                      d="M266.218 41.2508V47.5468H274.942C273.874 52.1298 270.672 54.3056 266.171 54.3056C259.814 54.3056 255.916 50.3707 255.916 42.8248C255.916 35.279 259.814 31.344 266.171 31.344C270.858 31.344 274.06 33.8902 275.034 38.1492L282.459 36.8993C281.531 33.1495 279.628 30.233 276.705 28.1498C273.781 26.0666 270.301 25.0018 266.218 25.0018C261.067 25.0018 256.844 26.6221 253.549 29.8164C250.255 33.0106 248.631 37.3159 248.631 42.8248C248.631 48.2874 250.255 52.639 253.549 55.8333C256.844 59.0275 261.113 60.6478 266.264 60.6478C271.322 60.6478 275.313 59.0738 278.283 55.9722C281.299 52.8705 282.784 48.7041 282.784 43.5655V41.2508H266.218Z"
                      fill="black"
                    />
                    <path
                      d="M310.764 47.6393C310.764 43.9359 309.744 41.0194 307.655 38.9362C305.567 36.8067 302.783 35.7419 299.303 35.7419C295.683 35.7419 292.76 36.853 290.486 39.1213C288.212 41.3434 287.099 44.3525 287.099 48.1949C287.099 51.9909 288.212 55 290.486 57.2684C292.76 59.5368 295.776 60.6478 299.488 60.6478C302.319 60.6478 304.732 59.9071 306.774 58.472C308.862 57.0369 310.115 55.1389 310.532 52.8705L303.711 52.5464C303.201 54.3056 301.716 55.1852 299.303 55.1852C296.287 55.1852 294.43 53.3334 294.291 50.3244H310.764V47.6393ZM299.256 41.0194C302.226 41.0194 303.804 42.8248 303.943 45.8339H294.291C294.477 42.8248 296.333 41.0194 299.256 41.0194Z"
                      fill="black"
                    />
                    <path
                      d="M328.985 35.7419C325.923 35.7419 323.788 36.7141 322.535 38.6584V36.2049H316.131V60.1386H322.906V46.8524C322.906 43.9359 324.716 42.0378 327.361 42.0378C329.96 42.0378 331.584 43.797 331.584 46.8061V60.1386H338.359V45.5098C338.359 39.3991 334.6 35.7419 328.985 35.7419Z"
                      fill="black"
                    />
                    <path
                      d="M348.204 24.3074C344.816 24.1223 342.728 28.9368 345.327 31.2515C346.858 32.7791 349.55 32.7791 351.081 31.2515C351.87 30.4645 352.287 29.4923 352.287 28.3813C352.287 26.1129 350.478 24.3074 348.204 24.3074ZM351.591 36.2049H344.816V60.1386H351.591V36.2049Z"
                      fill="black"
                    />
                    <path
                      d="M380.687 47.6393C380.687 43.9359 379.666 41.0194 377.578 38.9362C375.49 36.8067 372.706 35.7419 369.225 35.7419C365.606 35.7419 362.683 36.853 360.409 39.1213C358.135 41.3434 357.021 44.3525 357.021 48.1949C357.021 51.9909 358.135 55 360.409 57.2684C362.683 59.5368 365.699 60.6478 369.411 60.6478C372.242 60.6478 374.655 59.9071 376.696 58.472C378.785 57.0369 380.038 55.1389 380.455 52.8705L373.634 52.5464C373.123 54.3056 371.638 55.1852 369.225 55.1852C366.209 55.1852 364.353 53.3334 364.214 50.3244H380.687V47.6393ZM369.179 41.0194C372.149 41.0194 373.727 42.8248 373.866 45.8339H364.214C364.399 42.8248 366.256 41.0194 369.179 41.0194Z"
                      fill="black"
                    />
                    <path
                      d="M54.4954 28.4868C51.129 26.0467 47.0371 24.8084 42.8792 24.9714C38.7212 25.1343 34.7393 26.6891 31.5752 29.3852C28.411 32.0812 26.2488 35.7615 25.437 39.833C24.6252 43.9045 25.211 48.1302 27.1002 51.829C28.9893 55.5278 32.0717 58.4844 35.8506 60.2224C39.6295 61.9604 43.885 62.3785 47.9311 61.4094C51.9773 60.4403 55.5787 58.1404 58.1548 54.8803C60.1372 52.3717 61.4237 49.4069 61.9114 46.2819H56.8409C56.4089 48.283 55.5237 50.1727 54.2379 51.7999C52.3554 54.1822 49.7236 55.8629 46.7668 56.5711C43.81 57.2793 40.7003 56.9737 37.9387 55.7037C35.1772 54.4336 32.9247 52.273 31.5442 49.57C30.1637 46.867 29.7355 43.7791 30.3288 40.8037C30.922 37.8284 32.5021 35.139 34.8143 33.1688C37.1266 31.1986 40.0365 30.0624 43.075 29.9433C46.1135 29.8242 49.1037 30.7291 51.5638 32.5122L48.2133 37.1128C46.7891 36.0805 45.0579 35.5566 43.2988 35.6255C41.5396 35.6945 39.855 36.3523 38.5163 37.4929C37.1776 38.6335 36.2628 40.1906 35.9194 41.9131C35.5759 43.6357 35.8238 45.4235 36.623 46.9884C37.4223 48.5532 38.7264 49.8041 40.3251 50.5394C41.9239 51.2747 43.7243 51.4516 45.4361 51.0416C47.148 50.6316 48.6716 49.6586 49.7615 48.2793C50.2436 47.6693 50.6283 46.9956 50.9076 46.2819H43.6064V40.5953H67.8331C67.8331 40.5953 67.8317 42.4053 67.6638 46.2819C67.4959 50.1584 65.4079 54.887 62.6312 58.4009C59.2624 62.664 54.553 65.6716 49.2618 66.9389C43.9706 68.2061 38.4059 67.6594 33.4642 65.3866C28.5225 63.1139 24.4917 59.2476 22.0213 54.4106C19.5509 49.5737 18.7848 44.0479 19.8464 38.7236C20.908 33.3993 23.7354 28.5866 27.8732 25.061C32.011 21.5354 37.218 19.5023 42.6554 19.2892C48.0927 19.076 53.4436 20.6954 57.8459 23.8862L54.4954 28.4868Z"
                      fill="#6237DE"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width={399}
                      height={90}
                      stroke="#F0F0F0"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
          {/* Do it like this... */}
          <section
            id="hifi-section"
            className="section case-section hifi-frame"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Do it like this...
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    This is&nbsp;the monochrome version of&nbsp;the logo. There
                    are pairs of&nbsp;main accents (Purple Heart) and primary
                    colors (Shamrock). It&nbsp;is&nbsp;not advised to&nbsp;use
                    secondary colors for the logo on&nbsp;all backgrounds. White
                    Smoke and White are similar so&nbsp;they are
                    interchangeable.
                  </p>
                  <br />
                  <br />
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Only the monochrome logo with the most contrast primary
                    color (Purple Heart) must be&nbsp;used on&nbsp;photos.
                  </p>
                </div>
              </div>
              <div className="wow fadeInUp case-section__image">
                <div className="cg-do-it-bg">
                  <div
                    className="cg-do-it-tile"
                    style={{ background: '#000000' }}
                  >
                    <svg
                      width={317}
                      height={73}
                      viewBox="0 0 317 73"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.8967 19.8553C37.1837 19.7257 40.4185 20.7103 43.0798 22.6503L45.7285 18.9925C42.2483 16.4556 38.0182 15.1681 33.7198 15.3376C29.4213 15.507 25.3049 17.1235 22.0339 19.9266C18.7628 22.7297 16.5276 26.5561 15.6883 30.7892C14.8491 35.0224 15.4548 39.4158 17.4077 43.2614C19.3607 47.1071 22.5472 50.1811 26.4538 51.9881C30.3604 53.795 34.7595 54.2298 38.9424 53.2222C43.1253 52.2146 46.8483 49.8234 49.5115 46.4339C51.7066 43.6402 53.3572 39.8807 53.49 36.7985C53.6227 33.7164 53.6238 32.2773 53.6238 32.2773H34.4716V36.7985H40.2435C40.0227 37.366 39.7185 37.9017 39.3375 38.3866C38.4758 39.4832 37.2714 40.2569 35.9181 40.5828C34.5648 40.9088 33.1415 40.7682 31.8776 40.1836C30.6137 39.599 29.5828 38.6044 28.951 37.3603C28.3191 36.1161 28.1232 34.6947 28.3947 33.3251C28.6662 31.9556 29.3894 30.7176 30.4476 29.8107C31.5059 28.9039 32.8377 28.3809 34.2284 28.3261C35.6191 28.2712 36.9876 28.6878 38.1136 29.5085L40.7622 25.8508C38.8174 24.4331 36.4535 23.7136 34.0515 23.8083C31.6494 23.903 29.3491 24.8064 27.5211 26.3728C25.6932 27.9392 24.4441 30.0775 23.9751 32.4431C23.5061 34.8087 23.8446 37.2638 24.9359 39.4128C26.0273 41.5619 27.808 43.2797 29.9911 44.2895C32.1742 45.2993 34.6325 45.5422 36.97 44.9791C39.3075 44.4161 41.388 43.0798 42.8763 41.1857C43.8927 39.892 44.5925 38.3896 44.934 36.7985H48.9424C48.5569 39.2831 47.5398 41.6403 45.9727 43.6349C43.9361 46.2269 41.0891 48.0554 37.8905 48.8259C34.6918 49.5964 31.3277 49.264 28.3403 47.8822C25.3529 46.5004 22.9162 44.1497 21.4227 41.2089C19.9293 38.2681 19.4662 34.9084 20.1079 31.6713C20.7497 28.4342 22.459 25.5081 24.9604 23.3646C27.4618 21.221 30.6096 19.9849 33.8967 19.8553ZM275.268 19.3279C272.59 19.1806 270.939 23.0085 272.993 24.8488C274.204 26.0634 276.332 26.0634 277.542 24.8488C278.166 24.2231 278.496 23.4502 278.496 22.5668C278.496 20.7633 277.065 19.3279 275.268 19.3279ZM272.59 28.7871V47.816H277.946V28.7871H272.59ZM82.8852 19.88C78.7766 19.88 75.4384 21.1682 72.8338 23.7078C70.2293 26.2474 68.9453 29.6704 68.9453 34.0504C68.9453 38.3935 70.2293 41.8533 72.8338 44.393C75.4384 46.9326 78.8133 48.2208 82.9219 48.2208C86.2968 48.2208 89.1949 47.3007 91.5793 45.4235C93.9638 43.5464 95.4312 41.0436 95.9447 37.8414L90.0019 37.3262C89.2682 41.1172 86.5536 43.1784 82.7385 43.1784C80.3907 43.1784 78.4465 42.3686 76.9424 40.7859C75.4384 39.2033 74.7047 36.9581 74.7047 34.0504C74.7047 31.2899 75.4384 29.0815 76.8691 27.4253C78.3364 25.769 80.2807 24.9224 82.7018 24.9224C86.517 24.9224 89.2316 27.0572 90.0019 30.885L95.9081 30.3698C95.4312 27.1676 93.9638 24.5912 91.5427 22.714C89.1582 20.8369 86.2602 19.88 82.8852 19.88ZM110.478 28.6031C108.02 28.6031 106.259 29.376 105.269 30.9587V28.7871H100.096V47.816H105.452V38.1727C105.452 35.5226 107.396 33.7927 110.478 33.7927V28.6031ZM126.248 28.7871H132.191L120.048 57.2016H114.215L119.058 46.1229L111.647 28.7871H117.554L121.919 40.1234L126.248 28.7871ZM145.736 28.419C143.168 28.419 141.297 29.192 140.123 30.7746V28.7871H135.061V57.2016H140.417V46.1965C141.627 47.5583 143.425 48.2208 145.736 48.2208C148.45 48.2208 150.651 47.3007 152.339 45.4972C154.063 43.6936 154.907 41.3012 154.907 38.3199C154.907 35.3386 154.063 32.9462 152.339 31.1427C150.651 29.3392 148.45 28.419 145.736 28.419ZM144.892 33.0198C147.643 33.0198 149.478 34.9705 149.478 38.3199C149.478 41.6693 147.643 43.62 144.892 43.62C142.214 43.62 140.417 41.7429 140.417 38.7616V37.8782C140.417 34.8969 142.214 33.0198 144.892 33.0198ZM170.212 28.7871V33.4247H165.737L165.7 40.4915C165.7 42.4422 166.911 43.3624 168.562 43.3624C168.965 43.3624 169.515 43.2888 170.212 43.1784V47.9632C169.185 48.1104 168.195 48.184 167.241 48.184C162.949 48.184 160.308 46.0493 160.344 41.7797L160.381 33.4247H156.933V28.7871H160.418L160.454 22.4932H165.81L165.774 28.7871H170.212ZM193.151 38.3199C193.151 35.3386 192.197 32.9462 190.289 31.1427C188.419 29.3392 185.997 28.419 183.063 28.419C180.128 28.419 177.707 29.3392 175.799 31.1427C173.928 32.9462 172.975 35.3386 172.975 38.3199C172.975 41.2644 173.928 43.6568 175.799 45.4972C177.707 47.3007 180.128 48.2208 183.063 48.2208C185.997 48.2208 188.419 47.3007 190.289 45.4972C192.197 43.6568 193.151 41.2644 193.151 38.3199ZM186.438 34.4553C187.281 35.3754 187.721 36.6636 187.721 38.3199C187.721 39.9762 187.281 41.2644 186.438 42.1846C185.594 43.1047 184.457 43.5832 183.063 43.5832C181.669 43.5832 180.531 43.1047 179.688 42.1846C178.844 41.2644 178.404 39.9762 178.404 38.3199C178.404 36.6636 178.844 35.3754 179.688 34.4553C180.531 33.4983 181.669 33.0198 183.063 33.0198C184.457 33.0198 185.594 33.4983 186.438 34.4553ZM210.454 37.8046V32.799H223.551V34.6393C223.551 38.7248 222.377 42.0374 219.992 44.5034C217.644 46.9694 214.49 48.2208 210.491 48.2208C206.419 48.2208 203.044 46.9326 200.44 44.393C197.835 41.8533 196.551 38.3935 196.551 34.0504C196.551 29.6704 197.835 26.2474 200.44 23.7078C203.044 21.1682 206.382 19.88 210.454 19.88C213.683 19.88 216.434 20.7265 218.745 22.3828C221.056 24.0391 222.56 26.3579 223.294 29.3392L217.424 30.333C216.654 26.9468 214.123 24.9224 210.418 24.9224C205.392 24.9224 202.311 28.051 202.311 34.0504C202.311 40.0498 205.392 43.1784 210.418 43.1784C213.976 43.1784 216.507 41.4485 217.351 37.8046H210.454ZM245.67 37.8782C245.67 34.9337 244.863 32.6149 243.213 30.9587C241.562 29.2656 239.361 28.419 236.61 28.419C233.748 28.419 231.437 29.3024 229.64 31.1059C227.842 32.8726 226.962 35.265 226.962 38.3199C226.962 41.338 227.842 43.7305 229.64 45.534C231.437 47.3375 233.822 48.2208 236.756 48.2208C238.994 48.2208 240.902 47.6319 242.516 46.4909C244.166 45.3499 245.157 43.8409 245.487 42.0374L240.095 41.7797C239.691 43.1784 238.517 43.8777 236.61 43.8777C234.225 43.8777 232.758 42.4054 232.648 40.013H245.67V37.8782ZM236.573 32.6149C238.921 32.6149 240.168 34.0504 240.278 36.4428H232.648C232.794 34.0504 234.262 32.6149 236.573 32.6149ZM254.976 30.7378C255.966 29.192 257.654 28.419 260.075 28.419C264.513 28.419 267.485 31.3267 267.485 36.1852V47.816H262.129V37.2157C262.129 34.8233 260.845 33.4247 258.791 33.4247C256.7 33.4247 255.269 34.9337 255.269 37.2525V47.816H249.913V28.7871H254.976V30.7378ZM298.489 30.9587C300.14 32.6149 300.947 34.9337 300.947 37.8782V40.013H287.924C288.034 42.4054 289.502 43.8777 291.886 43.8777C293.794 43.8777 294.968 43.1784 295.371 41.7797L300.764 42.0374C300.434 43.8409 299.443 45.3499 297.792 46.4909C296.178 47.6319 294.271 48.2208 292.033 48.2208C289.098 48.2208 286.714 47.3375 284.916 45.534C283.119 43.7305 282.238 41.338 282.238 38.3199C282.238 35.265 283.119 32.8726 284.916 31.1059C286.714 29.3024 289.025 28.419 291.886 28.419C294.638 28.419 296.839 29.2656 298.489 30.9587ZM295.555 36.4428C295.445 34.0504 294.197 32.6149 291.85 32.6149C289.539 32.6149 288.071 34.0504 287.924 36.4428H295.555Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    className="cg-do-it-tile"
                    style={{ background: '#51D9B8' }}
                  >
                    <svg
                      width={317}
                      height={73}
                      viewBox="0 0 317 73"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.8967 19.8553C37.1837 19.7257 40.4185 20.7103 43.0798 22.6503L45.7285 18.9925C42.2483 16.4556 38.0182 15.1681 33.7198 15.3376C29.4213 15.507 25.3049 17.1235 22.0339 19.9266C18.7628 22.7297 16.5276 26.5561 15.6883 30.7892C14.8491 35.0224 15.4548 39.4158 17.4077 43.2614C19.3607 47.1071 22.5472 50.1811 26.4538 51.9881C30.3604 53.795 34.7595 54.2298 38.9424 53.2222C43.1253 52.2146 46.8483 49.8234 49.5115 46.4339C51.7066 43.6402 53.3572 39.8807 53.49 36.7985C53.6227 33.7164 53.6238 32.2773 53.6238 32.2773H34.4716V36.7985H40.2435C40.0227 37.366 39.7185 37.9017 39.3375 38.3866C38.4758 39.4832 37.2714 40.2569 35.9181 40.5828C34.5648 40.9088 33.1415 40.7682 31.8776 40.1836C30.6137 39.599 29.5828 38.6044 28.951 37.3603C28.3191 36.1161 28.1232 34.6947 28.3947 33.3251C28.6662 31.9556 29.3894 30.7176 30.4476 29.8107C31.5059 28.9039 32.8377 28.3809 34.2284 28.3261C35.6191 28.2712 36.9876 28.6878 38.1136 29.5085L40.7622 25.8508C38.8174 24.4331 36.4535 23.7136 34.0515 23.8083C31.6494 23.903 29.3491 24.8064 27.5211 26.3728C25.6932 27.9392 24.4441 30.0775 23.9751 32.4431C23.5061 34.8087 23.8446 37.2638 24.9359 39.4128C26.0273 41.5619 27.808 43.2797 29.9911 44.2895C32.1742 45.2993 34.6325 45.5422 36.97 44.9791C39.3075 44.4161 41.388 43.0798 42.8763 41.1857C43.8927 39.892 44.5925 38.3896 44.934 36.7985H48.9424C48.5569 39.2831 47.5398 41.6403 45.9727 43.6349C43.9361 46.2269 41.0891 48.0554 37.8905 48.8259C34.6918 49.5964 31.3277 49.264 28.3403 47.8822C25.3529 46.5004 22.9162 44.1497 21.4227 41.2089C19.9293 38.2681 19.4662 34.9084 20.1079 31.6713C20.7497 28.4342 22.459 25.5081 24.9604 23.3646C27.4618 21.221 30.6096 19.9849 33.8967 19.8553ZM275.268 19.3279C272.59 19.1806 270.939 23.0085 272.993 24.8488C274.204 26.0634 276.332 26.0634 277.542 24.8488C278.166 24.2231 278.496 23.4502 278.496 22.5668C278.496 20.7633 277.065 19.3279 275.268 19.3279ZM272.59 28.7871V47.816H277.946V28.7871H272.59ZM82.8852 19.88C78.7766 19.88 75.4384 21.1682 72.8338 23.7078C70.2293 26.2474 68.9453 29.6704 68.9453 34.0504C68.9453 38.3935 70.2293 41.8533 72.8338 44.393C75.4384 46.9326 78.8133 48.2208 82.9219 48.2208C86.2968 48.2208 89.1949 47.3007 91.5793 45.4235C93.9638 43.5464 95.4312 41.0436 95.9447 37.8414L90.0019 37.3262C89.2682 41.1172 86.5536 43.1784 82.7385 43.1784C80.3907 43.1784 78.4465 42.3686 76.9424 40.7859C75.4384 39.2033 74.7047 36.9581 74.7047 34.0504C74.7047 31.2899 75.4384 29.0815 76.8691 27.4253C78.3364 25.769 80.2807 24.9224 82.7018 24.9224C86.517 24.9224 89.2316 27.0572 90.0019 30.885L95.9081 30.3698C95.4312 27.1676 93.9638 24.5912 91.5427 22.714C89.1582 20.8369 86.2602 19.88 82.8852 19.88ZM110.478 28.6031C108.02 28.6031 106.259 29.376 105.269 30.9587V28.7871H100.096V47.816H105.452V38.1727C105.452 35.5226 107.396 33.7927 110.478 33.7927V28.6031ZM126.248 28.7871H132.191L120.048 57.2016H114.215L119.058 46.1229L111.647 28.7871H117.554L121.919 40.1234L126.248 28.7871ZM145.736 28.419C143.168 28.419 141.297 29.192 140.123 30.7746V28.7871H135.061V57.2016H140.417V46.1965C141.627 47.5583 143.425 48.2208 145.736 48.2208C148.45 48.2208 150.651 47.3007 152.339 45.4972C154.063 43.6936 154.907 41.3012 154.907 38.3199C154.907 35.3386 154.063 32.9462 152.339 31.1427C150.651 29.3392 148.45 28.419 145.736 28.419ZM144.892 33.0198C147.643 33.0198 149.478 34.9705 149.478 38.3199C149.478 41.6693 147.643 43.62 144.892 43.62C142.214 43.62 140.417 41.7429 140.417 38.7616V37.8782C140.417 34.8969 142.214 33.0198 144.892 33.0198ZM170.212 28.7871V33.4247H165.737L165.7 40.4915C165.7 42.4422 166.911 43.3624 168.562 43.3624C168.965 43.3624 169.515 43.2888 170.212 43.1784V47.9632C169.185 48.1104 168.195 48.184 167.241 48.184C162.949 48.184 160.308 46.0493 160.344 41.7797L160.381 33.4247H156.933V28.7871H160.418L160.454 22.4932H165.81L165.774 28.7871H170.212ZM193.151 38.3199C193.151 35.3386 192.197 32.9462 190.289 31.1427C188.419 29.3392 185.997 28.419 183.063 28.419C180.128 28.419 177.707 29.3392 175.799 31.1427C173.928 32.9462 172.975 35.3386 172.975 38.3199C172.975 41.2644 173.928 43.6568 175.799 45.4972C177.707 47.3007 180.128 48.2208 183.063 48.2208C185.997 48.2208 188.419 47.3007 190.289 45.4972C192.197 43.6568 193.151 41.2644 193.151 38.3199ZM186.438 34.4553C187.281 35.3754 187.721 36.6636 187.721 38.3199C187.721 39.9762 187.281 41.2644 186.438 42.1846C185.594 43.1047 184.457 43.5832 183.063 43.5832C181.669 43.5832 180.531 43.1047 179.688 42.1846C178.844 41.2644 178.404 39.9762 178.404 38.3199C178.404 36.6636 178.844 35.3754 179.688 34.4553C180.531 33.4983 181.669 33.0198 183.063 33.0198C184.457 33.0198 185.594 33.4983 186.438 34.4553ZM210.454 37.8046V32.799H223.551V34.6393C223.551 38.7248 222.377 42.0374 219.992 44.5034C217.644 46.9694 214.49 48.2208 210.491 48.2208C206.419 48.2208 203.044 46.9326 200.44 44.393C197.835 41.8533 196.551 38.3935 196.551 34.0504C196.551 29.6704 197.835 26.2474 200.44 23.7078C203.044 21.1682 206.382 19.88 210.454 19.88C213.683 19.88 216.434 20.7265 218.745 22.3828C221.056 24.0391 222.56 26.3579 223.294 29.3392L217.424 30.333C216.654 26.9468 214.123 24.9224 210.418 24.9224C205.392 24.9224 202.311 28.051 202.311 34.0504C202.311 40.0498 205.392 43.1784 210.418 43.1784C213.976 43.1784 216.507 41.4485 217.351 37.8046H210.454ZM245.67 37.8782C245.67 34.9337 244.863 32.6149 243.213 30.9587C241.562 29.2656 239.361 28.419 236.61 28.419C233.748 28.419 231.437 29.3024 229.64 31.1059C227.842 32.8726 226.962 35.265 226.962 38.3199C226.962 41.338 227.842 43.7305 229.64 45.534C231.437 47.3375 233.822 48.2208 236.756 48.2208C238.994 48.2208 240.902 47.6319 242.516 46.4909C244.166 45.3499 245.157 43.8409 245.487 42.0374L240.095 41.7797C239.691 43.1784 238.517 43.8777 236.61 43.8777C234.225 43.8777 232.758 42.4054 232.648 40.013H245.67V37.8782ZM236.573 32.6149C238.921 32.6149 240.168 34.0504 240.278 36.4428H232.648C232.794 34.0504 234.262 32.6149 236.573 32.6149ZM254.976 30.7378C255.966 29.192 257.654 28.419 260.075 28.419C264.513 28.419 267.485 31.3267 267.485 36.1852V47.816H262.129V37.2157C262.129 34.8233 260.845 33.4247 258.791 33.4247C256.7 33.4247 255.269 34.9337 255.269 37.2525V47.816H249.913V28.7871H254.976V30.7378ZM298.489 30.9587C300.14 32.6149 300.947 34.9337 300.947 37.8782V40.013H287.924C288.034 42.4054 289.502 43.8777 291.886 43.8777C293.794 43.8777 294.968 43.1784 295.371 41.7797L300.764 42.0374C300.434 43.8409 299.443 45.3499 297.792 46.4909C296.178 47.6319 294.271 48.2208 292.033 48.2208C289.098 48.2208 286.714 47.3375 284.916 45.534C283.119 43.7305 282.238 41.338 282.238 38.3199C282.238 35.265 283.119 32.8726 284.916 31.1059C286.714 29.3024 289.025 28.419 291.886 28.419C294.638 28.419 296.839 29.2656 298.489 30.9587ZM295.555 36.4428C295.445 34.0504 294.197 32.6149 291.85 32.6149C289.539 32.6149 288.071 34.0504 287.924 36.4428H295.555Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div
                    className="cg-do-it-tile"
                    style={{ background: '#F0F0F0' }}
                  >
                    <svg
                      width={317}
                      height={73}
                      viewBox="0 0 317 73"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.8967 19.8553C37.1837 19.7257 40.4185 20.7103 43.0798 22.6503L45.7285 18.9925C42.2483 16.4556 38.0182 15.1681 33.7198 15.3376C29.4213 15.507 25.3049 17.1235 22.0339 19.9266C18.7628 22.7297 16.5276 26.5561 15.6883 30.7892C14.8491 35.0224 15.4548 39.4158 17.4077 43.2614C19.3607 47.1071 22.5472 50.1811 26.4538 51.9881C30.3604 53.795 34.7595 54.2298 38.9424 53.2222C43.1253 52.2146 46.8483 49.8234 49.5115 46.4339C51.7066 43.6402 53.3572 39.8807 53.49 36.7985C53.6227 33.7164 53.6238 32.2773 53.6238 32.2773H34.4716V36.7985H40.2435C40.0227 37.366 39.7185 37.9017 39.3375 38.3866C38.4758 39.4832 37.2714 40.2569 35.9181 40.5828C34.5648 40.9088 33.1415 40.7682 31.8776 40.1836C30.6137 39.599 29.5828 38.6044 28.951 37.3603C28.3191 36.1161 28.1232 34.6947 28.3947 33.3251C28.6662 31.9556 29.3894 30.7176 30.4476 29.8107C31.5059 28.9039 32.8377 28.3809 34.2284 28.3261C35.6191 28.2712 36.9876 28.6878 38.1136 29.5085L40.7622 25.8508C38.8174 24.4331 36.4535 23.7136 34.0515 23.8083C31.6494 23.903 29.3491 24.8064 27.5211 26.3728C25.6932 27.9392 24.4441 30.0775 23.9751 32.4431C23.5061 34.8087 23.8446 37.2638 24.9359 39.4128C26.0273 41.5619 27.808 43.2797 29.9911 44.2895C32.1742 45.2993 34.6325 45.5422 36.97 44.9791C39.3075 44.4161 41.388 43.0798 42.8763 41.1857C43.8927 39.892 44.5925 38.3896 44.934 36.7985H48.9424C48.5569 39.2831 47.5398 41.6403 45.9727 43.6349C43.9361 46.2269 41.0891 48.0554 37.8905 48.8259C34.6918 49.5964 31.3277 49.264 28.3403 47.8822C25.3529 46.5004 22.9162 44.1497 21.4227 41.2089C19.9293 38.2681 19.4662 34.9084 20.1079 31.6713C20.7497 28.4342 22.459 25.5081 24.9604 23.3646C27.4618 21.221 30.6096 19.9849 33.8967 19.8553ZM275.268 19.3279C272.59 19.1806 270.939 23.0085 272.993 24.8488C274.204 26.0634 276.332 26.0634 277.542 24.8488C278.166 24.2231 278.496 23.4502 278.496 22.5668C278.496 20.7633 277.065 19.3279 275.268 19.3279ZM272.59 28.7871V47.816H277.946V28.7871H272.59ZM82.8852 19.88C78.7766 19.88 75.4384 21.1682 72.8338 23.7078C70.2293 26.2474 68.9453 29.6704 68.9453 34.0504C68.9453 38.3935 70.2293 41.8533 72.8338 44.393C75.4384 46.9326 78.8133 48.2208 82.9219 48.2208C86.2968 48.2208 89.1949 47.3007 91.5793 45.4235C93.9638 43.5464 95.4312 41.0436 95.9447 37.8414L90.0019 37.3262C89.2682 41.1172 86.5536 43.1784 82.7385 43.1784C80.3907 43.1784 78.4465 42.3686 76.9424 40.7859C75.4384 39.2033 74.7047 36.9581 74.7047 34.0504C74.7047 31.2899 75.4384 29.0815 76.8691 27.4253C78.3364 25.769 80.2807 24.9224 82.7018 24.9224C86.517 24.9224 89.2316 27.0572 90.0019 30.885L95.9081 30.3698C95.4312 27.1676 93.9638 24.5912 91.5427 22.714C89.1582 20.8369 86.2602 19.88 82.8852 19.88ZM110.478 28.6031C108.02 28.6031 106.259 29.376 105.269 30.9587V28.7871H100.096V47.816H105.452V38.1727C105.452 35.5226 107.396 33.7927 110.478 33.7927V28.6031ZM126.248 28.7871H132.191L120.048 57.2016H114.215L119.058 46.1229L111.647 28.7871H117.554L121.919 40.1234L126.248 28.7871ZM145.736 28.419C143.168 28.419 141.297 29.192 140.123 30.7746V28.7871H135.061V57.2016H140.417V46.1965C141.627 47.5583 143.425 48.2208 145.736 48.2208C148.45 48.2208 150.651 47.3007 152.339 45.4972C154.063 43.6936 154.907 41.3012 154.907 38.3199C154.907 35.3386 154.063 32.9462 152.339 31.1427C150.651 29.3392 148.45 28.419 145.736 28.419ZM144.892 33.0198C147.643 33.0198 149.478 34.9705 149.478 38.3199C149.478 41.6693 147.643 43.62 144.892 43.62C142.214 43.62 140.417 41.7429 140.417 38.7616V37.8782C140.417 34.8969 142.214 33.0198 144.892 33.0198ZM170.212 28.7871V33.4247H165.737L165.7 40.4915C165.7 42.4422 166.911 43.3624 168.562 43.3624C168.965 43.3624 169.515 43.2888 170.212 43.1784V47.9632C169.185 48.1104 168.195 48.184 167.241 48.184C162.949 48.184 160.308 46.0493 160.344 41.7797L160.381 33.4247H156.933V28.7871H160.418L160.454 22.4932H165.81L165.774 28.7871H170.212ZM193.151 38.3199C193.151 35.3386 192.197 32.9462 190.289 31.1427C188.419 29.3392 185.997 28.419 183.063 28.419C180.128 28.419 177.707 29.3392 175.799 31.1427C173.928 32.9462 172.975 35.3386 172.975 38.3199C172.975 41.2644 173.928 43.6568 175.799 45.4972C177.707 47.3007 180.128 48.2208 183.063 48.2208C185.997 48.2208 188.419 47.3007 190.289 45.4972C192.197 43.6568 193.151 41.2644 193.151 38.3199ZM186.438 34.4553C187.281 35.3754 187.721 36.6636 187.721 38.3199C187.721 39.9762 187.281 41.2644 186.438 42.1846C185.594 43.1047 184.457 43.5832 183.063 43.5832C181.669 43.5832 180.531 43.1047 179.688 42.1846C178.844 41.2644 178.404 39.9762 178.404 38.3199C178.404 36.6636 178.844 35.3754 179.688 34.4553C180.531 33.4983 181.669 33.0198 183.063 33.0198C184.457 33.0198 185.594 33.4983 186.438 34.4553ZM210.454 37.8046V32.799H223.551V34.6393C223.551 38.7248 222.377 42.0374 219.992 44.5034C217.644 46.9694 214.49 48.2208 210.491 48.2208C206.419 48.2208 203.044 46.9326 200.44 44.393C197.835 41.8533 196.551 38.3935 196.551 34.0504C196.551 29.6704 197.835 26.2474 200.44 23.7078C203.044 21.1682 206.382 19.88 210.454 19.88C213.683 19.88 216.434 20.7265 218.745 22.3828C221.056 24.0391 222.56 26.3579 223.294 29.3392L217.424 30.333C216.654 26.9468 214.123 24.9224 210.418 24.9224C205.392 24.9224 202.311 28.051 202.311 34.0504C202.311 40.0498 205.392 43.1784 210.418 43.1784C213.976 43.1784 216.507 41.4485 217.351 37.8046H210.454ZM245.67 37.8782C245.67 34.9337 244.863 32.6149 243.213 30.9587C241.562 29.2656 239.361 28.419 236.61 28.419C233.748 28.419 231.437 29.3024 229.64 31.1059C227.842 32.8726 226.962 35.265 226.962 38.3199C226.962 41.338 227.842 43.7305 229.64 45.534C231.437 47.3375 233.822 48.2208 236.756 48.2208C238.994 48.2208 240.902 47.6319 242.516 46.4909C244.166 45.3499 245.157 43.8409 245.487 42.0374L240.095 41.7797C239.691 43.1784 238.517 43.8777 236.61 43.8777C234.225 43.8777 232.758 42.4054 232.648 40.013H245.67V37.8782ZM236.573 32.6149C238.921 32.6149 240.168 34.0504 240.278 36.4428H232.648C232.794 34.0504 234.262 32.6149 236.573 32.6149ZM254.976 30.7378C255.966 29.192 257.654 28.419 260.075 28.419C264.513 28.419 267.485 31.3267 267.485 36.1852V47.816H262.129V37.2157C262.129 34.8233 260.845 33.4247 258.791 33.4247C256.7 33.4247 255.269 34.9337 255.269 37.2525V47.816H249.913V28.7871H254.976V30.7378ZM298.489 30.9587C300.14 32.6149 300.947 34.9337 300.947 37.8782V40.013H287.924C288.034 42.4054 289.502 43.8777 291.886 43.8777C293.794 43.8777 294.968 43.1784 295.371 41.7797L300.764 42.0374C300.434 43.8409 299.443 45.3499 297.792 46.4909C296.178 47.6319 294.271 48.2208 292.033 48.2208C289.098 48.2208 286.714 47.3375 284.916 45.534C283.119 43.7305 282.238 41.338 282.238 38.3199C282.238 35.265 283.119 32.8726 284.916 31.1059C286.714 29.3024 289.025 28.419 291.886 28.419C294.638 28.419 296.839 29.2656 298.489 30.9587ZM295.555 36.4428C295.445 34.0504 294.197 32.6149 291.85 32.6149C289.539 32.6149 288.071 34.0504 287.924 36.4428H295.555Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div
                    className="cg-do-it-tile"
                    style={{ background: '#6237DE' }}
                  >
                    <svg
                      width={317}
                      height={73}
                      viewBox="0 0 317 73"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.8967 19.8553C37.1837 19.7257 40.4185 20.7103 43.0798 22.6503L45.7285 18.9925C42.2483 16.4556 38.0182 15.1681 33.7198 15.3376C29.4213 15.507 25.3049 17.1235 22.0339 19.9266C18.7628 22.7297 16.5276 26.5561 15.6883 30.7892C14.8491 35.0224 15.4548 39.4158 17.4077 43.2614C19.3607 47.1071 22.5472 50.1811 26.4538 51.9881C30.3604 53.795 34.7595 54.2298 38.9424 53.2222C43.1253 52.2146 46.8483 49.8234 49.5115 46.4339C51.7066 43.6402 53.3572 39.8807 53.49 36.7985C53.6227 33.7164 53.6238 32.2773 53.6238 32.2773H34.4716V36.7985H40.2435C40.0227 37.366 39.7185 37.9017 39.3375 38.3866C38.4758 39.4832 37.2714 40.2569 35.9181 40.5828C34.5648 40.9088 33.1415 40.7682 31.8776 40.1836C30.6137 39.599 29.5828 38.6044 28.951 37.3603C28.3191 36.1161 28.1232 34.6947 28.3947 33.3251C28.6662 31.9556 29.3894 30.7176 30.4476 29.8107C31.5059 28.9039 32.8377 28.3809 34.2284 28.3261C35.6191 28.2712 36.9876 28.6878 38.1136 29.5085L40.7622 25.8508C38.8174 24.4331 36.4535 23.7136 34.0515 23.8083C31.6494 23.903 29.3491 24.8064 27.5211 26.3728C25.6932 27.9392 24.4441 30.0775 23.9751 32.4431C23.5061 34.8087 23.8446 37.2638 24.9359 39.4128C26.0273 41.5619 27.808 43.2797 29.9911 44.2895C32.1742 45.2993 34.6325 45.5422 36.97 44.9791C39.3075 44.4161 41.388 43.0798 42.8763 41.1857C43.8927 39.892 44.5925 38.3896 44.934 36.7985H48.9424C48.5569 39.2831 47.5398 41.6403 45.9727 43.6349C43.9361 46.2269 41.0891 48.0554 37.8905 48.8259C34.6918 49.5964 31.3277 49.264 28.3403 47.8822C25.3529 46.5004 22.9162 44.1497 21.4227 41.2089C19.9293 38.2681 19.4662 34.9084 20.1079 31.6713C20.7497 28.4342 22.459 25.5081 24.9604 23.3646C27.4618 21.221 30.6096 19.9849 33.8967 19.8553ZM275.268 19.3279C272.59 19.1806 270.939 23.0085 272.993 24.8488C274.204 26.0634 276.332 26.0634 277.542 24.8488C278.166 24.2231 278.496 23.4502 278.496 22.5668C278.496 20.7633 277.065 19.3279 275.268 19.3279ZM272.59 28.7871V47.816H277.946V28.7871H272.59ZM82.8852 19.88C78.7766 19.88 75.4384 21.1682 72.8338 23.7078C70.2293 26.2474 68.9453 29.6704 68.9453 34.0504C68.9453 38.3935 70.2293 41.8533 72.8338 44.393C75.4384 46.9326 78.8133 48.2208 82.9219 48.2208C86.2968 48.2208 89.1949 47.3007 91.5793 45.4235C93.9638 43.5464 95.4312 41.0436 95.9447 37.8414L90.0019 37.3262C89.2682 41.1172 86.5536 43.1784 82.7385 43.1784C80.3907 43.1784 78.4465 42.3686 76.9424 40.7859C75.4384 39.2033 74.7047 36.9581 74.7047 34.0504C74.7047 31.2899 75.4384 29.0815 76.8691 27.4253C78.3364 25.769 80.2807 24.9224 82.7018 24.9224C86.517 24.9224 89.2316 27.0572 90.0019 30.885L95.9081 30.3698C95.4312 27.1676 93.9638 24.5912 91.5427 22.714C89.1582 20.8369 86.2602 19.88 82.8852 19.88ZM110.478 28.6031C108.02 28.6031 106.259 29.376 105.269 30.9587V28.7871H100.096V47.816H105.452V38.1727C105.452 35.5226 107.396 33.7927 110.478 33.7927V28.6031ZM126.248 28.7871H132.191L120.048 57.2016H114.215L119.058 46.1229L111.647 28.7871H117.554L121.919 40.1234L126.248 28.7871ZM145.736 28.419C143.168 28.419 141.297 29.192 140.123 30.7746V28.7871H135.061V57.2016H140.417V46.1965C141.627 47.5583 143.425 48.2208 145.736 48.2208C148.45 48.2208 150.651 47.3007 152.339 45.4972C154.063 43.6936 154.907 41.3012 154.907 38.3199C154.907 35.3386 154.063 32.9462 152.339 31.1427C150.651 29.3392 148.45 28.419 145.736 28.419ZM144.892 33.0198C147.643 33.0198 149.478 34.9705 149.478 38.3199C149.478 41.6693 147.643 43.62 144.892 43.62C142.214 43.62 140.417 41.7429 140.417 38.7616V37.8782C140.417 34.8969 142.214 33.0198 144.892 33.0198ZM170.212 28.7871V33.4247H165.737L165.7 40.4915C165.7 42.4422 166.911 43.3624 168.562 43.3624C168.965 43.3624 169.515 43.2888 170.212 43.1784V47.9632C169.185 48.1104 168.195 48.184 167.241 48.184C162.949 48.184 160.308 46.0493 160.344 41.7797L160.381 33.4247H156.933V28.7871H160.418L160.454 22.4932H165.81L165.774 28.7871H170.212ZM193.151 38.3199C193.151 35.3386 192.197 32.9462 190.289 31.1427C188.419 29.3392 185.997 28.419 183.063 28.419C180.128 28.419 177.707 29.3392 175.799 31.1427C173.928 32.9462 172.975 35.3386 172.975 38.3199C172.975 41.2644 173.928 43.6568 175.799 45.4972C177.707 47.3007 180.128 48.2208 183.063 48.2208C185.997 48.2208 188.419 47.3007 190.289 45.4972C192.197 43.6568 193.151 41.2644 193.151 38.3199ZM186.438 34.4553C187.281 35.3754 187.721 36.6636 187.721 38.3199C187.721 39.9762 187.281 41.2644 186.438 42.1846C185.594 43.1047 184.457 43.5832 183.063 43.5832C181.669 43.5832 180.531 43.1047 179.688 42.1846C178.844 41.2644 178.404 39.9762 178.404 38.3199C178.404 36.6636 178.844 35.3754 179.688 34.4553C180.531 33.4983 181.669 33.0198 183.063 33.0198C184.457 33.0198 185.594 33.4983 186.438 34.4553ZM210.454 37.8046V32.799H223.551V34.6393C223.551 38.7248 222.377 42.0374 219.992 44.5034C217.644 46.9694 214.49 48.2208 210.491 48.2208C206.419 48.2208 203.044 46.9326 200.44 44.393C197.835 41.8533 196.551 38.3935 196.551 34.0504C196.551 29.6704 197.835 26.2474 200.44 23.7078C203.044 21.1682 206.382 19.88 210.454 19.88C213.683 19.88 216.434 20.7265 218.745 22.3828C221.056 24.0391 222.56 26.3579 223.294 29.3392L217.424 30.333C216.654 26.9468 214.123 24.9224 210.418 24.9224C205.392 24.9224 202.311 28.051 202.311 34.0504C202.311 40.0498 205.392 43.1784 210.418 43.1784C213.976 43.1784 216.507 41.4485 217.351 37.8046H210.454ZM245.67 37.8782C245.67 34.9337 244.863 32.6149 243.213 30.9587C241.562 29.2656 239.361 28.419 236.61 28.419C233.748 28.419 231.437 29.3024 229.64 31.1059C227.842 32.8726 226.962 35.265 226.962 38.3199C226.962 41.338 227.842 43.7305 229.64 45.534C231.437 47.3375 233.822 48.2208 236.756 48.2208C238.994 48.2208 240.902 47.6319 242.516 46.4909C244.166 45.3499 245.157 43.8409 245.487 42.0374L240.095 41.7797C239.691 43.1784 238.517 43.8777 236.61 43.8777C234.225 43.8777 232.758 42.4054 232.648 40.013H245.67V37.8782ZM236.573 32.6149C238.921 32.6149 240.168 34.0504 240.278 36.4428H232.648C232.794 34.0504 234.262 32.6149 236.573 32.6149ZM254.976 30.7378C255.966 29.192 257.654 28.419 260.075 28.419C264.513 28.419 267.485 31.3267 267.485 36.1852V47.816H262.129V37.2157C262.129 34.8233 260.845 33.4247 258.791 33.4247C256.7 33.4247 255.269 34.9337 255.269 37.2525V47.816H249.913V28.7871H254.976V30.7378ZM298.489 30.9587C300.14 32.6149 300.947 34.9337 300.947 37.8782V40.013H287.924C288.034 42.4054 289.502 43.8777 291.886 43.8777C293.794 43.8777 294.968 43.1784 295.371 41.7797L300.764 42.0374C300.434 43.8409 299.443 45.3499 297.792 46.4909C296.178 47.6319 294.271 48.2208 292.033 48.2208C289.098 48.2208 286.714 47.3375 284.916 45.534C283.119 43.7305 282.238 41.338 282.238 38.3199C282.238 35.265 283.119 32.8726 284.916 31.1059C286.714 29.3024 289.025 28.419 291.886 28.419C294.638 28.419 296.839 29.2656 298.489 30.9587ZM295.555 36.4428C295.445 34.0504 294.197 32.6149 291.85 32.6149C289.539 32.6149 288.071 34.0504 287.924 36.4428H295.555Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ... but never like this! */}
          <section
            id="hifi-section"
            className="section case-section hifi-frame"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    ... but never like this!
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    These are samples of&nbsp;a&nbsp;wrong logo use.
                  </p>
                </div>
              </div>
              <div className="wow fadeInUp case-section__image">
                <picture>
                  <source
                    srcSet="/img/cg/not-like-this-mobile-w400.webp, /img/cg/not-like-this-mobile-w800.webp 2x"
                    media="(max-width: 767.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/cg/not-like-this-mobile-w400.png, /img/cg/not-like-this-mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/cg/not-like-this-w1140.webp, /img/cg/not-like-this-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/cg/not-like-this-w1140.png, /img/cg/not-like-this-w2280.png 2x"
                    media="(min-width: 768.5px)"
                  />
                  <img
                    className="case-section__image wow fadeInUp"
                    src="/img/cg/not-like-this-w1440.png"
                    data-wow-duration="0.7s"
                    data-wow-delay="0.2s"
                  />
                </picture>
              </div>
            </div>
          </section>
          {/* Multiple Cases */}
          <section
            id="hifi-section"
            className="section case-section hifi-frame"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Multiple Cases
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    The logo and the company name can be&nbsp;used separately
                    if&nbsp;needed. The safe distance rule is&nbsp;the same
                    as&nbsp;for the logo itself. The color rules are the same
                    as&nbsp;applied to&nbsp;the monochrome logo.
                  </p>
                </div>
              </div>
              <div className="wow fadeInUp case-section__image">
                <picture>
                  <source
                    srcSet="/img/cg/multiple-cases-mobile-w400.webp, /img/cg/multiple-cases-mobile-w800.webp 2x"
                    media="(max-width: 767.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/cg/multiple-cases-mobile-w400.png, /img/cg/multiple-cases-mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/cg/multiple-cases-w1140.webp, /img/cg/multiple-cases-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/cg/multiple-cases-w1140.png, /img/cg/multiple-cases-w2280.png 2x"
                    media="(min-width: 768.5px)"
                  />
                  <img
                    className="case-section__image wow fadeInUp"
                    src="/img/cg/multiple-cases-w1440.png"
                    data-wow-duration="0.7s"
                    data-wow-delay="0.2s"
                  />
                </picture>
              </div>
            </div>
          </section>
          {/* Colors*/}
          <section id="colors-section" className="section colors">
            <div className="container">
              <div className="inline-header inline-header-midle --with-padding">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Colors
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Upon conducting our research on&nbsp;the relevant products
                  </p>
                </div>
              </div>
              <div>
                <div className="cg-colors-section">
                  <div
                    className="cg-colors-label wow fadeInUp"
                    data-wow-duration="1.2s"
                  >
                    Primary Colors
                  </div>
                  <div className="cg-colors-container">
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Purple Heart">
                        <div
                          style={{ backgroundColor: '#6237DE' }}
                          className="--light cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">
                            Purple Heart
                          </div>
                          <div className="cg-colors-tile-value">#6237DE</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Shamrock">
                        <div
                          style={{ backgroundColor: '#51D9B8' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Shamrock</div>
                          <div className="cg-colors-tile-value">#51D9B8</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Sunset Orange">
                        <div
                          style={{ backgroundColor: '#F65D53' }}
                          className="--light cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">
                            Sunset Orange
                          </div>
                          <div className="cg-colors-tile-value">#F65D53</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Mediumpurple">
                        <div
                          style={{ backgroundColor: '#AE91FF' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">
                            Mediumpurple
                          </div>
                          <div className="cg-colors-tile-value">#AE91FF</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Sinbad">
                        <div
                          style={{ backgroundColor: '#9ED8CA' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Sinbad</div>
                          <div className="cg-colors-tile-value">#9ED8CA</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Sweet Pink">
                        <div
                          style={{ backgroundColor: '#FDA5A5' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Sweet Pink</div>
                          <div className="cg-colors-tile-value">#FDA5A5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cg-colors-section">
                  <div
                    className="cg-colors-label wow fadeInUp"
                    data-wow-duration="1.2s"
                  >
                    Other Colors
                  </div>
                  <div className="cg-colors-container">
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Black">
                        <div
                          style={{ backgroundColor: '#000000' }}
                          className="--light cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Black</div>
                          <div className="cg-colors-tile-value">#000000</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Gray">
                        <div
                          style={{ backgroundColor: '#757883' }}
                          className="--light cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Gray</div>
                          <div className="cg-colors-tile-value">#757883</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Yellow">
                        <div
                          style={{ backgroundColor: '#FFD761' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Yellow</div>
                          <div className="cg-colors-tile-value">#FFD761</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Field's base">
                        <div
                          style={{ backgroundColor: '#F3F3F3' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">
                            Field&apos;s base
                          </div>
                          <div className="cg-colors-tile-value">#F3F3F3</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Base">
                        <div
                          style={{ backgroundColor: '#F7F8F9' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Base</div>
                          <div className="cg-colors-tile-value">#F7F8F9</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Base 2">
                        <div
                          style={{ backgroundColor: '#EEF1F4' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Base 2</div>
                          <div className="cg-colors-tile-value">#EEF1F4</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cg-colors-tile-container wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      <div className="cg-colors-tile-shadow --color-Outline">
                        <div
                          style={{ backgroundColor: '#ffffff' }}
                          className="--dark cg-colors-tile"
                        >
                          <div className="cg-colors-tile-label">Outline</div>
                          <div className="cg-colors-tile-value">#E3E7ED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Typography*/}
          <section
            id="typography-section"
            className="section case-section typography"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Typography
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Satoshi is&nbsp;a&nbsp;modernist sans serif typeface. Its
                    design combines typically grotesque-style letterforms with
                    some characters that are quite geometrically designed.
                    In&nbsp;terms of&nbsp;its appearance, Satoshi was inspired
                    by&nbsp;Modernism and Industrial-Era graphic and typographic
                    design.
                  </p>
                </div>
              </div>
              <picture>
                <source
                  srcSet="/img/cg/satoshi-font-mobile-w400.webp, /img/cg/satoshi-font-mobile-w800.webp 2x"
                  media="(max-width: 767.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/satoshi-font-mobile-w400.png, /img/cg/satoshi-font-mobile-w800.png 2x"
                  media="(max-width: 767.5px)"
                />
                <source
                  srcSet="/img/cg/satoshi-font-w1140.webp, /img/cg/satoshi-font-w2280.webp 2x"
                  media="(min-width: 768.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/satoshi-font-w1140.png, /img/cg/satoshi-font-w2280.png 2x"
                  media="(min-width: 768.5px)"
                />
                <img
                  className="case-section__image wow fadeInUp"
                  src="/img/cg/satoshi-font-w1440.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </picture>
            </div>
          </section>
          {/* Business Card */}
          <section
            id="typography-section"
            className="section case-section typography"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Business Card
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Here is&nbsp;how the business cards might look like.
                  </p>
                </div>
              </div>
              <picture>
                <source
                  srcSet="/img/cg/b-card-mobile-w400.webp, /img/cg/b-card-mobile-w800.webp 2x"
                  media="(max-width: 767.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/b-card-mobile-w400.png, /img/cg/b-card-mobile-w800.png 2x"
                  media="(max-width: 767.5px)"
                />
                <source
                  srcSet="/img/cg/b-card-w1140.webp, /img/cg/b-card-w2280.webp 2x"
                  media="(min-width: 768.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/b-card-w1140.png, /img/cg/b-card-w2280.png 2x"
                  media="(min-width: 768.5px)"
                />
                <img
                  className="case-section__image wow fadeInUp"
                  src="/img/cg/b-card-w1440.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </picture>
            </div>
          </section>
          {/* Graphic Elements */}
          <section
            id="typography-section"
            className="section case-section typography"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Graphic Elements
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Some elements, including circles, lines, and triangles, can
                    be&nbsp;used as&nbsp;part of&nbsp;identity in&nbsp;the
                    design.
                  </p>
                  <br />
                  <br />
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Here are some examples of&nbsp;icon style. They show the use
                    of&nbsp;simple shapes, 2.5px lines, and identity accent
                    colors.
                  </p>
                </div>
              </div>
              <picture>
                <source
                  srcSet="/img/cg/graphic-el-mobile-w400.webp, /img/cg/graphic-el-mobile-w800.webp 2x"
                  media="(max-width: 767.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/graphic-el-mobile-w400.png, /img/cg/graphic-el-mobile-w800.png 2x"
                  media="(max-width: 767.5px)"
                />
                <source
                  srcSet="/img/cg/graphic-el-w1140.webp, /img/cg/graphic-el-w2280.webp 2x"
                  media="(min-width: 768.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/cg/graphic-el-w1140.png, /img/cg/graphic-el-w2280.png 2x"
                  media="(min-width: 768.5px)"
                />
                <img
                  className="case-section__image wow fadeInUp"
                  src="/img/cg/graphic-el-w1440.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </picture>
            </div>
          </section>
          {/* Next*/}
          <NextStudy
            title="Fleet manager to control your equipment"
            href="/fleet"
          />
        </main>
      </div>
    </LegacyCaseContainer>
  );
}

export default React.memo(Cryptogenie);
