import Layout from '../../Layout';
import PageHeading from '../../PageHeading';
import PageSubheading from '../../PageSubheading';
import Reviews from '../Home/Reviews';
import Faq from './Faq';
import Form from './Form';

export default function FormPage() {
  return (
    <div>
      <Layout className="pt-[216px] pb-32">
        <PageSubheading>
          Hi there, please fill this form so we know more about you.
        </PageSubheading>
        <PageHeading>
          Let’s Glow up <br />
          your project
        </PageHeading>
      </Layout>
      <Form />
      <div className="pt-14 pb-[153px]">
        <Reviews />
      </div>
      <div className="pb-[153px]">
        <Faq />
      </div>
    </div>
  );
}
