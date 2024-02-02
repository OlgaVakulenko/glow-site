import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Pages/Policy/Header';
import Section from '../components/Pages/Policy/Section';
import IntroSection from '../components/IntroSection';
import Head from 'next/head';
import { getFullTitle } from '../components/HeadTitle';

const sections = [
  {
    title: '',
    paragraphs: [
      `Glow Design Agency (the “Company”) is`,
      <React.Fragment key="3">
        This privacy policy will explain how our organization uses the personal
        data we collect from you when you use our website -{' '}
        <a href="https://glow.team/" target="_blank" className="text-brand">
          https://glow.team/
        </a>
      </React.Fragment>,
    ],
  },
  {
    title: 'Personal information we collect',
    paragraphs: [
      `When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”`,
      `We collect Device Information using the following technologies:
      - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier.
      - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
      - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, email address, and phone number. We refer to this information as “Order Information.”`,
      `When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.`,
    ],
    className: 'whitespace-break-spaces',
  },
  {
    title: 'What are cookies?',
    paragraphs: [
      `Cookies аге text files placed оп your computer to collect standard lnternet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies ог similar technology.
For further information, visit allaboutcookies.org.`,
    ],
  },
  {
    title: `How do we use cookies?`,
    paragraphs: [
      `Our Company uses cookies in а range of ways to improve your experience оп our website, including understanding how you use our website.`,
    ],
  },
  {
    title: `What types of cookies do we use?`,
    className: 'whitespace-break-spaces',
    paragraphs: [
      `There аге а number of different types of cookies, however, our website uses:
•	Functionality - Our Company uses these cookies so that we recognize you оп our website and remember your previously selected preferences. These could include what language you prefer and location you аге in. А mix of first-party and third-party cookies аге used.
•	Advertising - Our Company uses these cookies to collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address. Our Company sometimes shares some limited aspects of this data with third parties for advertising purposes. We may also share online data collected through cookies with our advertising partners. This means that when you visit another website, you may bе shown advertising based оn your browsing patterns оn our website.`,
    ],
  },
  {
    title: `Privacy Policies of other websites`,
    paragraphs: [
      `The Our Company website may contain links to other websites. Our privacy policy applies only to our website, so if you click оn а link to another website, you should read their privacy policy.`,
    ],
  },
  {
    title: `How do we use your personal information?`,
    className: 'whitespace-break-spaces',

    paragraphs: [
      `We use the Order Information that we collect generally to fulfill any orders placed through the Site (including providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
Communicate with you;
Screen our orders for potential risk or fraud.
When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).

Also, to properly provide services to you, we may share your personal information with our independent contractors, who are also committed to following the rules set forth in this document.
We will not sell, distribute, or otherwise transfer your personal data to third parties, except as specified in this Policy.
We share your Personal Information with third parties to help us use your Personal Information, as described above.

We do not collect or use the information for any illegal or discriminatory purposes. All information that is collected as part of your use of the site or provision of services to you is used solely for the proper provision of services to you and is completely confidential.

Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.`,
    ],
  },
  {
    title: 'How do we store your data?',
    className: 'whitespace-break-spaces',
    paragraphs: [
      `Our Company securely stores your data electronically.
Our company will store data about your orders and personal data for 5 years from the date of termination of cooperation. If this period of time expires, we will delete your data.`,
    ],
  },
  {
    title: `Behavioural advertising`,
    paragraphs: [
      `As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you`,
    ],
  },
  {
    title: `Do not track`,
    paragraphs: [
      `Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.`,
    ],
  },
  {
    title: `Your rights`,
    className: 'whitespace-break-spaces',
    paragraphs: [
      `If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information may be transferred outside of Europe, including the United States, Ukraine.
Our Company would like to make sure you are fully aware of all your data protection rights. Every User is entitled to the following: 
The right to access - You have the right to request our Company for copies of your personal data. We may charge you а small fee for this service. 
The right to rectification - You have the right to request that our Company correct аnу information you believe is inaccurate. You also have the right to request our Company to complete information you believe is incomplete. 
The right to erasure - You have the right to request that our Company erase your personal data, under certain conditions. 
The right to restrict processing - You have the right to request that our Company restrict the processing of your personal data, under certain conditions. 
The right to object to processing - You have the right to object to our Company's processing of your personal data, under certain conditions. 
The right to data portability - You have the right to request that our Company transfer the data that we have collected to another organization, оr directly to you, under certain conditions.`,
    ],
  },
  {
    title: `Data retention`,
    paragraphs: [
      `When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.`,
    ],
  },
  {
    title: `Changes`,
    paragraphs: [
      `We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.`,
    ],
  },
  {
    title: `Contact us`,
    paragraphs: [
      <div key="info">
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e-mail at{' '}
        <a href="mailto:hello@glow.team" className="text-brand">
          hello@glow.team
        </a>
        . or by mail using the details provided below:
        <div>
          <div>Ukraine, Odessa, 65000</div>
          <div>
            <a href="tel:+380994751315">+380 99 47 51 315</a>
          </div>
          <div>34 68 60 28 13</div>
        </div>
      </div>,
    ],
  },
];

export default function Policy() {
  return (
    <div className="pb-[150px]">
      <Head>
        <title>{getFullTitle('Privacy Policy')}</title>
      </Head>
      <Header title="Privacy Policy" />
      <Layout className="grid gap-[60px] pt-0 xl:pt-20">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
            className={section.className}
          />
        ))}
      </Layout>
    </div>
  );
}
