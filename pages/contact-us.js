import { Disclosure, Transition } from '@headlessui/react';
import cx from 'clsx';
import FooterFormWrapper from '../components/FooterFormWrapper';
import Layout from '../components/Layout';
import DefaultLayout from '../components/Pages/Layouts/DefaultLayout';
import Head from 'next/head';
import { getFullTitle } from '../components/HeadTitle';

const items = [
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
  return (
    <div className="w-full py-8">
      <Disclosure>
        <Disclosure.Button className="flex w-full justify-between text-left md:grid md:grid-cols-8 md:gap-8 xl:grid-cols-12">
          {({ open }) => (
            <>
              <h3 className="font-satoshi text-[20px] font-medium leading-[130%] md:col-span-3 md:pr-8 xl:col-span-5">
                {question}
              </h3>
              <div className="flex justify-between text-next-body-s md:col-span-5 md:text-next-body-m xl:col-span-7">
                {open ? (
                  <Disclosure.Panel className="hidden whitespace-pre-line md:block">
                    {answer}
                  </Disclosure.Panel>
                ) : (
                  <div className="hidden truncate md:block">{answer}</div>
                )}
                <div className="ml-6 mr-2 xl:mr-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_7301_28184)">
                      <path
                        d="M24 12L4.95391e-07 12"
                        stroke="#19191B"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 24L12 4.95391e-07"
                        stroke="#19191B"
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
            <Disclosure.Panel className="mt-6 whitespace-pre-line text-[16px] leading-[160%]">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </div>
      </Disclosure>
    </div>
  );
}

function FAQ() {
  return (
    <div className="mb-12 md:mb-[72px] xl:mb-[88px]">
      <h2 className="mb-10 font-glow text-[32px] font-medium leading-[40px] tracking-[-2px] md:mb-14 md:text-[48px] md:leading-[56px] xl:mb-20 xl:text-[56px] xl:leading-[64px]">
        Frequently asked questions
      </h2>
      <div className="divide-border-black border-border-black divide-y border-t">
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
