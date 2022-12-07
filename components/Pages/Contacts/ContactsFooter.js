import BigButton from '../../BigButton';
import FooterLinks from '../../Footer/FooterLinks';
import Title from '../../Footer/Title';
import { useHeaderTheme } from '../../Header';
import Layout from '../../Layout';
import Star from '../../Star';

export default function ContactsFooter() {
  useHeaderTheme({ theme: 'brand' });

  return (
    <Layout className="flex min-h-screen flex-col justify-between pb-[24px] pt-[116px] md:pt-[275px] xl:pt-[216px]">
      <div className="mb-[46px] font-glow text-[40px] font-medium leading-10 md:mb-[108px] md:text-[60px] md:leading-[64px] xl:mb-[70px]">
        We can discuss <br className="md:hidden" /> your{' '}
        <br className="hidden md:inline" /> project <br className="md:hidden" />{' '}
        quickly
      </div>
      <div className="xl:flex xl:justify-between">
        <div className="relative mb-[38px] text-lg italic leading-6 md:mb-[76px] md:max-w-[328px] md:text-2xl xl:pt-[60px]">
          <div className="mb-[15px] xl:mb-[24px]">
            <Star />
          </div>
          For every Glow Team project, you will be coupled with our dedicated
          in-house team.
        </div>
        <div className="mb-[60px] md:mb-[100px] md:flex xl:grow">
          <BigButton
            variant="contacts"
            className="mb-[15px] md:mr-[72px] md:mb-0 md:ml-[120px] xl:ml-[112px]"
          >
            Discovery Call
          </BigButton>
          <BigButton variant="contacts">Fill out the form</BigButton>
        </div>
      </div>

      <FooterLinks className="!text-black" />
    </Layout>
  );
}
