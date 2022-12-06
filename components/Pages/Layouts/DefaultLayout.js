import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { routerHistory } from '../../../pages/_app';
import { ParallaxFooter } from '../../Footer';
import Header, { BurgerIcon } from '../../Header';
import ScrollContainer from '../../SmoothScroll/ScrollContainer';

export default function DefaultLayout({ children, footer = true, page = '' }) {
  const router = useRouter();
  const [history] = useAtom(routerHistory);
  const showBackButton = page === 'clients' && history.length > 0;

  return (
    <>
      <Header
        headerRightSlot={
          page === 'clients' &&
          (showBackButton ? (
            <button
              onClick={() => {
                router.back();
              }}
            >
              <BurgerIcon isOpen={true} size={28} />
            </button>
          ) : (
            <div></div>
          ))
        }
      />
      <ScrollContainer>
        {children}
        {footer && <ParallaxFooter />}
      </ScrollContainer>
    </>
  );
}
