import { useRouter } from 'next/router';
import Footer2 from '../../Footer2';
import Header from '../../Header';
import ScrollContainer from '../../SmoothScroll/ScrollContainer';
// import LenisScrollContainer from '../../SmoothScroll/LenisScrollContainer';

export default function DefaultLayout({
  children,
  footer = true,
  footerSuccess = false,
  footerProps = {},
}) {
  return (
    <>
      <Header />
      <ScrollContainer>
        {children}
        {footer && <Footer2 {...footerProps} footerSuccess={footerSuccess} />}
      </ScrollContainer>
    </>
  );
}
