import { Disclosure, Transition } from '@headlessui/react';
import cx from 'clsx';
import { useAtom } from 'jotai';
import { themeAtom } from '../lib/theme';
import FooterFormWrapper from '../components/FooterFormWrapper';
import Layout from '../components/Layout';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import Head from 'next/head';
import { getFullTitle } from '../components/HeadTitle';

const faqItems = [
  {
    q: `What does your company stand for?`,
    a: `We stand for bringing complex solutions in simple and comprehensible forms. Turn complex digital systems into clean and usable products. We care for consistent user flow from the first demo to full-scale Omni channel operations. We ensure that for the user the first experience pays off and the last never comes.

    At Glow, we believe that strong relationships and transparent communication are the foundation for collaboration success.`,
  },
  {
    q: `How much do you charge?`,
    a: `We provide the estimate after the discovery call with the client (You can book a call right now).

      Our pricing model is a flat rate per hour. The rate itself depends on the amount of work, time estimate, and number of required specialists. 90% of our projects start with a proper estimation process that result in a clear cost structure and a timeframe.`,
  },
  {
    q: `Team allocation.`,
    a: `Team size may vary due to the scale of the project. Nevertheless, we always provide our customers with a product designer, a lead designer, and a project manager.`,
  },
  {
    q: `How does our cooperation start?`,
    a: `We start with an intro call. After the call and review of all shared materials, we create a project estimation with determined time range, cost, and team size.`,
  },
  {
    q: `What about edits and iterations revision?`,
    a: `Our expertise and design process helps us minimize the number of revisions. To achieve this we conduct thorough discovery sessions with the lead designer and project manager to define the design and general product direction for future updates.
    
    We also bring several test-ready versions for each solution so the best one can be determined.
    
    There are cases where we suggest new features or the scope of work results to be bigger than was expected. In this case, we take additional time to agree on new features or to adjust the work scope affecting the roadmap and pushing deadlines.`,
  },
  {
    q: `What tools do you use?`,
    a: `Figma Jam - for research, generating ideas, and workshops with clients.
    ClickUp - our project management tool to coordinate within the team and meet deadlines.
    
    Figma - our main design tool.
    Slack - client & agency communication (Each project gets a separate channel).
    E-mail - formal communication for updates and mockup approvals.`,
  },
  {
    q: `Do you provide only the design for my project, or do the development as well?`,
    a: `We do not provide development but we do every other thing related to product design. Also, we always keep in touch with developers and make sure that the communication is friendly and transparent.`,
  },
  {
    q: `Do you guys work only with big companies? We’re an early-stage startup.`,
    a: `We work with different kinds of projects and are happy to help your startup get its spark.
    
    Contact us and we will discuss details 😊`,
  },
  {
    q: `Okay, how can we get started?`,
    a: `Just fill a short form here to book an intro discovery call.`,
  },
];

function FaqItem({ question, answer }) {
	const [theme] = useAtom(themeAtom);
	const dark = theme === 'dark';
	
  return (
    <div className={cx("faq-adhoc w-full pb-[31px] pt-[32px]", {'faq-dark': dark})}>
      <Disclosure>
        <Disclosure.Button className="flex w-full justify-between text-left md:flex md:gap-6 xl:flex">
          {({ open }) => (
            <>
              <h3 className="text-next-heading-7 md:w-full md:min-w-[426px] md:max-w-[426px] xl:col-span-5 xl:pr-8">
                {question}
              </h3>
              <div className="flex shrink-0 items-center justify-between overflow-hidden  text-next-body-s md:col-span-5 md:shrink md:items-start md:text-next-body-s xl:col-span-7 xl:text-next-body-m">
                {open ? (
                  <Disclosure.Panel className="hidden whitespace-pre-line md:block xl:w-full xl:max-w-[650px]">
                    {answer}
                  </Disclosure.Panel>
                ) : (
                  <div className="hidden truncate md:block xl:w-full xl:max-w-[650px]">
                    {answer}
                  </div>
                )}
                <div className="ml-6 mt-[2px] h-5 w-5 shrink-0 opacity-50 md:mr-0 xl:mr-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_7301_28184)">
                      <path
                        d="M24 12L4.95391e-07 12"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 24L12 4.95391e-07"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={cx(
                          open && 'opacity-0',
                          'transition-opacity duration-100'
                        )}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7301_28184">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </>
          )}
        </Disclosure.Button>
        <div className="md:hidden">
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="mt-6 whitespace-pre-line text-next-body-s">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </div>
      </Disclosure>
    </div>
  );
}

export function FAQ({ padding, items = faqItems }) {
	const [theme] = useAtom(themeAtom);
  return (
    <div
      className={cx({
        '"mb-12 xl:mb-[88px]" md:mb-[72px]': padding == null,
      })}
    >
      <h2 className="mb-10 text-next-heading-5 md:mb-14 md:text-next-heading-3 xl:mb-20 xl:text-next-heading-2">
        <span className={cx({'white-gradient-text': theme === 'dark'})}>Frequently asked</span> <span className={cx({'ai-text': theme === 'dark'})}>questions</span>
      </h2>
      <div
      // className="border-border-black divide-y border-b border-t"
      >
        {items.map((item, idx) => (
          <FaqItem key={idx} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <div className="pt-[88px] md:pt-[144px]">
      <Head>
        <title>{getFullTitle('Contact')}</title>
        <meta
          name="description"
          content={`Have questions or need design solutions? Contact Glow Team's experts for creative and innovative design services.`}
        ></meta>
      </Head>
      <div className="mb-[52px] md:mb-[72px] xl:mb-[88px]">
        <FooterFormWrapper />
      </div>
      <Layout>
        <FAQ />
      </Layout>
    </div>
  );
}

ContactUs.getLayout = function getLayout(page) {
  return (
    <DefaultLayout footerProps={{ showForm: false }}>{page}</DefaultLayout>
  );
};
