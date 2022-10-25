import BigButton from './BigButton';
import Layout from './Layout';
import LocalTime from './LocalTime';
import Weather from './Weather';

export default function Footer() {
  return (
    <footer className="bg-black pt-[51px] py-[30px] text-lblue">
      <Layout>
        <div className="italic pb-14 text-lg leading-[24px]">
          Contact us to upgrade your product and make it top-tier with our
          design.
        </div>
        <div className="flex flex-col mb-14">
          <BigButton variant="footer" className="mb-4">
            Discovery Call
          </BigButton>
          <BigButton variant="footer">Fill out the form</BigButton>
        </div>
        <div className="font-glow mb-7 text-[32px] font-medium leading-[100%]">
          Let’s make your project glow
        </div>
        <div className="flex text-white items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="styag mr-4 w-[24px] overflow-hidden rounded">
              <div className="h-2 bg-[#156DD1]"></div>
              <div className="h-2 bg-[#FFD948]"></div>
            </div>
            <div>Odessa, Ukraine</div>
          </div>
          <div className="flex items-center gap-3">
            <LocalTime />
            <Weather />
          </div>
        </div>
      </Layout>
    </footer>
  );
}
