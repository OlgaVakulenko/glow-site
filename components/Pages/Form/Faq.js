import { Transition } from '@headlessui/react';
// import { Disclosure } from '@headlessui/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from '../../Layout';
import cx from 'clsx';
import { track } from '@amplitude/analytics-browser';

function StateIcon({ open = false }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="27.5" stroke="#19191B" />
      <path d="M39.3137 28.0002H16.6863" stroke="#19191B" strokeWidth="2" />
      <path
        d="M27.9988 39.3137V16.6863"
        stroke="#19191B"
        strokeWidth="2"
        className={cx('transition-opacity', {
          ['opacity-0']: open,
        })}
      />
    </svg>
  );
}

function Disclosure({ title, text }) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.style.overflow = 'visible';
      node.style.maxHeight = 'initial';
      const { height } = node.getBoundingClientRect();
      node.style.overflow = '';
      node.style.maxHeight = '0';
      setHeight(height || 500);
    }
  }, [text]);

  return (
    <div className="py-10 text-black">
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => {
          setIsOpen((open) => !open);
          track('Disclosure opened');
        }}
      >
        <div className="pr-4 text-left text-xl font-medium leading-[30px]">
          {title}
        </div>
        <div>
          <StateIcon open={isOpen} />
        </div>
      </button>
      <div
        ref={ref}
        className={cx('max-w-[584px] overflow-hidden')}
        style={{
          maxHeight: isOpen ? height + 'px' : 0 + 'px',
          transition: 'max-height 0.5s ease-in-out',
        }}
      >
        {text}
      </div>
    </div>
  );
}

function P({ children }) {
  return <p className="pb-6 first:pt-4 md:first:pt-0">{children}</p>;
}

export default function Faq() {
  return (
    <Layout className="!max-w-[1006px]">
      <div className="mb-14 text-center font-glow text-heading-h2">
        Frequently Asked Questions
      </div>
      <div className="divide-y divide-black border-t border-b border-black">
        <Disclosure
          title="What does your company stand for?"
          text={
            <>
              <P>
                We stand for bringing complex solutions in simple and
                comprehensible forms. Turn complex digital systems into clean
                and usable products.
              </P>
              <P>
                We care for consistent user flow from the first demo to
                full-scale Omni channel operations. We ensure that for the user
                the first experience pays off and the last never comes.
              </P>
              <P>
                At Glow, we believe that strong relationships and transparent
                communication are the foundation for collaboration success.
              </P>
            </>
          }
        />
        <Disclosure
          title="How much do you charge?"
          text={
            <>
              <P>
                We provide the estimate after the discovery call with the client
                (You can book a call right now).
              </P>
              <P>
                Our pricing model is a flat rate per hour. The rate itself
                depends on the amount of work, time estimate, and number of
                required specialists. 90% of our projects start with a proper
                estimation process that result in a clear cost structure and a
                timeframe. We care for consistent user flow from the first demo
                to full-scale Omni channel operations. We ensure that for the
                user the first experience pays off and the last never comes.
              </P>
            </>
          }
        />
        <Disclosure
          title="Team allocation"
          text={
            <>
              <P>
                Team size may vary due to the scale of the project.
                Nevertheless, we always provide our customers with a product
                designer, a lead designer, and a project manager.
              </P>
              <P>
                We also perform brainstorming sessions with specialists from
                other Glow teams to find best solutions for the complex product
                challenges.
              </P>
            </>
          }
        />
        <Disclosure
          title="How does our cooperation start?"
          text={
            <>
              <P>
                Our expertise and design process helps us minimize the number of
                revisions. To achieve this we conduct thorough discovery
                sessions with the lead designer and project manager to define
                the design and general product direction for future updates.
              </P>
              <P>
                We also bring several test-ready versions for each solution so
                the best one can be determined.
              </P>
              <P>
                There are cases where we suggest new features or the scope of
                work results to be bigger than was expected. In this case, we
                take additional time to agree on new features or to adjust the
                work scope affecting the roadmap and pushing deadlines.
              </P>
            </>
          }
        />
        <Disclosure
          title="What tools do you use?"
          text={
            <>
              <P>
                <strong className="font-medium">Figma Jam</strong> – for
                research, generating ideas, and workshops with clients.
              </P>
              <P>
                <strong className="font-medium">ClickUp</strong> – our project
                management tool to coordinate within the team and meet
                deadlines.
              </P>
              <P>
                <strong className="font-medium">Figma</strong> – our main design
                tool.
              </P>
              <P>
                <strong className="font-medium">Slack</strong> – client & agency
                communication (Each project gets a separate channel).
              </P>
              <P>
                <strong className="font-medium">E-mail</strong> – formal
                communication for updates and mockup approvals.
              </P>
            </>
          }
        />
        <Disclosure
          title="Do you provide only the design for my project, or do the development as well?"
          text={
            <>
              <P>
                We do not provide development but we do every other thing
                related to product design. Also, we always keep in touch with
                developers and make sure that the communication is friendly and
                transparent.
              </P>
            </>
          }
        />
        <Disclosure
          title="Do you guys work only with big companies? We’re an early-stage startup."
          text={
            <>
              <P>
                We work with different kinds of projects and are happy to help
                your startup get its spark. Contact us and we will discuss
                details.
              </P>
            </>
          }
        />
        <Disclosure
          title="Okay, how can we get started?"
          text={
            <>
              <P>
                Just fill a short form here to book an intro discovery call.
              </P>
            </>
          }
        />
      </div>
    </Layout>
  );
}
