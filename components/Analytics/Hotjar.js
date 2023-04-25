import Script from 'next/script';

// if (typeof window !== 'undefined') {
//   window.hj =
//     window.hj ||
//     function () {
//       (window.hj.q = window.hj.q || []).push(arguments);
//     };
//   window._hjSettings = { hjid: 3447363, hjsv: 6 };
// }

export default function Hotjar() {
  return (
    <Script id="hotjar">
      {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3447363,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
    </Script>
  );
}
