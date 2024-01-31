import Link from 'next/link';
import React from 'react';
import Header from '../components/Pages/Policy/Header';
import Section from '../components/Pages/Policy/Section';
import Layout from '../components/Layout';
import Head from 'next/head';
import { getFullTitle } from '../components/HeadTitle';

const sections = [
  {
    title: 'Overview',
    paragraphs: [
      `This website is operated by Glow Design Agency. Throughout the site, the terms “we”, “us” and “our” refer to Glow Design Agency. Glow Design Agency offers this website, including all information, tools, and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
Your access and use of the Services constitutes your agreement to be bound by these Terms.
Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.

The Services and all rights therein are and shall remain our Glow Design Agency’s property.`,
    ],
  },
  {
    section: `Section 1`,
    title: `Terms of using this site and services terms `,
    paragraphs: [
      `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.

You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).

You must not transmit any worms or viruses or any code of a destructive nature.

A breach or violation of any of the Terms will result in an immediate termination of your Services.`,
    ],
  },
  {
    section: `Section 2`,
    title: 'General conditions',
    paragraphs: [
      `We reserve the right to refuse service to anyone for any reason at any time.

You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.

You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.

The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.`,
    ],
  },
  {
    section: `Section 3`,
    title: 'Accuracy, completeness and timelines of information',
    paragraphs: [
      `We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.

This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.`,
    ],
  },
  {
    section: `Section 4`,
    title: `Modifications to the service and prices`,
    paragraphs: [
      `Prices for our products are subject to change without notice.

We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.

We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.`,
    ],
  },
  {
    section: `Section 5`,
    title: 'Products or services',
    paragraphs: [
      `We have made every effort to display as accurately as possible the colors and images of our products that appear at the site. We cannot guarantee that your computer monitor's display of any color will be accurate.
We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.

We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.`,
    ],
  },
  {
    section: `Section 6`,
    title: 'Optional tools',
    paragraphs: [
      `We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.

You agree that our service functions as is and as available.
You acknowledge and agree that we provide access to such and any tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.

Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

We may also, in the future, offer new Services and/or features through the website (including, the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service.`,
    ],
  },
  {
    section: `Section 7`,
    title: 'Third-party links',
    paragraphs: [
      `As we use third parties services, we have no control over these services.
Certain content, products and Services available via our Service may include materials from third-parties.

Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties.

We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.`,
    ],
  },
  {
    section: `Section 8`,
    title: `User comments, feedback and other submissions`,
    className: `whitespace-break-spaces`,
    paragraphs: [
      `If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.

We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
      
You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.`,
    ],
  },
  {
    section: `Section 9`,
    title: 'Personal information',
    paragraphs: [
      <React.Fragment key="0">
        Your submission of personal information through this site or other ways
        of communication is governed by our Privacy Policy. To view our Privacy
        Policy, please see{' '}
        <Link href="/privacy-policy" className="text-brand">
          link to Privacy Policy.
        </Link>
      </React.Fragment>,
    ],
  },
  {
    section: `Section 10`,
    title: 'Errors, inaccuracies and omissions',
    paragraphs: [
      `Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, availability, etc. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).

We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.`,
    ],
  },
  {
    section: `Section 11`,
    title: 'Prohibited uses',
    paragraphs: [
      `In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.`,
    ],
  },
  {
    section: `Section 12`,
    title: `Disclaimer of warranties; limitation of liability`,
    className: `whitespace-break-spaces`,
    paragraphs: [
      `We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.

We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.

You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and Services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied.

In no case shall Glow Design Agency, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility.

Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.`,
    ],
  },
  {
    section: `Section 13`,
    title: `Indemnification`,
    paragraphs: [
      `You agree to indemnify, defend and hold harmless Glow Design Agencyand our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.`,
    ],
  },
  {
    section: `Section 14`,
    title: `Severability`,
    paragraphs: [
      `In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.`,
    ],
  },
  {
    section: `Section 15`,
    title: `Termination`,
    paragraphs: [
      `The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).`,
    ],
  },
  {
    section: `Section 16`,
    title: `Entire Agreement`,
    paragraphs: [
      `The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.

These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.`,
    ],
  },
  {
    section: `Section 17`,
    title: `Governing law`,
    paragraphs: [
      `These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United States.`,
    ],
  },
  {
    section: `Section 18`,
    title: `Changes to Terms of Service`,
    paragraphs: [
      `You can review the most current version of the Terms of Service at any time at this page.

We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.`,
    ],
  },
  {
    section: `Section 19`,
    title: `Contact information`,
    paragraphs: [
      `Questions about the Terms of Service should be sent to us at hello@glow.team.`,
      <React.Fragment key="1">
        <strong className="font-medium">
          Our contact information is posted below:
        </strong>
        <div>
          <div>Glow Design Agency</div>
          <div>
            <a href="mailto:hello@glow.team" className="text-brand">
              hello@glow.team
            </a>
          </div>
          <div>
            <div>Ukraine, Odessa, 65000</div>
            <div>
              <a href="tel:+380994751315">+380 99 47 51 315</a>
            </div>
            <div>34 68 60 28 13</div>
          </div>
        </div>
      </React.Fragment>,
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="pb-[150px]">
      <Head>
        <title>{getFullTitle('Terms of Service')}</title>
      </Head>
      <Header title="Terms of Service" />
      <Layout className="grid gap-[60px] pt-20">
        {sections.map((section, index) => (
          <Section
            className="whitespace-break-spaces"
            section={section.section}
            flavor="tos"
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
          />
        ))}
      </Layout>
    </div>
  );
}
