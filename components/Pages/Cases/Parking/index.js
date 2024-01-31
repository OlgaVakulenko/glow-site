import Head from 'next/head';
import { getFullDescription, getFullTitle } from '../../../HeadTitle';
import LegacyCaseContainer from '../LegacyCaseContainer';
import NextStudy from '../NextStudy';

export default function Parking() {
  return (
    <LegacyCaseContainer>
      <Head>
        <title>
          {getFullTitle('Automated Airport Parking Platform Development')}
        </title>
        <meta
          name="description"
          content={getFullDescription(
            'Glow Team developed a user-friendly platform for efficient airport parking management, focusing on automation and intuitive UI design.'
          )}
        />
      </Head>
      <main className="parking">
        {/* Start window*/}
        <section className="section welcome">
          <div className="container">
            <div className="welcome__content">
              <div className="welcome__left">
                <h1 className="title-big wow fadeInUp" data-wow-duration="1.2s">
                  Platform for parking in airport
                </h1>
                <h2
                  className="welcome__scroll wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Start Scrolling 20180px
                </h2>
              </div>
              <div
                className="welcome__right wow fadeInUp"
                data-wow-duration="1.2s"
              >
                <div className="welcome__big-image">
                  <div className="welcome__small-image" />
                </div>
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
                  <li>Parking Systems</li>
                </ul>
              </div>
              <div>
                <h3>Industry</h3>
                <ul>
                  <li>Parking</li>
                </ul>
              </div>
              <div>
                <h3>Services</h3>
                <ul>
                  <li>User Experience</li>
                  <li>User Interface</li>
                </ul>
              </div>
              <div>
                <h3>Deliverables</h3>
                <ul>
                  <li>Web Platform</li>
                  <li>Mobile Version</li>
                  <li>UI Kit</li>
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
                  Our goal was to develop a platform that will automatize the
                  parking routine. It is possible with the help of a device that
                  would show which parking spaces are free and which are
                  occupied. At the beginning of our work we faced the following
                  problems:
                </p>
                <ul
                  className="text challenge__list wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  <li>
                    Manual management is very troublesome since many people use
                    the system every day.
                  </li>
                  <li>
                    People should be able to navigate the parking scheme easily
                    but it is very complex.
                  </li>
                  <li>
                    It is hard to control a large number of devices manually.
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="challenge__title">We’ve built a simple plan:</h2>
          </div>
          <hr className="line" />
          <div className="container">
            {/* Hidden on smaller resolution*/}
            <div className="hidden-sm">
              <div className="flex--15 flex">
                <div className="col-33">
                  <div className="lists">
                    <div className="lists__box">
                      <ul className="lists__item">
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.7s"
                          data-wow-delay="0.2s"
                        >
                          Research the parking industry to find other problems
                          and brainstorm solutions to them.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-33">
                  <div className="lists">
                    <div className="lists__box">
                      <ul className="lists__item">
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.7s"
                          data-wow-delay="0.2s"
                        >
                          Create wireframes to quickly test ideas before working
                          on pixel-perfect design.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-33">
                  <div className="lists">
                    <div className="lists__box">
                      <ul className="lists__item">
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.7s"
                          data-wow-delay="0.2s"
                        >
                          Create design system to speed up development of new
                          features
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="challenge__image wow fadeInUp"
                src="/img/parking/challenge.png"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
            </div>
            {/* Visible on smaller resolution*/}
            <div className="visible-sm">
              <div className="lists">
                <div className="lists__box">
                  <ul className="lists__item">
                    <li>
                      Align our understanding of the product through several
                      Discovery Sessions
                    </li>
                  </ul>
                  <ul className="lists__item">
                    <li>
                      Fill and review strategic canvases; review and confirm
                      them with stakeholders
                    </li>
                  </ul>
                  <ul className="lists__item">
                    <li>
                      Deliver their visual identity, and continue to iterate on
                      product enhancements with Parking Systems
                    </li>
                  </ul>
                </div>
              </div>
              <img
                className="challenge__image wow fadeInUp"
                src="/img/parking/challenge-m.png"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              />
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
                  Not so long ago, parking had nothing to do with innovations.
                  It is easy to understand since the parking industry remained
                  unchanged for many years. It is divided into two segments:
                  on-street parking (i.e. parking meters) and off-street parking
                  (i.e. surface lots and garages).
                </p>
              </div>
            </div>
            <div
              className="research__data wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              <div>
                <h3>$11bn</h3>
                <p>Total Revenue in 2019</p>
              </div>
              <div>
                <h3>19 745</h3>
                <p>Number of Businesses</p>
              </div>
              <div>
                <h3>3.3%</h3>
                <p>Annual Growth 2014-2019</p>
              </div>
              <div>
                <h3>156 322</h3>
                <p>Industry Employment</p>
              </div>
            </div>
            <div
              className="research__right-text wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              The latter represents nearly two-thirds of the industry’s revenue
              in the United States and is primarily owned by private
              enterprises. In theory, off-street parking is more likely to
              change and innovate.
            </div>
            <img
              className="hidden-sm research__image-first wow fadeInUp"
              src="/img/parking/research-1.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm research__image-first wow fadeInUp"
              src="/img/parking/research-1-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <i
              className="research__image-description wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              Revenue in Billions
            </i>
            <div
              className="research__right-text wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              There are over 40,000 surface parking lots and garages in the US.
              They are owned by REITs, commercial real estate developers, and
              even some cities. With rare exceptions, these asset owners mostly
              rely on third parties that provide access and revenue control
              solutions to manage their properties.
            </div>
            <img
              className="hidden-sm research__image-second wow fadeInUp"
              src="/img/parking/research-2.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm research__image-second wow fadeInUp"
              src="/img/parking/research-2-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
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
                  We have prepared a set of wireframes to demonstrate our
                  potential users the basic functionality of the system. We
                  began by defining the structure and information architecture.
                  This usually allows saving a lot of time before moving to
                  pixel-perfect design at the initial stage.
                </p>
              </div>
            </div>
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/wireframes.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/wireframes-m.png"
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
                  We have chosen a light and soft color scheme to make the
                  interface look airy. It looks good not only on PC but also on
                  tablets. Blue is used as the main color for highlights and
                  calls to action. As for the backgrounds, we used lighter
                  versions of the main colors.
                </p>
              </div>
            </div>
            <div className="colors__wrapper">
              <img
                className="case-section__image wow fadeInUp"
                src="/img/parking/colors.png"
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
                  We used San Francisco, the sans-serif typeface from macOS, to
                  offer unmatched legibility, consistency, and performance on
                  our website. It looks great on tablets as well.
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
              src="/img/parking/typography.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/typography-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Icons*/}
        <section className="section case-section icons">
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
                  We have chosen filled-in icons for this product. They are
                  easier to identify on the low-resolution screens and tablets.
                  The icons can be used as navigation items and action buttons.
                </p>
              </div>
            </div>
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/icons.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/icons-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Anytime*/}
        <section className="section case-section anytime">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Anytime anywhere
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  Our users can use the product at any time of the day under
                  different lighting conditions. It is possible, because we have
                  made a dark version of the interface to prevent eye strain
                  after dark.
                </p>
              </div>
            </div>
          </div>
          <div
            className="anytime__image-block wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="0.1s"
          >
            <div className="container">
              <div className="g-before-after" id="before-after">
                <img
                  src="/img/parking/anytime-black.png"
                  data-aftersrc="/img/parking/anytime-white.png"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Bookings*/}
        <section className="section case-section bookings">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  All bookings
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The main goal of this product is to automate the processes of
                  parking spaces monitoring and manage new bookings. Every
                  reservation offers full information about the driver, car,
                  date, place, and booking status. Each booking has a unique
                  number. Users can track the statuses of parking spaces using
                  the number.
                </p>
              </div>
            </div>
            <div
              className="wow fadeInUp"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            />
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/bookings.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/bookings-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Details*/}
        <section className="section case-section details">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Booking details
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  This screen offers all the information about the reservation.
                  The dispatcher can see everything they need, including booking
                  details, status and the payment info. On this page, you can
                  add extra services for your reservation, such as car wash,
                  interior cleaning, or electric car charging. Manager can
                  choose any worker for this service and set the date and time
                  for its completion.
                </p>
              </div>
            </div>
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/details.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/details-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Schedule*/}
        <section className="section case-section schedule">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Service schedule
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  If the client needs additional services such as interior
                  cleaning, the Parking Service will take care of it. The
                  manager should be able to control the schedule of all services
                  for every reservation. In order to achieve this, we have made
                  a convenient calendar. It shows all the scheduled services.
                  Each type of service has its own color, which allows getting
                  the information very quickly.
                </p>
              </div>
            </div>
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/schedule.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/schedule-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Space*/}
        <section className="section case-section space">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Parking space overview
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  In addition, the dispatcher should be able to track the
                  congestion of the parking lot, the available parking spaces,
                  and the parking spaces with the expired rental. If the client
                  fails to pick up their car on time, the manager would contact
                  them to extend the parking space reservation. If the manager
                  needs to get the full booking details, they can click on the
                  parking space to see the sidebar. It allows viewing the
                  booking details right on the same page.
                </p>
              </div>
            </div>
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/space.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/space-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Grid*/}
        <section className="section case-section grid">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  A one-size-fits-all grid
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  The development process should be quick and agile. That is why
                  we have created the design based on the classic 12-column
                  grid. It is a simple, popular, and effective solution.
                </p>
              </div>
            </div>
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/grid.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/grid-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Space*/}
        <section className="section case-section space">
          <div className="container">
            <div className="inline-header inline-header-midle">
              <div className="inline-header__item inline-header__left">
                <h2
                  className="title-big wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.1s"
                >
                  Parking space overview
                </h2>
              </div>
              <div className="inline-header__item inline-header__right">
                <p
                  className="text wow fadeInUp"
                  data-wow-duration="1.2s"
                  data-wow-delay="0.2s"
                >
                  In addition, the dispatcher should be able to track the
                  congestion of the parking lot, the available parking spaces,
                  and the parking spaces with the expired rental. If the client
                  fails to pick up their car on time, the manager would contact
                  them to extend the parking space reservation. If the manager
                  needs to get the full booking details, they can click on the
                  parking space to see the sidebar. It allows viewing the
                  booking details right on the same page.
                </p>
              </div>
            </div>
            <img
              className="hidden-sm case-section__image wow fadeInUp"
              src="/img/parking/space.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/space-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
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
                  Finally, yet importantly, we have created a UI Kit with a
                  large number of elements. It is aimed at simplifying and
                  speeding up further work on the product. It will preserve the
                  consistent visual style for the entire product.
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
              src="/img/parking/components.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
            <img
              className="visible-sm case-section__image wow fadeInUp"
              src="/img/parking/components-m.png"
              data-wow-duration="0.7s"
              data-wow-delay="0.2s"
            />
          </div>
        </section>
        {/* Next*/}
        <NextStudy title="Zero-emissions car rental" href="/beast" />
      </main>
    </LegacyCaseContainer>
  );
}
