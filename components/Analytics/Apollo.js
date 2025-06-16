import Script from 'next/script';

export default function Apollo() {
  return (
    <Script id="apollo">
      {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"66f53c4af5724801b21086e3"})},
document.head.appendChild(o)}initApollo();`}
    </Script>
  );
}
