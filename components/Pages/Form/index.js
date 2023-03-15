import Head from 'next/head';
import { useState } from 'react';
import Button from '../../Button';
import HeadTitle from '../../HeadTitle';
import Layout from '../../Layout';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import Reviews from '../Home/Reviews';
import Faq from './Faq';
import Form from './Form';
import gsap from '../../../dist/gsap';
import Linkedin from '../../Analytics/Linkedin';

export default function FormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <Linkedin />
      <HeadTitle title="Let’s Glow up your project" />
      {isSubmitted ? (
        <Layout className="pt-[165px] pb-32 md:pt-[256px]">
          <div className="flex flex-col md:flex-row">
            <PageHeading className="flex-grow">
              Thx! <br /> We’ll get back <br />
              to you soon
            </PageHeading>
            <div className="mt-6 flex items-end md:mt-0">
              <Button
                href="/work"
                className="min-w-[184px] justify-center"
                theme={'white'}
              >
                Watch Cases
              </Button>
            </div>
          </div>
        </Layout>
      ) : (
        <>
          <Layout className="pt-[216px] pb-32">
            <PageSubheading>
              Hi there, please fill this form so we know more about you.
            </PageSubheading>
            <PageHeading className="mt-[66px]">
              Let’s Glow up <br />
              your project
            </PageHeading>
          </Layout>
          <Form
            onSubmit={() => {
              setIsSubmitted(true);
              gsap.to(window, {
                scrollTo: {
                  y: 0,
                },
              });
            }}
          />
        </>
      )}

      <div className="pt-14 pb-[153px]">
        <Reviews />
      </div>
      <div className="pb-[153px]">
        <Faq />
      </div>
    </div>
  );
}
