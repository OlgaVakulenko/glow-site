import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { routerHistory } from '../../../pages/_app';
import { ParallaxFooter } from '../../Footer';
import Header, { BurgerIcon } from '../../Header';
import ScrollContainer from '../../SmoothScroll/ScrollContainer';

export default function DefaultLayout({
  children,
  footer = true,
  page = '',
  showFormButton = true,
}) {
  const router = useRouter();
  const [history] = useAtom(routerHistory);
  const canGoBack = history.length > 0;

  return (
    <>
      <Header
        headerRightSlot={
          (page === 'clients' || page === 'form') && (
            <button
              onClick={() => {
                if (canGoBack) {
                  router.back();
                } else {
                  router.push('/');
                }
              }}
              className="flex w-[185px] justify-end"
              style={{
                color: 'var(--header-theme)',
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="currentColor"
                />
                <path d="M32 17L17 32M32 32L17 17" stroke="currentColor" />
              </svg>

              {/* <BurgerIcon isOpen={true} size={28} /> */}
            </button>
          )
        }
      />
      <ScrollContainer>
        {children}
        {footer && <ParallaxFooter showFormButton={showFormButton} />}
      </ScrollContainer>
    </>
  );
}
