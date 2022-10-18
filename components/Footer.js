import Layout from './Layout';
import LocalTime from './LocalTime';
import Weather from './Weather';

export default function Footer() {
  return (
    <div className="bg-black py-[30px] text-lblue">
      <Layout>
        <div className="font-glow text-[32px] font-medium leading-[100%]">
          Let’s make your project glow
        </div>
        <div className="flex items-center justify-between text-sm">
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
    </div>
  );
}
