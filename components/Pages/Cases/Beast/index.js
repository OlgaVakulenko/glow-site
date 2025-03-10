import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaAtom } from '../../../../lib/agent';
import { range } from '../../../../lib/utils';
import { useHeaderTheme } from '../../../Header';
import LegacyCaseContainer from '../LegacyCaseContainer';
import SliderProgress from '../SliderProgress';
import Head from 'next/head';
import InlineVideo from '../InlineVideo';
import { getFullDescription, getFullTitle } from '../../../HeadTitle';
import NextCase from '../../../NextCase';
import { tiltIcon } from '../icons';

function Intro() {
  const ref = useRef();
  useHeaderTheme({ ref, theme: 'dark' });

  return (
    <section ref={ref} className="section welcome">
      <Head>
        <title>{getFullTitle('Case Beast: Zero-emissions car rental')}</title>
        <meta
          name="description"
          content={getFullDescription(
            `Glow Team's work for Beast: Designed an innovative app for sustainable Tesla rentals in Estonia, blending user-friendly interfaces with eco-conscious branding.`
          )}
        />
      </Head>
      <div className="container">
        <div className="welcome__content">
          <div className="welcome__left">
            <h1 className="title-big wow fadeInUp" data-wow-duration="1.2s">
              Zero-emissions
              <br />
              car rental
            </h1>
            <p
              className="welcome__scroll wow fadeInUp"
              data-wow-duration="1.2s"
            >
              Start Scrolling 24508px
            </p>
          </div>
          <div className="welcome__right wow fadeInUp" data-wow-duration="1.2s">
            <div className="welcome__big-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Beast() {
  return (
    <LegacyCaseContainer>
      <div className="beast">
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
                  <li>Beast</li>
                  <li>Tallinn, Estonia</li>
                </ul>
              </div>
              <div>
                <h3>Industry</h3>
                <ul>
                  <li>Car Rent</li>
                </ul>
              </div>
              <div>
                <h3>Services</h3>
                <ul>
                  <li>User Experience</li>
                  <li>User Interface</li>
                  <li>Branding</li>
                </ul>
              </div>
              <div>
                <h3>Starring</h3>
                <ul>
                  <li>Mashatov Ruslan</li>
                  <li>Usatenko Vlad</li>
                  <li>Kovalsky Stas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Challenge*/}
        <section className="section case-section challenge">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Challenge
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Beast is an ambitious carsharing project from Estonia that
                  presents a range of exclusive Tesla models.
                </p>
                <br />
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Inspired by Tesla, their approach and desire is to serve the
                  mission of reducing carbon dioxide emissions into the
                  environment. The Beast team envisioned their goal as a way to
                  break the stereotype that electric car rental is expensive and
                  impractical.
                </p>
                <br />
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  That’s why working with the Beast team was more than just an
                  app and branding design. It was a challenge for us to
                  implement ambitious plans and innovative approach into a
                  visual interface and promote the Beast brand the best way
                  possible.
                </p>
                <br />
              </div>
            </div>
            <div className="challenge__image-block hidden-xs">
              <Head>
                <link
                  rel="preload"
                  as="image"
                  href="/img/beast/challenge-phone.png"
                />
              </Head>
              <img
                alt=""
                className="wow fadeInUp"
                src="/img/beast/challenge-phone.png"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
              <div className="challenge__image-block-right">
                <h2 className="mb" >Solutions we provided for the Beast:</h2>
                {/*<h3>Solutions we provided for the Beast:</h3>*/}
                <ul>
                  <li>
                    Found an approach to the consumer by breaking the stereotype
                    that Tesla cars are beyond the reach of the majority of
                    users
                  </li>
                  <li>
                    Created a simple and practical interface where functionality
                    covers both basic and unique user needs.
                  </li>
                  <li>
                    Translate the idea through branding design that car rental
                    can be affordable and easily used for everyday commuting.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="challenge__image-block visible-xs">
            <img
              alt=""
              className="wow fadeInUp"
              src="/img/beast/challenge-phone.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <div className="challenge__image-block-right">
              <h2 className="mb" aria-hidden>Solutions we provided for the Beast:</h2>
              <ul>
                <li>
                  Found an approach to the consumer by breaking the stereotype
                  that Tesla cars are beyond the reach of the majority of users
                </li>
                <li>
                  Created a simple and practical interface where functionality
                  covers both basic and unique user needs.
                </li>
                <li>
                  Translate the idea through branding design that car rental can
                  be affordable and easily used for everyday commuting.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Research*/}
        <section className="section case-section research">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Research
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Estonia is a small but innovative country with ambitions.
                  Tallinn, the Estonian capital, plans to substitute all public
                  transport with fuel engines to electric alternatives by the
                  end of 2035.
                </p>
              </div>
            </div>
            <div
              className="research__data wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div>
                <span className="spanWork">160</span>
                <p>
                  Electric charging
                  <br />
                  stations nationwide
                </p>
              </div>
              <div>
                <span className="spanWork">40-60 km</span>
                <p>
                  Average distance between
                  <br />
                  charging stations
                </p>
              </div>
              <div>
                <span className="spanWork">5%</span>
                <p>
                  Annual increase in the
                  <br />
                  number of electric cars
                </p>
              </div>
              <div>
                <span className="spanWork">2021</span>
                <p>
                  The year of expected
                  <br />
                  breakthrough for electric cars
                </p>
              </div>
            </div>
            <div
              className="research__right-text wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              Estonia itself was the first country in the world to cover the
              entire territory with a network of electric charging stations. The
              potential for electric carsharing is high among the population.
            </div>
            <div className="research__center-block">
              <p>
                In 2020 the number of registered electric vehicles in Estonia
                has significantly grown compared to 2019
              </p>
            </div>
            <div className="research__increase-block">
              <div>
                <img
                  alt=""
                  src="/img/beast/increase-1.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
                {/*<h4>210%</h4>*/}
                <span className="spanRes">210%</span>

                <p>
                  Increase in electricaly chargable vehicles (ECV) registration
                </p>
              </div>
              <div>
                <img
                  alt=""
                  src="/img/beast/increase-2.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
                <span className="spanRes">182%</span>
                <p>Increase in battery electric vehicles (BEV) registration</p>
              </div>
              <div>
                <img
                  alt=""
                  src="/img/beast/increase-3.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
                <span className="spanRes">325%</span>
                <p>
                  Increase in plug-in hybrid electric vehicles (PHEV)
                  registration
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Wireframes*/}
        <section className="section case-section wireframes">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Wireframes
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  One important focus we had on is that it should be easy and
                  affordable to rent a car for the user&apos;s daily rides.
                  Prototypes are an important step in implementing those
                  requirements.
                </p>
                <br />
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Each scenario of a user activity needs to be considered before
                  starting the UI design. We covered not only the main user
                  scenarios but more complex flows as well. Indeed, flows where
                  the use of the application can eliminate the need for googling
                  or contacting technical support.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image wow fadeInUp"
              src="/img/beast/wireframes.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/beast/wireframes-m.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* Map*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp font-normal"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Customer journey map
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The customer journey is the sequence of steps the user goes
                  through when using the application. Visualizing the customer
                  journey helps us understand which steps can be simplified or
                  which of the flows should be restructured to make the product
                  even better.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image wow fadeInUp"
              src="/img/beast/customer.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/beast/customer-m.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* Colors*/}
        <section className="section case-section colors">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp font-normal"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Colors
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The strict black and white color scheme were chosen to
                  emphasize uncompromised minimalism. The accent colors are made
                  to focus attention on important elements of the interface,
                  which are useful for the driver if he or she needs to get
                  important information while driving.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image case-section__image--desc-right wow fadeInUp"
              src="/img/beast/colors.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              alt=""
              className="visible-xs case-section__image wow fadeInUp"
              src="/img/beast/colors-m.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Typography*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Typography
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  If minimalism can be emphasized with colors and strictness,
                  then conciseness should be shown through fonts. That&apos;s
                  why we have chosen a combination of Montserrat and Muli.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image wow fadeInUp"
              src="/img/beast/typography.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/beast/typography-m.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* Icons*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Icons
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  By exploring the idea of clarity and minimalism, we have
                  chosen outlined icons for this project. This style of icons
                  looks elegant and neat while retaining good readability and
                  clarity.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image wow fadeInUp"
              src="/img/beast/icons.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/beast/icons-m.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* Search*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Car Search Flow
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The main flow is to find and rent a car. Our user needs to
                  know everything about the car and the route to it before
                  making a decision and starting the trip. We show user the
                  parameters of the car as well as all stages of the route.
                </p>
              </div>
            </div>
            <InlineVideo
              className="hidden-xs case-section__image wow fadeInUp"
              width="100%"
              height="auto"
              src="/video/beast/search.mp4"
            />
          </div>
          <div className="case-section__video-mobile case-section__image">
            <InlineVideo
              width="1000px"
              height="auto"
              src="/video/beast/search.mp4"
            />
          </div>
        </section>
        {/* Radar*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Radar
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  If there is no car nearby, this should not be a barrier for
                  the user to use the application. Radar is a flow that allows
                  the system to search for cars and automatically book a car if
                  one appears available within the specified radius.
                </p>
                <br />
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  This will help the user not to be distracted by the smartphone
                  and focus on other tasks. All that remains is to wait for the
                  notification about the found car and automatic booking in the
                  searched radius.
                </p>
              </div>
            </div>
            <InlineVideo
              className="hidden-xs case-section__image wow fadeInUp"
              width="100%"
              height="auto"
              src="/video/beast/radar.mp4"
            />
          </div>
          <div className="case-section__video-mobile case-section__image">
            <InlineVideo
              width="1000px"
              height="auto"
              src="/video/beast/radar.mp4"
            />
          </div>
        </section>
        {/* Statistics*/}
        <section className="section case-section wireframes">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Car Statistics and Maps
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Time, price, vehicle data and route are the essentials that
                  can take user&apos;s attention away from the road for a few
                  moments. That is why we decided to remove redundant elements
                  from the interface and give access only to the necessary
                  information while driving.
                </p>
                <br />
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  To save the driver from using third-party apps for maps or
                  traffic, we&apos;ve designed route scenarios, where the system
                  selects the path to a charging station in advance in case of a
                  lack of car’s charge for the entire route. This will help user
                  to save time and explore the options they have with Beast.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image wow fadeInUp"
              src="/img/beast/statistics.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/beast/statistics-m.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* System*/}
        <System />
        {/* Damage*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Car damage reports
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  To maintain the fleet condition and maximize driver comfort,
                  we have implemented a vehicle condition report function.
                  Before each trip, the driver is prompted to inspect the
                  vehicle. If the damage is found, the driver can take a
                  picture, describe the problem, and then send it to the company
                  for review.
                </p>
              </div>
            </div>
            <InlineVideo
              width="100%"
              height="auto"
              className="hidden-xs case-section__image wow fadeInUp"
              src="/video/beast/damage.mp4"
            />
          </div>
          <div className="case-section__video-mobile case-section__image">
            <InlineVideo
              src="/video/beast/damage.mp4"
              width="1000px"
              height="auto"
            />
          </div>
        </section>
        {/* Components*/}
        <section className="section case-section components">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  A library of components
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The design system was assembled according to the principle of
                  atomic design with an emphasis on practicality. The design is
                  simple and flexible in terms of scaling and various scenarios.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/beast/components.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              alt=""
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/beast/components-m.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Branding*/}
        <section className="section case-section research">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Branding
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Initially, there was no request to implement corporate
                  identity. However, the Beast team proposed an initiative to
                  design posters and t-shirts for branding efforts.
                </p>
                <br />
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  We are not a full-service agency and rarely take on such
                  challenges. But given our successful cooperation with Beast,
                  we decided to give it a try.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image wow fadeInUp"
              src="/img/beast/branding-1.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/beast/branding-1.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
          <div className="container">
            <div
              className="research__right-text wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              Our branding efforts further expanded to the branding of cars and
              car charging stations.
            </div>
            <img
              alt=""
              className="hidden-xs case-section__image wow fadeInUp"
              src="/img/beast/branding-2.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <div className="case-section__two-images hidden-xs">
              <img
                alt=""
                className="wow fadeInUp"
                src="/img/beast/branding-3.jpg"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
              <img
                alt=""
                className="wow fadeInUp"
                src="/img/beast/branding-4.jpg"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
            </div>
          </div>
          <img
            alt=""
            className="visible-xs mg-b-10 case-section__image wow fadeInUp"
            src="/img/beast/branding-2.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
          <img
            alt=""
            className="visible-xs mg-b-10 wow fadeInUp"
            src="/img/beast/branding-3.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
          <img
            alt=""
            className="visible-xs wow fadeInUp"
            src="/img/beast/branding-4.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* Testimonials*/}
        <section className="section case-section case-section--testimonials">
          <div className="container">
            {/* Header*/}
            <div className="inline-header">
              {/* Left*/}
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  <>Client’s words about work with Glow</>
                </h2>
              </div>
              {/* Right*/}
              <div className="inline-header__item inline-header__right">
                <div
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  <div className="owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <div className="item">
                          <div className="info-box">
                            <div className="info-box__left">
                              <p>Anna-Maria</p>
                              <span>Co-Founder, Electric Beast OÜ</span>
                            </div>
                            <div className="testimonials__all-reviews">
                              <a
                                className="hidden-xs"
                                href="https://clutch.co/profile/glow-design-agency"
                              >
                                <img
                                  alt=""
                                  className="testimonials__start"
                                  src="/img/audit/stars.png"
                                />
                              </a>
                            </div>
                          </div>
                          <p className="text-big">
                            Glow Design Agency designed an app for a
                            self-service car rental app. They provided a
                            competitor&apos;s analysis, wireframes, and UI
                            concepts for all screens. During the final stages,
                            they presented a prototype.
                          </p>
                          <a
                            className="visible-xs"
                            href="https://clutch.co/profile/glow-design-agency"
                          >
                            <img
                              alt=""
                              className="testimonials__start"
                              src="/img/audit/stars.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <NextCase
        title="Platform that connects students with financial aid opportunities"
        href="/tilt"
        icon={tiltIcon}
      />
    </LegacyCaseContainer>
  );
}

function System() {
  const media = useMediaAtom();

  return (
    <section className="section case-section research">
      <div className="container">
        <div className="inline-header inline-header-midle">
          <div className="inline-header__item inline-header__left">
            <h2
              className="title-big wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              System illustrations and the wheel of fortune
            </h2>
          </div>
          <div className="inline-header__item inline-header__right">
            <p
              className="text wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.2s"
            >
              For clear and more successful communication with users, we have
              developed several easily scalable illustration templates, that
              show important changes in trip and car status.
            </p>
          </div>
        </div>
        <img
          alt=""
          className="hidden-sm case-section__image wow fadeInUp"
          src="/img/beast/system-1.jpg"
          data-wow-duration="0.7s"
          data-wow-delay="0.2s"
        />
        <img
          alt=""
          className="visible-sm hidden-xs case-section__image wow fadeInUp"
          src="/img/beast/system-1-t.jpg"
          data-wow-duration="0.7s"
          data-wow-delay="0.2s"
        />
        <img
          alt=""
          className="visible-xs case-section__image wow fadeInUp"
          src="/img/beast/system-1-m.jpg"
          data-wow-duration="0.7s"
          data-wow-delay="0.2s"
        />
        <div
          className="research__right-text wow fadeInUp"
          data-wow-duration="1.2s"
          data-wow-delay="0.1s"
        >
          Wheel of Fortune is the entertainment section of the app where the
          user can win Hypr Cash. This is an in-app currency that can be spent
          to partially cover the cost of a trip. If you make a fortune,
          you&apos;ll have enough to enjoy several free rides from Beast.
        </div>
        {media !== 'mobile' ? (
          <img
            alt=""
            className="hidden-xs case-section__image wow fadeInUp"
            src="/img/beast/research.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        ) : (
          <div
            className="visible-xs case-section__image wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="0.1s"
          >
            <div className="mobile-carousel owl-carousel owl-theme">
              <Swiper slidesPerView={1}>
                {range(1, 7).map((num) => (
                  <SwiperSlide key={num}>
                    <div className="">
                      <img alt="" src={`/img/beast/mobile-card-${num}.png`} />
                    </div>
                  </SwiperSlide>
                ))}
                <SliderProgress />
              </Swiper>
              {/* 
              <div className="item">
                <img alt="" src="/img/beast/mobile-card-2.png" />
              </div>
              <div className="item">
                <img alt="" src="/img/beast/mobile-card-3.png" />
              </div>
              <div className="item">
                <img alt="" src="/img/beast/mobile-card-4.png" />
              </div>
              <div className="item">
                <img alt="" src="/img/beast/mobile-card-5.png" />
              </div>
              <div className="item">
                <img alt="" src="/img/beast/mobile-card-6.png" />
              </div> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
