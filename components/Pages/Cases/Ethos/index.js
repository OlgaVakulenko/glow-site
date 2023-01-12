import { range } from '../../../../lib/utils';
import BeforeAfter from '../BeforeAfter';
import Carousel from '../Carousel';
import LegacyCaseContainer from '../LegacyCaseContainer';
import NextStudy from '../NextStudy';

export default function Ethos() {
  return (
    <LegacyCaseContainer>
      <main className="ethos">
        {/* Start window*/}
        <section className="section welcome">
          <div className="container">
            <div className="welcome__content">
              <div className="welcome__left">
                <h1 className="title-big wow fadeInUp" data-wow-duration="1.2s">
                  EthosCE: new look at medical platform
                </h1>
                <h2
                  className="welcome__scroll wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Start scrolling 19,277 px
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
                  <li>EthosCE</li>
                  <li>USA</li>
                </ul>
              </div>
              <div>
                <h3>Industry</h3>
                <ul>
                  <li>Education</li>
                  <li>Medicine</li>
                </ul>
              </div>
              <div>
                <h3>Services</h3>
                <ul>
                  <li>Product Design</li>
                  <li>UX / UI</li>
                </ul>
              </div>
              <div>
                <h3>Starring</h3>
                <ul>
                  <li>Vyacheslav Ksendzyk</li>
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
                  EthosCE - is a platform that provides opportunities for
                  healthcare professionals to take a next step in their career
                  by getting further qualifications. Our goals was to redesign
                  the platform and make it more visually pleasing, accessible
                  and efficient based on UX desicions and patterns.
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
                      before="img/ethos/challenge-2.png"
                      after="img/ethos/challenge-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Research*/}
        <section className="section case-section research">
          <div className="container">
            <img
              className="research__background research__background--desk"
              src="img/ethos/how.png"
            />
            <img
              className="research__background research__background--tablet"
              src="img/ethos/how-tablet.png"
            />
            <img
              className="research__background research__background--mobile"
              src="img/ethos/how-mobile.png"
            />
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  EthosCE improves medical education
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The advantage of this platform is not only the possibility of
                  healthcare professionals to advance their career but also the
                  possibility for educational institutions to publish its own
                  courses and lectures. Additionally, a student that have
                  finished the course receives a certificate about the finished
                  course.
                </p>
              </div>
            </div>
            <div
              className="research__data wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div>
                <h3>100+</h3>
                <p>Companies in the health care industry</p>
              </div>
              <div>
                <h3>$286.62 bil.</h3>
                <p>Total Market Size</p>
              </div>
              <div>
                <h3>10%</h3>
                <p>Growth rate in 2021</p>
              </div>
              <div>
                <h3>6 milions</h3>
                <p>Students study online</p>
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
                  EthosCE allows a wide range of possibilities as an educational
                  platform. A grade system, feedback from the professors,
                  variety of courses and categories, exams and different types
                  of content. The Universities and hospitals that are partnering
                  with EthosCE have access to branding pages that allow them to
                  promote its courses and institutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Website*/}
        <section
          className="section case-section wireframes"
          id="white-label-wrapper"
        >
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  White Label Design
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Platform allows not only to publish but to create a separate
                  customizable page where client can publish content, create
                  newsfeed, and discussions within learning groups. Our design
                  accomplished the goal of branding for each institution to make
                  it unique in colors, but consistent with EthosCE branding.
                </p>
              </div>
            </div>
            <div
              className="wireframes__scroll hidden-sm case-section__image"
              id="white-label"
            >
              <img
                className="wow fadeInUp"
                src="img/ethos/white-label.png"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
            </div>
          </div>
          <div
            className="wireframes__scroll visible-sm case-section__image"
            id="white-label"
          >
            <img
              className="wow fadeInUp"
              src="img/ethos/white-label.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
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
                  Colors
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  When choosing the color scheme we were relying on old branding
                  colors since the platform has is recognizable visual
                  structure. We have added additional colors and elements that
                  are adding up to the main ones to complete the picture.
                </p>
              </div>
            </div>
            <div className="colors__wrapper">
              <img
                className="hidden-sm case-section__image wow fadeInUp"
                src="img/ethos/colors.jpg"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
              <img
                className="hidden-xs visible-sm case-section__image wow fadeInUp"
                src="img/ethos/colors-tablet.jpg"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
              <img
                className="visible-xs case-section__image wow fadeInUp"
                src="img/ethos/colors-mobile.jpg"
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
                  We used Grotesk family font to underline the simplicity of the
                  EthosCE educational platform. As an addition, the big library
                  of this font allows more freedom in the further development.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            />
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="img/ethos/typography.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm hidden-xs case-section__image wow fadeInUp"
              src="img/ethos/typography-tablet.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-xs case-section__image wow fadeInUp"
              src="img/ethos/typography-mobile.jpg"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Test*/}
        <section className="section case-section dashboard case-section--lavender">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Course Test
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  By reworking the main flow of the course progress our team
                  successfully tackled the interface that will be comfortable
                  for the user while learning on the different stages of the
                  course structures.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="img/ethos/test.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <video
              className="case-section__image wow fadeInUp hidden"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="video/tilt/detailed.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        {/* Search*/}
        <section className="section case-section dashboard case-section--lavender">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Courses Search
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Course search is one of the main pages that allows you to find
                  a suitable course based on your specialty. We have added tag
                  system, filters and search elements that will allow a user to
                  spend less time on finding the right course and get
                  personalized experience.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="img/ethos/search.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <video
              className="case-section__image wow fadeInUp hidden"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="video/tilt/detailed.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        {/* Page*/}
        <section className="section case-section dashboard case-section--lavender">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Course Page
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Course page was redesigned as well, the emphasis was on the
                  fast intuitive search and all of the main features are on the
                  main page. A potential student can see the files, credits and
                  all other needed information before signing up for the
                  selected course.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="img/ethos/page.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <video
              className="case-section__image wow fadeInUp hidden"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="video/tilt/detailed.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        {/* Learning*/}
        <section className="section case-section dashboard case-section--lavender">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Learning Groups
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The focus on the social discovery is very important when it
                  comes to distant learning platforms. Therefore, one of the
                  main features of the platform is a group search where a user
                  can find people by the same interests or ask questions related
                  to their field of study.
                </p>
              </div>
            </div>
            <img
              className="case-section__image wow fadeInUp"
              src="img/ethos/learning.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Other*/}
        <section className="section case-section mobile">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h1
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Other Relevant Pages
                </h1>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Profile of the user, calendar, newsfeed and the creation of
                  the course were a big chunk of work for us since creating a
                  course is a complex task for potential educators. We’ve made
                  simpler and divided huge sections into progress bar with
                  smaller steps.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div className="mobile-carousel owl-carousel owl-theme">
                <Carousel
                  slides={range(1, 5).map((i) => (
                    <div key={i}>
                      <img src={`img/ethos/other-card-${i}.png`} alt="" />
                    </div>
                  ))}
                />
              </div>
            </div>
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
                  Like in any other project we understand the importnace of the
                  mobile web version. With EthosCE case we were able to
                  transform our web experience into mobile with no problem using
                  the best practices and patterns available.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div className="mobile-carousel owl-carousel owl-theme">
                <Carousel
                  slides={range(1, 3).map((num) => (
                    <div key={num}>
                      <img src={`img/ethos/mobile-card-${num}.png`} alt="" />
                    </div>
                  ))}
                />
              </div>
            </div>
          </div>
        </section>
        {/* DS*/}
        <section className="section case-section dashboard">
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
                  Additionally, we have created a library of components
                  according to atomic system and style guides to make the
                  process of the development easier and faster. In the future,
                  this will allow us to design additional features even quicker.
                </p>
              </div>
            </div>
            <div
              className="case-section__image wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <img className="hidden-xs" src="img/ethos/ds.jpg" />
              <img className="visible-xs" src="img/ethos/ds-mobile.jpg" />
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
                              <p>Scott Kuchinski</p>
                              <span>Product Manager, EthosCE</span>
                            </div>
                            <div className="testimonials__all-reviews">
                              <a
                                className="hidden-xs"
                                href="https://clutch.co/profile/glow-design-agency"
                              >
                                <img
                                  className="testimonials__start"
                                  src="img/audit/stars.png"
                                />
                              </a>
                            </div>
                          </div>
                          <h2 className="text-big">
                            Glow Design Agency handled frontend development for
                            a learning management system company. They provided
                            several UI design options for implementation into
                            the client&apos;s web application.
                          </h2>
                          <a
                            className="visible-xs"
                            href="https://clutch.co/profile/glow-design-agency"
                          >
                            <img
                              className="testimonials__start"
                              src="img/audit/stars.png"
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
        <NextStudy title="Platform for parking in airport" href="/parking" />
      </main>
    </LegacyCaseContainer>
  );
}
