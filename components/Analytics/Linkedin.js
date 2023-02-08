import Script from 'next/script';

export default function Linkedin() {
  return (
    <>
      <Script id="linkedin">
        {`
            _linkedin_partner_id = '4667426';
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            window.lintrk = function (a, b) {
              window.lintrk.q.push([a, b]);
            };
            window.lintrk.q = [];
        `}
      </Script>
      <Script
        onReady={() => {
          console.log('linkedin ready');
        }}
        strategy="afterInteractive"
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
      ></Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{
            display: 'none',
          }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=4667426&fmt=gif"
        />
      </noscript>
    </>
  );
}
