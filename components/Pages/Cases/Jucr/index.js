import React, { useEffect, useState } from 'react';
import LegacyCaseContainer from '../LegacyCaseContainer';
import cx from 'clsx';
import css from './styles.module.scss';
import { useMediaAtom, useMediaAtomClient } from '../../../../lib/agent';

function Stripes() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setToggle((t) => !t);
    }, 1800);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div
        className={cx('jucr2-stripe-m1', {
          '--active': !toggle,
        })}
      />
      <div
        className={cx('jucr2-stripe-m2', {
          '--active': toggle,
        })}
      />
    </>
  );
}

function Phone() {
  const media = useMediaAtomClient();
  const [active, setActive] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    let mounted = true;
    const timers = [];
    const id = setInterval(() => {
      setActive(true);

      setTimeout(() => {
        if (!mounted) return;

        setActive(false);

        setTimeout(() => {
          if (!mounted) return;

          setBtnActive(false);
        }, 200);
      }, 1000);
    }, 3000);

    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return (
    <div
      className="first-frame-phone-wrapper"
      style={{
        transform: active ? 'translate3d(7px, -7px, 0px)' : null,
      }}
    >
      <div style={{ position: 'relative' }}>
        <picture>
          <source
            srcSet="/img/jucr/first_phone-w800.webp, /img/jucr/first_phone-w1600.webp 2x"
            type="image/webp"
          />
          <source srcSet="/img/jucr/first_phone-w800.png, /img/jucr/first_phone-w1600.png 2x" />
          <img
            style={{ width: '100%', height: 'auto' }}
            width={730}
            height={772}
            src="/img/jucr/first_phone-w800.png"
            alt=""
          />
        </picture>
        <picture>
          <source
            srcSet="/img/jucr/first_buttons-w600.webp, /img/jucr/first_buttons-w1200.webp 2x"
            type="image/webp"
          />
          <source srcSet="/img/jucr/first_buttons-w600.png, /img/jucr/first_buttons-w1200.png 2x" />
          <img
            className="first-frame-phone-buttons"
            src="/img/jucr/first_buttons-w600.png"
            style={{
              transform: btnActive ? 'translate3d(1px, -1px, 0px)' : null,
            }}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
}

function Jucr() {
  useEffect(() => {
    let mounted = true;
    const id = setInterval(() => {
      const stripes = Array.from(document.querySelectorAll('.jucr2-stripeX'));

      stripes.forEach((stripe, i) => {
        let k = i % 3;
        let time = k * 500;
        setTimeout(() => {
          if (!mounted) return;

          stripe?.classList.add('--active');

          setTimeout(() => {
            if (!mounted) return;

            stripe?.classList.remove('--active');
          }, time + 1000);
        }, time);
      });
    }, 3000);

    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return (
    <LegacyCaseContainer>
      <div className={css.jucr}>
        <main className="jucr-main">
          {/* Start window*/}
          <section className="section welcome jucr-welcome">
            <div>
              <div className="container">
                <div className="welcome__content">
                  <div className="welcome__left">
                    <h1
                      className="title-big wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      Charge your car without
                      <br />
                      worries
                    </h1>
                    <h2
                      className="welcome__scroll wow fadeInUp"
                      data-wow-duration="1.2s"
                    >
                      Start scrolling 20,381 px
                    </h2>
                  </div>
                  <div className="jucr2-first-shot-bg">
                    <picture>
                      <source
                        srcSet="/img/jucr/first_shot_mobile-w400.webp"
                        media="(max-width: 767.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/first_shot_mobile-w400.png"
                        media="(max-width: 767.5px)"
                      />
                      <source
                        srcSet="/img/jucr/first_shot-w1920.webp"
                        media="(min-width: 768.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/first_shot-w1920.png"
                        media="(min-width: 768.5px)"
                      />
                      <img
                        className="first_frame_image first_frame_shot"
                        src="/img/jucr/first_shot-w1920.png"
                      />
                    </picture>
                    <Stripes />
                    <div className="jucr2-stripeX jucr2-stripeX-1" />
                    <div className="jucr2-stripeX jucr2-stripeX-2" />
                    <div className="jucr2-stripeX jucr2-stripeX-3" />
                    <div className="jucr2-stripeX jucr2-stripeX-4" />
                    <div className="jucr2-stripeX jucr2-stripeX-5" />
                    <div className="jucr2-stripeX jucr2-stripeX-6" />
                    <Phone />
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
                    <li>JUCR</li>
                    <li>Germany</li>
                  </ul>
                </div>
                <div>
                  <h3>Industry</h3>
                  <ul>
                    <li>Charge App</li>
                    <li>Electric Vehicles</li>
                    <li>Car rental</li>
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
                    <li>Stas Kovalsky</li>
                    <li>Vyacheslav Ksendzyk</li>
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
                    Challenge
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    JUCR - fast and convenient access to all charging stations
                    in Europe. Our goal was to design the interface from the
                    very beginning, to do research on what the users need most
                    and to create it inside the application.
                  </p>
                </div>
              </div>
              <div className="challenge-wrapper wow fadeInUp">
                <div className="challenge-wrapper-container">
                  <picture>
                    <source
                      srcSet="/img/jucr/challenge_bg2.png?width=1170&format=webp"
                      type="image/webp"
                    />
                    <source srcSet="/img/jucr/challenge_bg2.png?width=1170" />
                    <img
                      className="challenge-wrapper-bg"
                      src="/img/jucr/challenge_bg2.png?width=1170"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet="/img/jucr/challenge_sticker.png?width=100&format=webp, /img/jucr/challenge_sticker.png?width=200&format=webp 2x"
                      type="image/webp"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/jucr/challenge_sticker.png?width=100, /img/jucr/challenge_sticker.png?width=200 2x"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/jucr/challenge_sticker.png?width=253&format=webp, /img/jucr/challenge_sticker.png?width=506&format=webp 2x"
                      type="image/webp"
                      media="(min-width: 768.5px)"
                    />
                    <source
                      srcSet="/img/jucr/challenge_sticker.png?width=253, /img/jucr/challenge_sticker.png?width=506 2x"
                      media="(min-width: 768.5px)"
                    />
                    <img
                      className="challenge-wrapper-sticker"
                      src="/img/jucr/challenge_sticker.png"
                    />
                  </picture>
                  <div className="challenge-phone-wrapper">
                    <div className="challenge-phone-wrapper-inner">
                      <video
                        style={{ position: 'relative' }}
                        src="/img/jucr/challenge.mp4"
                        autoPlay=""
                        loop=""
                        muted=""
                        playsInline=""
                      />
                      <img
                        className="challenge-phone-mockup"
                        src="/img/jucr/phone.png"
                      />
                    </div>
                  </div>
                  <div className="challenge-wrapper-inner">
                    <div className="challenge-wrapper-inner-title">
                      What are the metrics of success?
                    </div>
                    <div className="challenge-wrapper-inner-text">
                      We believe that the best indicator of an app&apos;s
                      performance is reviews from satisfied users. JUCR was
                      ranked 26th in the AppStore just days after its release.
                    </div>
                    <div className="challenge-wrapper-inner-buttons">
                      <a
                        target="_blank"
                        className="challenge-wrapper-inner-link"
                        rel="noreferrer"
                        href="https://apps.apple.com/us/app/jucr-charge-electric-vehicles/id1575349109"
                      >
                        <span className="challenge-wrapper-inner-link-icon --apple">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
                          </svg>
                        </span>
                        <span>App Store</span>
                      </a>
                      <a
                        target="_blank"
                        className="challenge-wrapper-inner-link"
                        rel="noreferrer"
                        href="https://play.google.com/store/apps/details?id=io.jucr.apps.charging.production"
                      >
                        <span className="challenge-wrapper-inner-link-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19.076 10.067l-2.092-1.209-2.521 3.096 2.569 3.16 2.043-1.18c.853-.492 1.321-1.181 1.321-1.935s-.467-1.439-1.32-1.932zM5.522 21.351l7.651-9.396-7.554-9.294c-.024-.001-.049-.012-.073-.012-1.163 0-1.944.945-1.944 2.353v14c.002 1.395.773 2.335 1.92 2.349zM16.105 8.354L7.497 3.382l6.322 7.779zM13.818 12.746l-6.489 7.971 8.825-5.097z" />
                          </svg>
                        </span>
                        <span>Play Market</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
                    Research
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    &nbsp;In 2020, there were roughly 285,800 public charging
                    stations for electric vehicles in Europe (including Turkey).
                    This figure includes normal chargers up to 22 kilowatts as
                    well as fast charge with over 22 kilowatts. Figures grew
                    consecutively between 2010 and 2020, with prominent
                    increases seen in 2011, 2012, and 2016.
                  </p>
                </div>
              </div>
              <div className="research-media wow fadeInUp">
                <picture>
                  <source srcSet="/img/jucr/research_mobile-w400.png, /img/jucr/research_mobile-w800.png 2x" />
                  <source
                    srcSet="/img/jucr/research_mobile-w400.webp, /img/jucr/research_mobile-w800.png 2x"
                    type="image/webp"
                  />
                  <img
                    className="visible-xs"
                    src="/img/jucr/research_mobile-w400.png"
                  />
                </picture>
              </div>
            </div>
          </section>
          {/* Hi Fidelity Frame */}
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
                    High Fidelity
                    <br />
                    Wireframes
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Our first task was to conduct a research and think about
                    which chips are most needed by users, then, do some tests.
                    Of course, we started with wireframes, created a clickable
                    prototype and went to show the client how his future
                    application would work and protect his search. Thanks to
                    wireframes, we have saved a tremendous amount of time and
                    money.
                  </p>
                </div>
              </div>
              <div className="visible-xs wow fadeInUp">
                <picture>
                  <source
                    srcSet="/img/jucr/hifi_mobile-w400.webp, /img/jucr/hifi_mobile-w800.webp 2x"
                    media="(max-width: 767.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/hifi_mobile-w400.png, /img/jucr/hifi_mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <img src="/img/jucr/hifi_mobile-w400.png" />
                </picture>
              </div>
              <div className="owl-carousel owl-carousel-hifi owl-theme">
                <picture>
                  <source
                    srcSet="/img/jucr/hifi_1-w1140.webp, /img/jucr/hifi_1-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/hifi_1-w1140.png, /img/jucr/hifi_1-w2280.png 2x"
                    media="(min-width: 768.5px)"
                  />
                  <img draggable="false" src="/img/jucr/hifi_1-w1440.png" />
                </picture>
                <picture>
                  <source
                    srcSet="/img/jucr/hifi_2-w1140.webp, /img/jucr/hifi_2-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/hifi_2-w1140.png, /img/jucr/hifi_2-w2280.png 2x"
                    media="(min-width: 768.5px)"
                  />
                  <img draggable="false" src="/img/jucr/hifi_2-w1440.png" />
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
                    className="title-big"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Colors
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Before coming to us, the client had already created his
                    brand book, had the logo, colors and more. We had to use
                    everything that the client already has and keep in mind that
                    this application is audience friendly. It must be
                    comfortable for a young guy who is a digital native and
                    loves bright colors as well as for a woman of age who has
                    poor eyesight and does not often use such products
                  </p>
                </div>
              </div>
              <div>
                <div className="color_row_container">
                  <div className="color_row_title">Primary Colors</div>
                  <div className="color_row">
                    <picture>
                      <source
                        srcSet="/img/jucr/colors_primary_mobile-w400.webp, /img/jucr/colors_primary_mobile-w800.webp 2x"
                        media="(max-width: 767.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_primary_mobile-w400.png, /img/jucr/colors_primary_mobile-w800.png 2x"
                        media="(max-width: 767.5px)"
                      />
                      <source
                        srcSet="/img/jucr/colors_primary-w1140.webp, /img/jucr/colors_primary-w2280.webp 2x"
                        media="(min-width: 768.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_primary-w1140.png, /img/jucr/colors_primary-w2280.png 2x"
                        media="(min-width: 768.5px)"
                      />
                      <img src="/img/jucr/colors_primary-w1140.png" />
                    </picture>
                  </div>
                </div>
                <div className="color_row_container">
                  <div className="color_row_title">Gray Colors</div>
                  <div className="color_row">
                    <picture>
                      <source
                        srcSet="/img/jucr/colors_gray_mobile-w400.webp, /img/jucr/colors_gray_mobile-w800.webp 2x"
                        media="(max-width: 767.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_gray_mobile-w400.png, /img/jucr/colors_gray_mobile-w800.png 2x"
                        media="(max-width: 767.5px)"
                      />
                      <source
                        srcSet="/img/jucr/colors_gray-w1140.webp, /img/jucr/colors_gray-w2280.webp 2x"
                        media="(min-width: 768.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_gray-w1140.png, /img/jucr/colors_gray-w2280.png 2x"
                        media="(min-width: 768.5px)"
                      />
                      <img src="/img/jucr/colors_gray-w1140.png" />
                    </picture>
                  </div>
                </div>
                <div className="color_row_container">
                  <div className="color_row_title">Extra Colors</div>
                  <div className="color_row">
                    <picture>
                      <source
                        srcSet="/img/jucr/colors_extra_mobile-w400.webp, /img/jucr/colors_extra_mobile-w800.webp 2x"
                        media="(max-width: 767.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_extra_mobile-w400.png, /img/jucr/colors_extra_mobile-w800.png 2x"
                        media="(max-width: 767.5px)"
                      />
                      <source
                        srcSet="/img/jucr/colors_extra-w1140.webp, /img/jucr/colors_extra-w2280.webp 2x"
                        media="(min-width: 768.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_extra-w1140.png, /img/jucr/colors_extra-w2280.png 2x"
                        media="(min-width: 768.5px)"
                      />
                      <img src="/img/jucr/colors_extra-w1140.png" />
                    </picture>
                  </div>
                </div>
                <div className="color_row_container">
                  <div className="color_row_title">Gradients</div>
                  <div className="color_row">
                    <picture>
                      <source
                        srcSet="/img/jucr/colors_gradients_mobile-w400.webp, /img/jucr/colors_gradients_mobile-w800.webp 2x"
                        media="(max-width: 767.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_gradients_mobile-w400.png, /img/jucr/colors_gradients_mobile-w800.png 2x"
                        media="(max-width: 767.5px)"
                      />
                      <source
                        srcSet="/img/jucr/colors_gradients-w1140.webp, /img/jucr/colors_gradients-w2280.webp 2x"
                        media="(min-width: 768.5px)"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/jucr/colors_gradients-w1140.png, /img/jucr/colors_gradients-w2280.png 2x"
                        media="(min-width: 768.5px)"
                      />
                      <img src="/img/jucr/colors_gradients-w1140.png" />
                    </picture>
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
                    As we already said, the client had his own brand book and we
                    must use his colors, font and logo. We also used the
                    Montserrat font that the client had already chosen in
                    advance. It is modern, simple and at the same time stylish.
                  </p>
                </div>
              </div>
              <picture>
                <source
                  srcSet="/img/jucr/typography_mobile-w400.webp, /img/jucr/typography_mobile-w800.webp 2x"
                  media="(max-width: 767.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/jucr/typography_mobile-w400.png, /img/jucr/typography_mobile-w800.png 2x"
                  media="(max-width: 767.5px)"
                />
                <source
                  srcSet="/img/jucr/typography-w1140.webp, /img/jucr/typography-w2280.webp 2x"
                  media="(min-width: 768.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/jucr/typography-w1140.png, /img/jucr/typography-w2280.png 2x"
                  media="(min-width: 768.5px)"
                />
                <img
                  className="case-section__image wow fadeInUp"
                  src="/img/jucr/typography-w1440.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </picture>
            </div>
          </section>
          {/* Profile*/}
          <section id="profile-section" className="section profile">
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Profile
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Profile is a place where you can see basic information about
                    your activity in the app: how many times you have charged,
                    how much you helped the environment by using the app, add or
                    remove your cars, select coupons and much more.
                  </p>
                </div>
              </div>
              <div id="hammerContainer" className="wow fadeInUp">
                <div className="owl-carousel owl-carousel-profile owl-theme">
                  <picture>
                    <source
                      srcSet="/img/jucr/profile_1-w1140.webp, /img/jucr/profile_1-w2280.webp 2x"
                      media="(min-width: 768px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/jucr/profile_1-w1140.png, /img/jucr/profile_1-w2280.png 2x"
                      media="(min-width: 768px)"
                    />
                    <img
                      draggable="false"
                      src="/img/jucr/profile_1-w1440.png"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet="/img/jucr/profile_2-w1140.webp, /img/jucr/profile_2-w2280.webp 2x"
                      media="(min-width: 768px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/jucr/profile_2-w1140.png, /img/jucr/profile_2-w2280.png 2x"
                      media="(min-width: 768px)"
                    />
                    <img
                      draggable="false"
                      src="/img/jucr/profile_2-w1440.png"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet="/img/jucr/profile_3-w1140.webp, /img/jucr/profile_3-w2280.webp 2x"
                      media="(min-width: 768px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/jucr/profile_3-w1140.png, /img/jucr/profile_3-w2280.png 2x"
                      media="(min-width: 768px)"
                    />
                    <img
                      draggable="false"
                      src="/img/jucr/profile_3-w1440.png"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          {/* Small Notification Center*/}
          <section
            id="snc-section"
            className="section small-notification-center"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Smart Notification Center
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Do you often sit by your car, waiting for it to charge? We
                    think that instead of waiting on the spot for a couple of
                    hours you can go for a walk, use a coupon that the
                    application gives you and wait for the notification when
                    your car gets fully charged, also you can receive other
                    useful notifications.
                  </p>
                </div>
              </div>
              <div className="wow fadeInUp">
                <video src="/img/jucr/smart.mp4" autoPlay="" loop="" muted="" />
              </div>
            </div>
          </section>
          {/* Statistics*/}
          <section
            id="statistics-animation-section"
            className="section case-section statistics-notification-center"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Statistics Animation
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Are you concerned with deforestation? Maybe your carbon
                    footprint bothers you. Don’t worry, we’ll give you a clear
                    metric of how much carbon you saved. If it was not for you,
                    all this carbon could have done so much damage to our
                    planet, good job!
                  </p>
                </div>
              </div>
              <div className="statistic-video-container wow fadeInUp">
                <picture>
                  <source
                    srcSet="/img/jucr/s_shot_mobile-w400.png, /img/jucr/s_shot_mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/s_shot_mobile-w400.webp, /img/jucr/s_shot_mobile-w800.webp 2x"
                    type="image/webp"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/s_shot-w1140.webp, /img/jucr/s_shot-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/s_shot-w1140.png, /img/jucr/s_shot-w2280.png 2x"
                    media="(min-width: 768px)"
                  />
                  <img
                    className="jucr-bg-shot"
                    src="/img/jucr/s_shot-w1440.png"
                    data-wow-duration="0.7s"
                    data-wow-delay="0.2s"
                  />
                </picture>
                <video
                  className="statistic-video"
                  src="/img/jucr/statistic.mp4"
                  autoPlay=""
                  loop=""
                  muted=""
                />
              </div>
            </div>
          </section>
          {/* Charging Process */}
          <section
            id="charging-process-section"
            className="section case-section charging-process"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Charging Process
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Simplicity is one of our core values and we tried to reflect
                    it here as well. The visualization of the Charging Process
                    is simple and understandable. As a bonus, you are offered
                    various coupons to make your waiting time more pleasant. And
                    you don&apos;t have to check the charging screen all the
                    time.
                  </p>
                </div>
              </div>
              <div className="wow fadeInUp">
                <picture>
                  <source
                    srcSet="/img/jucr/charging_process_mobile-w400.png, /img/jucr/charging_process_mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/charging_process_mobile-w400.webp, /img/jucr/charging_process_mobile-w800.webp 2x"
                    type="image/webp"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/charging_process-w1140.webp, /img/jucr/charging_process-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/charging_process-w1140.png, /img/jucr/charging_process-w2280.png 2x"
                    media="(min-width: 768.5px)"
                  />
                  <img
                    className="case-section__image wow fadeInUp"
                    src="/img/jucr/charging_process-w1440.png"
                    data-wow-duration="0.7s"
                    data-wow-delay="0.2s"
                  />
                </picture>
              </div>
            </div>
          </section>
          {/* My Coupons */}
          <section
            id="my-coupons-section"
            className="section case-section my-coupons"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    My Coupons
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    We have mentioned coupons a couple times, but what are they?
                    JUCR cares about you and don&apos;t want for you to get
                    bored. That&apos;s why they gift you with special offers
                    near your location while your car is charging. In winter a
                    Warm starbucks coffee is waiting for you.
                  </p>
                </div>
              </div>
              <div className="wow fadeInUp">
                <picture>
                  <source
                    srcSet="/img/jucr/my_coupons_mobile-w400.png, /img/jucr/my_coupons_mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/my_coupons_mobile-w400.webp, /img/jucr/my_coupons_mobile-w800.webp 2x"
                    type="image/webp"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/my_coupons-w1140.webp, /img/jucr/my_coupons-w2280.webp 2x"
                    media="(min-width: 768px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/my_coupons-w1140.png, /img/jucr/my_coupons-w2280.png 2x"
                    media="(min-width: 768px)"
                  />
                  <img
                    className="case-section__image wow fadeInUp"
                    src="/img/jucr/my_coupons-w1440.png"
                    data-wow-duration="0.7s"
                    data-wow-delay="0.2s"
                  />
                </picture>
              </div>
            </div>
          </section>
          {/* Charger Animations */}
          <section
            id="charger-animation-section"
            className="section overflow-section charger-animation"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Charger Animation
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    Micro-attractions may sound complicated and superfluous, but
                    we disagree. All the small thing combined make the user
                    experience better, they evoke positive emotions in users and
                    helps them remember you and come back to your product. They
                    must always be sure of what will happen if they click here
                    or there.
                  </p>
                </div>
              </div>
              <div className="statistic-video-container wow fadeInUp">
                <picture>
                  <source
                    srcSet="/img/jucr/charge_shot_mobile-w400.png, /img/jucr/charge_shot_mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/charge_shot_mobile-w400.webp, /img/jucr/charge_shot_mobile-w800.webp 2x"
                    type="image/webp"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/charge_shot-w1140.webp, /img/jucr/charge_shot-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/charge_shot-w1140.png, /img/jucr/charge_shot-w2280.png 2x"
                    media="(min-width: 768.5px)"
                  />
                  <img
                    className="jucr-bg-shot"
                    src="/img/jucr/charge_shot-w1440.png"
                    data-wow-duration="0.7s"
                    data-wow-delay="0.2s"
                  />
                </picture>
                <video
                  className="statistic-video"
                  src="/img/jucr/charge.mp4"
                  autoPlay=""
                  loop=""
                  muted=""
                />
              </div>
            </div>
          </section>
          {/* Occupied Animations */}
          <section
            id="occupied-animation-section"
            className="section overflow-section occupied-animation"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Occupied Animation
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    What if you arrive and the station is busy? Happens from
                    time to time, right? We’ve heard you and solved this
                    problem. As always, the coolest decisions lie on the surface
                    and come to mind at the very last moment. What if you could
                    get a notification when the station gets free and drive
                    there without having to wait in line? Cool and simple,
                    isn&apos;t it?
                  </p>
                </div>
              </div>
              <div className="statistic-video-container wow fadeInUp">
                <picture>
                  <source
                    srcSet="/img/jucr/charge_shot_mobile-w400.png, /img/jucr/charge_shot_mobile-w800.png 2x"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/charge_shot_mobile-w400.webp, /img/jucr/charge_shot_mobile-w800.webp 2x"
                    type="image/webp"
                    media="(max-width: 767.5px)"
                  />
                  <source
                    srcSet="/img/jucr/occupied_shot-w1140.webp, /img/jucr/occupied_shot-w2280.webp 2x"
                    media="(min-width: 768.5px)"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/jucr/occupied_shot-w1140.png, /img/jucr/occupied_shot-w2280.png 2x"
                    media="(min-width: 768.5px)"
                  />
                  <img
                    className="jucr-bg-shot"
                    src="/img/jucr/occupied_shot-w1440.png"
                    data-wow-duration="0.7s"
                    data-wow-delay="0.2s"
                  />
                </picture>
                <video
                  className="statistic-video"
                  src="/img/jucr/occupied.mp4"
                  autoPlay=""
                  loop=""
                  muted=""
                />
              </div>
            </div>
          </section>
          {/* Onboarding Animations */}
          <section
            id="onboarding-animation"
            className="section overflow-section onboarding-animation"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Onboarding Animation
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    The learning process is just as important as anything else,
                    you may find the application pretty simple, but the user may
                    still need an introduction to it. For all audiences, the
                    best way is illustration and animation, any person, of any
                    age, will understand what is happening here and will never
                    close your application without trying it.
                  </p>
                </div>
              </div>
              <div className="statistic-video-container onboarding-slider-container wow fadeInUp">
                <div className="statistic-video-backdrop-wrapper">
                  <picture>
                    <source
                      srcSet="/img/jucr/charge_shot_mobile-w400.png, /img/jucr/charge_shot_mobile-w800.png 2x"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/jucr/charge_shot_mobile-w400.webp, /img/jucr/charge_shot_mobile-w800.webp 2x"
                      type="image/webp"
                      media="(max-width: 767.5px)"
                    />
                    <source
                      srcSet="/img/jucr/onboarding_shot-w1140.webp, /img/jucr/onboarding_shot-w2280.webp 2x"
                      media="(min-width: 768.5px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/jucr/onboarding_shot-w1140.png, /img/jucr/onboarding_shot-w2280.png 2x"
                      media="(min-width: 768.5px)"
                    />
                    <img src="/img/jucr/onboarding_shot-w1140.png" />
                  </picture>
                </div>
                <img
                  className="statistic-video onboarding-slider-phone"
                  src="/img/jucr/phone.png"
                />
                <div className="statistic-video onboarding-slider-slide">
                  <div className="owl-carousel owl-theme owl-carousel-onboarding">
                    <img className="" src="/img/jucr/onboarding_1.png" />
                    <img className="" src="/img/jucr/onboarding_2.png" />
                    <img className="" src="/img/jucr/onboarding_3.png" />
                    <img className="" src="/img/jucr/onboarding_4.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-carousel owl-theme dots-container" />
          </section>
          {/* Design System */}
          <section
            id="design-system-section"
            className="section case-section onboarding-animation"
          >
            <div className="container">
              <div className="inline-header inline-header-midle">
                <div className="inline-header__item inline-header__left">
                  <h1
                    className="title-big wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.1s"
                  >
                    Design System
                  </h1>
                </div>
                <div className="inline-header__item inline-header__right">
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.2s"
                  >
                    You believe that you don&apos;t need a design system? Let us
                    present you the counter point: Using design systems saves
                    you a lot of time and money right away but they also help
                    you save resources in the future. Not only that, but such
                    system will speed up the development process of new chips
                    and screens for your product. We develop a design system for
                    all of our products.
                  </p>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp container" style={{ padding: 0 }}>
              <picture>
                <source
                  srcSet="/img/jucr/design-system-mobile-w400.webp, /img/jucr/design-system-mobile-w800.webp 2x"
                  media="(max-width: 767.5px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/jucr/design-system-mobile-w400.png, /img/jucr/design-system-mobile-w800.png 2x"
                  media="(max-width: 767.5px)"
                />
                <source
                  srcSet="/img/jucr/design-system-w1140.webp, /img/jucr/design-system-w2280.webp 2x"
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcSet="/img/jucr/design-system-w1140.png, /img/jucr/design-system-w2280.png 2x"
                  media="(min-width: 768px)"
                />
                <img
                  className="jucr-bg-shot"
                  src="/img/jucr/design-system-w1440.png"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.2s"
                />
              </picture>
            </div>
          </section>
          {/* Next*/}
          <section className="section next">
            <div className="container">
              <a className="next__body" href="/fleet">
                <div className="next__left">
                  <h2>Next Study</h2>
                  <p>Fleet manager to control your equipment</p>
                </div>
                <div className="next__right">
                  <img src="img/arrow-right-primary.svg" />
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </LegacyCaseContainer>
  );
}

export default React.memo(Jucr);
