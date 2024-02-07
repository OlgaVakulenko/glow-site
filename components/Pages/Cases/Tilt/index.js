import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { range } from '../../../../lib/utils';
import LegacyCaseContainer from '../LegacyCaseContainer';
import NextStudy from '../NextStudy';
import SliderProgress from '../SliderProgress';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import BeforeAfter from '../BeforeAfter';
import { useRef } from 'react';
import { useHeaderTheme } from '../../../Header';
import InlineVideo from '../InlineVideo';
import Head from 'next/head';
import { getFullDescription, getFullTitle } from '../../../HeadTitle';

export default function Tilt() {
  const ref = useRef();

  useHeaderTheme({ ref, theme: 'white', disableBackdrop: true });

  return (
    <LegacyCaseContainer>
      <Head>
        <title>
          {getFullTitle('Connecting Students with Financial Aid Opportunities')}
        </title>
        <meta
          name="description"
          content={getFullDescription(
            'Glow Team enhanced Tilt, a platform aiding students in finding colleges and financial aid, with sleek design and user-friendly functionality.'
          )}
        />
      </Head>
      <main className="tilt">
        {/* Start window*/}
        <section ref={ref} className="section welcome">
          <div className="container">
            <div className="welcome__content">
              <div className="welcome__left">
                <h1 className="title-big wow fadeInUp" data-wow-duration="1.2s">
                  Tilt: a platform that connects students with financial aid
                  opportunities
                </h1>
                <h2
                  className="welcome__scroll wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Start Scrolling 21,645px
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
                  <li>Tilt</li>
                  <li>USA</li>
                </ul>
              </div>
              <div>
                <h3>Industry</h3>
                <ul>
                  <li>Education</li>
                  <li>Financial Aid</li>
                </ul>
              </div>
              <div>
                <h3>Services</h3>
                <ul>
                  <li>Product Design</li>
                  <li>UX / UI</li>
                  <li>Illustrations</li>
                </ul>
              </div>
              <div>
                <h3>Starring</h3>
                <ul>
                  <li>Stas Kovalsky</li>
                  <li>Vyacheslav Ksendzyk</li>
                  <li>Olga Levchenko</li>
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
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Challenge
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Tilt helps students to find and select colleges that will
                  offer them the best deal. Glow, in its turn, helped Tilt to
                  redesign its website as well as a platform for students. Our
                  goal was to simplify the process for high school graduates
                  when looking for college opportunities and create a place
                  where prospective students can organize all information they
                  need for admission.
                </p>
              </div>
            </div>
          </div>
          <div
            className="wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="0.1s"
          >
            <div className="challenge__image">
              <div className="container">
                <div className="anytime__image-block">
                  <div className="g-before-after" id="before-after">
                    <BeforeAfter
                      before="/img/tilt/challenge-1.png"
                      after="/img/tilt/challenge-2.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Research*/}
        <section className="section case-section research">
          <img
            alt=""
            className="research__background"
            src="/img/tilt/how.svg"
          />
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Tilt works like a swiss watch
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Tilt’s competitive advantage in the education industry is a
                  personal approach to every high school graduate who is looking
                  for a bright future in college. Every application is processed
                  by Tilt employees who add a personal touch to brand and client
                  communication. Therefore, the platform stands out in the
                  industry to help each and everyone on their platform to make a
                  right decision for their future.
                </p>
              </div>
            </div>
            <div
              className="research__data wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div>
                <h3>19 9 mln</h3>
                <p>Students enrolled in 2019</p>
              </div>
              <div>
                <h3>$6 345</h3>
                <p>Federal Pell Grant</p>
              </div>
              <div>
                <h3>72%</h3>
                <p>Received financial aid</p>
              </div>
              <div>
                <h3>57%</h3>
                <p>Grants and scholarships</p>
              </div>
            </div>
          </div>
        </section>
        {/* How it works*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  How it works
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Tilt asks users to fill out a short form to discover
                  prospective student college preferences. Based on provided
                  information new users will see suggestions of colleges they
                  may be interested in. Inside a platform, students can manage
                  colleges and search for financial aid opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Website*/}
        <section className="section case-section wireframes">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Website &amp; mobile adaptation
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  New Tilt look &amp; feel was created with the target audience
                  in mind. The youngsters who are about to make a serious
                  commitment are in need to feel welcomed and trusted on Tilt
                  platform. Friendly illustrations and clean interface help a
                  lot to build credibility between Tilt service and future
                  students.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/tilt/website.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              alt=""
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/tilt/mobile.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
          <img
            alt=""
            className="hidden-xs visible-sm case-section__image wow fadeInUp"
            src="/img/tilt/website-tablet.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
          <img
            alt=""
            className="hidden-xs visible-sm case-section__image wow fadeInUp"
            src="/img/tilt/mobile-tablet.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/tilt/website-mobile.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
          <img
            alt=""
            className="visible-xs case-section__image wow fadeInUp"
            src="/img/tilt/mobile-mobile.jpg"
            data-wow-duration="0.7s"
            data-wow-delay="0.2s"
          />
        </section>
        {/* Colors*/}
        <section className="section case-section colors">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Colours
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  We envisioned the life of students associated with bright and
                  fun memories. That is why we transformed that idea through
                  color palette. Combining the clean look and colorful accents
                  colors helps students to stay focused while using the
                  platform.
                </p>
              </div>
            </div>
            <div className="colors__wrapper">
              <img
                alt=""
                className="case-section__image wow fadeInUp"
                src="/img/tilt/colors.jpg"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
            </div>
          </div>
        </section>
        {/* Typography*/}
        <section className="section case-section typography">
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
                  We used Jost font which was designed by Owen Earl. While it
                  looks fresh it is still easy to read in non-overloaded
                  interfaces.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            />
            <img
              alt=""
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/tilt/typography.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              alt=""
              className="visible-sm hidden-xs case-section__image wow fadeInUp"
              src="/img/tilt/typography-tablet.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              alt=""
              className="visible-xs case-section__image wow fadeInUp"
              src="/img/tilt/typography-mobile.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Icons*/}
        <section className="section case-section">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Icons
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  We designed a unique icon set for Tilt. Outline style helped
                  us to navigate users through platform without using template
                  solutions.
                </p>
              </div>
            </div>
            <img
              alt=""
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/tilt/icons.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              alt=""
              className="visible-sm hidden-xs case-section__image wow fadeInUp"
              src="/img/tilt/icons-tablet.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              alt=""
              className="visible-xs case-section__image wow fadeInUp"
              src="/img/tilt/icons-mobile.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Ilustrations*/}
        <section className="section case-section ilustrations">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Illustrations
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  For illustrations we choose the simple line art style with
                  accents on the primary design colors. Two main heroes who
                  personify enrollees were drawn in situations the real students
                  could be in. The major message is lightness and credibility in
                  school selection, which simplifies the decision-making process
                  for every high school graduate.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div className="ilustrations__image-wrapper">
                <div className="item">
                  <img alt="" src="/img/tilt/card-1.svg" />
                </div>
                <div className="item">
                  <img alt="" src="/img/tilt/card-2.svg" />
                </div>
                <div className="item">
                  <img alt="" src="/img/tilt/card-3.svg" />
                </div>
                <div className="item">
                  <img alt="" src="/img/tilt/card-4.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Dashboard*/}
        <section className="section case-section dashboard case-section--lavender">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Dashboard
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Users who enter Dashboard for the first time need a guide. Our
                  wizzard-to-do-list gives them a clear understanding of what
                  they should do next: fill out the profile, find preferred
                  colleges and apply. Statistics on this page provide a user
                  with different types of applications.
                </p>
              </div>
            </div>
            <InlineVideo
              className="case-section__image wow fadeInUp"
              width="100%"
              height="auto"
              src="/video/tilt/dashboard.mp4"
            />
          </div>
        </section>
        {/* Colleges*/}
        <section className="section case-section dashboard case-section--lavender">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Colleges search
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The college search is one of the most important features of
                  Tilt. After onboarding, this page shows a personalized result
                  that fits the student’s location, preferred majors, and
                  budget. Filters help to find more accurate results. You can
                  also switch to the map view to find colleges near your home.
                </p>
              </div>
            </div>
            <InlineVideo
              className="case-section__image wow fadeInUp"
              width="100%"
              height="auto"
              src="/video/tilt/search.mp4"
            />
          </div>
        </section>
        {/* Details*/}
        <section className="section case-section dashboard case-section--lavender">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Detailed college page
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  We decided to split the college details page into different
                  tabs based on priorities. The most important tab is an
                  overview where you can see the main information, contacts, and
                  stats. Simple Calculator manages to calculate all the
                  important fees regarding education and housing costs. The
                  social media tab can help students to learn more about the
                  college’s campus life and see reviews from other students.
                </p>
              </div>
            </div>
            <InlineVideo
              className="case-section__image wow fadeInUp"
              width="100%"
              height="auto"
              src="/video/tilt/detailed.mp4"
            />
          </div>
        </section>
        {/* Mobile*/}
        <section className="section case-section mobile">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Mobile
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  While working on the mobile version of the dashboard we wanted
                  to create an experience similar to the mobile app. Youngsters
                  spent more time on mobile devices compared to desktops. That’s
                  why our goal was to design an interface that lets users do
                  their tasks on the go.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div className="mobile-carousel owl-carousel owl-theme">
                <Swiper slidesPerView={1} spaceBetween={20} grabCursor={true}>
                  {range(1, 4).map((num) => (
                    <SwiperSlide key={num}>
                      <div>
                        <img alt="" src={`/img/tilt/mobile-card-${num}.png`} />
                      </div>
                    </SwiperSlide>
                  ))}
                  <SliderProgress />
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* DS*/}
        <section className="section case-section ds">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Design system
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  We created a design system for Tilt from scratch. It is based
                  on the atomic design methodology. Each UI-control has its own
                  goal and was built on atoms, molecules, and organisms. Sounds
                  too hard? Don’t worry, that’s our job to worry about complex
                  things.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <img alt="" className="hidden-xs" src="/img/tilt/ds.jpg" />
              <img
                alt=""
                className="visible-xs"
                src="/img/tilt/ds-mobile.jpg"
              />
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
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  <span>Client’s words about work with Glow</span>
                </h1>
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
                              <p>Sinthuja Nagalingam</p>
                              <span>CEO, Tilt</span>
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
                          <h2 className="text-big">
                            We had them create the designs of our website from
                            scratch. We then also used them to create an initial
                            user experience for our platform. We had them design
                            the login experience as well as a way for students
                            to search colleges in the US and save them to their
                            list.
                          </h2>
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
        {/* Next*/}
        <NextStudy
          title="Fleet manager to control your equipment"
          href="/fleet"
        />
      </main>
    </LegacyCaseContainer>
  );
}
