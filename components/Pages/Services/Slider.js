import Link from 'next/link';
import Layout from '../../Layout';
import { CasesSlider2 } from '../../Pages/Home/CasesSlider';
import { useMediaAtom } from '../../../lib/agent';

export default function Slider() {
  const media = useMediaAtom();
  const filter = media === 'mobile' ? ['/beast', '/cryptogenie'] : [];

  return (
    <div>
      <CasesSlider2 filter={filter} disableOnMobile padding={false} />
      <Layout className="md:hidden">
        <Link
          href="/work"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-black px-8 py-[15px] text-[16px] uppercase leading-[24px] tracking-[0.03em]"
        >
          <div>Cases</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4335 8.7381L6.63137 18.5402L5.5 17.4088L15.3036 7.60527L7.90151 7.62145L7.89811 6.02177L18.0388 6L18.0177 16.1414L16.418 16.138L16.4335 8.7381Z"
              fill="#19191B"
            />
          </svg>
        </Link>
      </Layout>
    </div>
  );
}