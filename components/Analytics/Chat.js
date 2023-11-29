import Script from 'next/script';

export default function Chat() {
  return (
    <>
      <Script
        id="chat-1"
        dangerouslySetInnerHTML={{
          __html: `window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 7051618,playbookUuid: '17c2ca9a-65be-45cf-bbf0-8d24b334e491',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})();`,
        }}
      />
      <Script
        src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
        strategy="afterInteractive"
      />
    </>
  );
}
