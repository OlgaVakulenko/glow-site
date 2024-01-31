import Head from 'next/head';
import { getFullDescription, getFullTitle } from '../../../HeadTitle';
import LegacyCaseContainer from '../LegacyCaseContainer';
import NextStudy from '../NextStudy';

export default function Fleet() {
  return (
    <LegacyCaseContainer>
      <Head>
        <title>{getFullTitle('Fleet Management Solutions')}</title>
        <meta
          name="description"
          content={getFullDescription(
            'Glow Team offers innovative fleet management solutions, optimizing transportation operations for efficiency and cost-effectiveness.'
          )}
        />
      </Head>
      <main className="fleet">
        {/* Start window*/}
        <section className="section welcome">
          <div className="container">
            <div className="welcome__content">
              <div className="welcome__left">
                <h1 className="title-big wow fadeInUp" data-wow-duration="1.2s">
                  FleetChaser – fleet management platform
                </h1>
                <h2
                  className="welcome__scroll wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Start Scrolling 19,345 px
                </h2>
              </div>
              <div
                className="welcome__right wow fadeInUp"
                data-wow-duration="1.2s"
              >
                <div className="welcome__big-image" />
              </div>
            </div>
          </div>
        </section>
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
                  <li>FleetChaser</li>
                  <li>USA</li>
                </ul>
              </div>
              <div>
                <h3>Industry</h3>
                <ul>
                  <li>Fleet Management</li>
                  <li>Construction</li>
                </ul>
              </div>
              <div>
                <h3>Services</h3>
                <ul>
                  <li>Product Design</li>
                  <li>UX/UI Design</li>
                  <li>Illustrations</li>
                </ul>
              </div>
              <div>
                <h3>Starring</h3>
                <ul>
                  <li>Ruslan Mashatov</li>
                  <li>Dmitry Zelenko</li>
                  <li>Vystorobskaya Nastya</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Challenge*/}
        <section className="section case-section challenge anytime">
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
                  The construction industry, like no other, requires process
                  automation. Our goal was to design a system that would help
                  construction firms to keep their fleet in good condition and
                  easily manage it.
                </p>
              </div>
            </div>
            <img className="challenge__image" src="/img/fleet/challenge.jpg" />
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
                  FleetChaser is a construction industry GameChanger
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Good fleet management apps exist without a doubt, but none of
                  them are focused on the construction industry. Of course,
                  except Fleetchaser. And this industry is huge: as of the
                  summer of 2019, the construction market only in the US is
                  estimated at $1,293 bn.
                </p>
              </div>
            </div>
            <div
              className="research__data wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div>
                <h3>$11.4 tln</h3>
                <p>Spent worldwide in 2018</p>
              </div>
              <div>
                <h3>$12.9 tln</h3>
                <p>Global output by 2022</p>
              </div>
              <div>
                <h3>&gt;180 mln</h3>
                <p>People work in industry</p>
              </div>
              <div>
                <h3>Only 18%</h3>
                <p>Firms use apps</p>
              </div>
            </div>
          </div>
        </section>
        {/* Real devices*/}
        <section className="section case-section case-section--3-photos">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Real devices, real team
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  In order to transfer details about each vehicle to the app,
                  FleetChaser&apos;s team created their own unique devices. The
                  team behind FleetChaser is unique by combining professionalism
                  and a human approach to each of their client.
                </p>
              </div>
            </div>
            <div className="case-section__photo-group-wrapper">
              <div className="case-section__photo-group">
                <img src="/img/fleet/client-1.jpg" />
                <img src="/img/fleet/client-2.jpg" />
                <img src="/img/fleet/client-3.jpg" />
              </div>
            </div>
          </div>
        </section>
        {/* How it works*/}
        <section className="section case-section case-section--3-photos case-section--how">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  How it works
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Construction company managers can track location of their
                  vehicles on a map, know their speed, technical condition and
                  much more. This data is shown in live on the app with the help
                  of FleetChaser device.
                </p>
              </div>
            </div>
            <div className="case-section__photo-group-wrapper">
              <div className="case-section__photo-group">
                <div className="case-section__photo-item">
                  <img src="/img/fleet/how-1.jpg" />
                  <h4>Call FC team</h4>
                  <p>
                    Team of FC specialists arrives at company’s parking area
                  </p>
                </div>
                <div className="case-section__photo-item">
                  <img src="/img/fleet/how-2.jpg" />
                  <h4>Connect devices</h4>
                  <p>FleetChaser devices connect to vehicles of the fleet</p>
                </div>
                <div className="case-section__photo-item">
                  <img src="/img/fleet/how-3.jpg" />
                  <h4>Manage your fleet</h4>
                  <p>
                    Dispatchers and managers can see all vehicles inside the app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Colors*/}
        <section className="section case-section colors">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Colours
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  While the app is focused on the map, the other parts of it
                  have a lot of white space with bright color accents on details
                  like vehicles pins, location areas, statuses, etc.
                </p>
              </div>
            </div>
            <div className="colors__wrapper hidden-xs">
              <img
                className="case-section__image wow fadeInUp"
                src="/img/fleet/colors.jpg"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
            </div>
          </div>
          <div className="colors__wrapper visible-xs">
            <img
              className="case-section__image wow fadeInUp"
              src="/img/fleet/colors-m.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Typography*/}
        <section className="section case-section typography">
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
                  A lot of drivers use Android phones during work. So why not
                  create familiar invironment for them with Roboto font? It fits
                  well with hard interfaces, provides easy readability, and does
                  not take a lot of space.
                </p>
              </div>
            </div>
            <div className="typography__column">
              <div>
                <img
                  className="hidden-sm wow fadeInUp"
                  src="/img/fleet/typography.jpg"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
                <img
                  className="visible-sm hidden-xs wow fadeInUp"
                  src="/img/fleet/typography-tablet.jpg"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
                <img
                  className="visible-xs wow fadeInUp"
                  src="/img/fleet/typography-mobile.jpg"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </div>
              <div className="typography__fonts">
                <img
                  className="hidden-xs wow fadeInUp"
                  src="/img/fleet/font.jpg"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
                <img
                  className="visible-xs wow fadeInUp"
                  src="/img/fleet/font-mobile.jpg"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Common*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Design system: custom upgrade of Material Design
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  When Glow started cooperation with FleetChaser, the product
                  was already launched using the Material Design system. Working
                  on new features we needed to do a lot of custom controls and
                  components, but with consideration of the basic guidelines.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="/img/fleet/ds.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Travel history
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Would you like to see travel history of specific vehicle? No
                  problem, just open the tab of vehicle details on the Map
                  screen. It helps to find specific routes of the car and
                  understand driver behavior in case of an accident.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="/img/fleet/travel.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Reports
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The reports page gives a detailed look at vehicle usage and
                  IFTA for specific periods. As an example, the most efficient
                  drivers are on-site at the moment. More useful charts will be
                  added in the future.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="/img/fleet/reports.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Track your fleet in real time right on the map
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  On the map screen dispatchers can see the list of all vehicles
                  and quickly find each one on the map. Each vehicle has its own
                  status (travel, speeding, stop or idle), speed, fuel indicator
                  and many other technical details.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="/img/fleet/track.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Vehicle details
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Vehicles page is the big part of the app. It includes all the
                  details about each car, maintenance history, engine light
                  codes, photos and comments from drivers and engineers. When
                  the company is quite big, it is hard to the track technical
                  state of each vehicle. FleetChaser solves this task with
                  flexible system of alerts.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="/img/fleet/vehicle.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Dashboard
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Dashboard info helps dispatchers and other company members to
                  look at their work process from a bird&apos;s eye view. It
                  shows the number of active vehicles, miles traveled and engine
                  hours. There are statistics about different locations and
                  more.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="/img/fleet/dashboard.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Mobile*/}
        <section className="section case-section mobile case-section--w-100">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Ready for mobile
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The desktop version of FleetChaser has a lot of data. But
                  dispatchers want to be flexible and manage the work process
                  even in their building yard. That’s why we created a mobile
                  version of the app, which lets users do their job even on a
                  tiny screen.
                </p>
              </div>
            </div>
          </div>
          <img
            style={{
              objectFit: 'cover',
              objectPosition: 'left',
            }}
            className="case-section__image wow fadeInUp"
            src="/img/fleet/mobile.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* Website*/}
        <section className="section case-section website">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Website
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The main goal of fleetchaser.com is to tell potential clients
                  about the product and let them request a demo. We highlighted
                  the main features of the app and showed the whole process with
                  a beautiful illustration. By the way, can you see these waves
                  in the background? This pattern is familiar for construction
                  workers who use topographic maps a lot.
                </p>
              </div>
            </div>
            <div className="website__photo-scroll hidden-sm case-section__image">
              <img
                className="wow fadeInUp"
                src="/img/fleet/website.jpg"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
            </div>
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/fleet/website-m.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Results*/}
        <section className="section case-section research">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Results are impressive
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Redesign of the platform helped FleetChaser to attract new
                  customers and increase the rate of satisfaction with the
                  product of its current users. We can’t wait to see the new
                  features in the future updates.
                </p>
              </div>
            </div>
            <div
              className="research__data wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div>
                <h3>36.4 mln</h3>
                <p>Total miles tracked</p>
              </div>
              <div>
                <h3>1.9 mln</h3>
                <p>Working hours tracked</p>
              </div>
              <div>
                <h3>&gt; 10,000</h3>
                <p>Active vehicles</p>
              </div>
              <div>
                <h3>50</h3>
                <p>U.S. state covered</p>
              </div>
            </div>
          </div>
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
                  <span>Client&apos;s impression on working with us</span>
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
                              <p>Vitaly Babiy</p>
                              <span>Co-founder FleetChaser</span>
                            </div>
                            <div className="testimonials__all-reviews">
                              <a
                                className="hidden-xs"
                                href="https://clutch.co/profile/glow-design-agency"
                              >
                                <img
                                  className="testimonials__start"
                                  src="/img/audit/stars.png"
                                />
                              </a>
                            </div>
                          </div>
                          <h2 className="text-big">
                            Impressing the internal staff, the team delivered a
                            navigable, intuitive, and dependable solution that
                            positively impacted the business. Their ability to
                            comply with project timelines and prioritize
                            effective communication with their partner helped
                            create a trusting relationship.
                          </h2>
                          <a
                            className="visible-xs"
                            href="https://clutch.co/profile/glow-design-agency"
                          >
                            <img
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
        {/* Next*/}
        <NextStudy title="New look at medical platform" href="/ethos" />
      </main>
    </LegacyCaseContainer>
  );
}
