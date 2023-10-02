import FooterForm from './Footer/FooterForm';
import FooterLinks from './Footer/FooterLinks';
import Layout from './Layout';

export default function Footer2() {
  return (
    <footer id="footer">
      <Layout disableOnMobile={true}>
        <div className="bg-black px-4 pb-[48px] pt-[44px] text-lblue md:rounded-3xl md:px-12 md:pb-20 md:pt-16 xl:p-20 4xl:px-24 4xl:py-[120px]">
          <div className="xl:grid xl:grid-flow-row xl:grid-cols-12 xl:gap-8">
            <div className="mb-8 font-glow text-[32px] leading-[32px] md:mb-[54px] md:max-w-[528px] md:text-[54px] md:leading-[56px] xl:col-span-6 xl:text-heading-h1-2 4xl:max-w-full 4xl:text-[92px] 4xl:leading-[92px]">
              Let’s make <br className="hidden md:block" />
              your project glow
            </div>
            <div className="xl:col-span-6">
              <FooterForm />
            </div>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className="py-6">
          <FooterLinks className="!text-black" />
        </div>
      </Layout>
    </footer>
  );
}
